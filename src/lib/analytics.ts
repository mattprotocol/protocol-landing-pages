export interface AnalyticsEvent {
  event_name: string;
  campaign_slug: string;
  variant_id?: string;
  value?: number;
  currency?: string;
}

export interface ConversionEvent extends AnalyticsEvent {
  event_id: string;
  send_to?: string;
}
