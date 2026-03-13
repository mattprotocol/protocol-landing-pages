import type { APIRoute } from 'astro';
import { sendToGHL } from '../../lib/ghl';
import { insertLead } from '../../lib/supabase';
import { sendCapiEvent } from '../../lib/meta-capi';

// Required for hybrid mode — this route must be a serverless function
export const prerender = false;

// Simple in-memory dedup (survives for duration of serverless cold start)
const recentRequestIds = new Set<string>();
const MAX_DEDUP_SIZE = 10000;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      request_id, event_id, campaign_slug, variant_id, offer_type,
      name, email, phone, page_url, referrer,
      utm_source, utm_medium, utm_campaign, utm_content, utm_term,
      gclid, fbclid
    } = body;

    // Server-side dedup
    if (recentRequestIds.has(request_id)) {
      return new Response(JSON.stringify({ success: true, deduplicated: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    recentRequestIds.add(request_id);
    if (recentRequestIds.size > MAX_DEDUP_SIZE) {
      const first = recentRequestIds.values().next().value;
      if (first) recentRequestIds.delete(first);
    }

    // Fire all three in parallel — each is independent
    const [ghlResult, supabaseResult, capiResult] = await Promise.allSettled([
      sendToGHL({
        name, email, phone, campaign_slug, variant_id, offer_type,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        gclid, page_url, referrer, timestamp: new Date().toISOString()
      }),
      insertLead({
        request_id, event_id, campaign_slug, variant_id, offer_type,
        name, email, phone, page_url, referrer,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        gclid, fbclid, timestamp: new Date().toISOString()
      }),
      sendCapiEvent({
        event_id, event_name: 'Lead', email, phone,
        page_url, campaign_slug,
        fbclid, fbc: fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined
      })
    ]);

    const ghlOk = ghlResult.status === 'fulfilled' && ghlResult.value.ok;
    const supabaseOk = supabaseResult.status === 'fulfilled' && supabaseResult.value.ok;
    const capiOk = capiResult.status === 'fulfilled';

    // Success if at least GHL or Supabase succeeded, or if neither is configured
    // (dev mode: allows form UX testing without real integrations)
    const neitherConfigured = !import.meta.env.GHL_WEBHOOK_URL && !import.meta.env.SUPABASE_URL;
    const success = ghlOk || supabaseOk || neitherConfigured;

    return new Response(JSON.stringify({
      success,
      ghl_status: ghlOk ? 'ok' : 'failed',
      supabase_status: supabaseOk ? 'ok' : 'failed',
      capi_status: capiOk ? 'ok' : 'failed'
    }), {
      status: success ? 200 : 500,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Submit handler error:', err);
    return new Response(JSON.stringify({ success: false, error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
