import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

interface LeadRecord {
  request_id: string;
  event_id: string;
  campaign_slug: string;
  variant_id: string;
  offer_type: string;
  name: string;
  email: string;
  phone: string;
  page_url: string;
  referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  timestamp: string;
}

export async function insertLead(lead: LeadRecord): Promise<{ ok: boolean }> {
  if (!supabase) {
    console.warn('Supabase not configured');
    return { ok: false };
  }

  const { error } = await supabase.from('leads').insert(lead);
  if (error) {
    console.error('Supabase insert error:', error);
    return { ok: false };
  }
  return { ok: true };
}
