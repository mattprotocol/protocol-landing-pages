import { createHash } from 'node:crypto';

const META_PIXEL_ID = import.meta.env.META_PIXEL_ID;
const META_CAPI_TOKEN = import.meta.env.META_CAPI_TOKEN;

interface CAPIEvent {
  event_id: string;
  event_name: string;
  email: string;
  phone?: string;
  page_url: string;
  campaign_slug: string;
  fbclid?: string;
  fbc?: string;
}

function hashSHA256(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

export async function sendCapiEvent(event: CAPIEvent): Promise<void> {
  if (!META_PIXEL_ID || !META_CAPI_TOKEN) {
    console.warn('Meta CAPI not configured');
    return;
  }

  const payload = {
    data: [{
      event_name: event.event_name,
      event_time: Math.floor(Date.now() / 1000),
      event_id: event.event_id,
      event_source_url: event.page_url,
      action_source: 'website',
      user_data: {
        em: [hashSHA256(event.email)],
        ph: event.phone ? [hashSHA256(event.phone)] : undefined,
        fbc: event.fbc || undefined,
      },
      custom_data: {
        campaign_slug: event.campaign_slug,
      }
    }]
  };

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );

  if (!res.ok) {
    console.error('Meta CAPI error:', await res.text());
  }
}
