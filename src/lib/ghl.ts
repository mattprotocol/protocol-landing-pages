const GHL_WEBHOOK_URL = import.meta.env.GHL_WEBHOOK_URL;

interface GHLPayload {
  name: string;
  email: string;
  phone: string;
  campaign_slug: string;
  variant_id: string;
  offer_type: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  page_url: string;
  referrer: string;
  timestamp: string;
}

export async function sendToGHL(payload: GHLPayload): Promise<{ ok: boolean }> {
  if (!GHL_WEBHOOK_URL) {
    console.warn('GHL_WEBHOOK_URL not configured');
    return { ok: false };
  }

  const res = await fetch(GHL_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      customField: {
        campaign_slug: payload.campaign_slug,
        variant_id: payload.variant_id,
        offer_type: payload.offer_type,
        utm_source: payload.utm_source || '',
        utm_medium: payload.utm_medium || '',
        utm_campaign: payload.utm_campaign || '',
        utm_content: payload.utm_content || '',
        utm_term: payload.utm_term || '',
        gclid: payload.gclid || '',
        page_url: payload.page_url,
        referrer: payload.referrer,
      },
      tags: [`source:${payload.campaign_slug}`],
    })
  });

  return { ok: res.ok };
}
