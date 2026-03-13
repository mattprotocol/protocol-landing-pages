import matter from 'gray-matter';
import { marked } from 'marked';
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';

export interface HeroContent {
  eyebrow?: string;
  headline: string;
  headline_accent?: string;
  subhead: string;
  credentials?: string[];
  cta_label: string;
  cta_url: string;
  cta_secondary_label?: string;
  cta_secondary_url?: string;
  layout?: 'split' | 'full' | 'dark';
  background?: string;
  background_image?: string;
  background_video?: string;
  background_overlay?: boolean;
  theme?: 'dark' | 'light';
}

export interface BenefitItem {
  number?: string;
  icon?: string;
  photo?: string;
  title: string;
  body: string;
  bullets?: string[];
  link_label?: string;
  link_url?: string;
}

export interface BenefitsContent {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  layout?: 'grid' | 'numbered_steps';
  theme?: 'dark' | 'light';
  items: BenefitItem[];
}

export interface SocialProofItem {
  type: 'stat' | 'testimonial';
  value?: string;
  label?: string;
  quote?: string;
  author?: string;
  detail?: string;
}

export interface SocialProofContent {
  eyebrow?: string;
  title?: string;
  theme?: 'dark' | 'light';
  items: SocialProofItem[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQContent {
  eyebrow?: string;
  title?: string;
  theme?: 'dark' | 'light';
  items: FAQItem[];
}

export interface CTABottomContent {
  eyebrow?: string;
  headline: string;
  body: string;
  cta_label: string;
  cta_url: string;
  subtext?: string;
  theme?: 'dark' | 'light';
  use_gradient?: boolean;
}

export interface TimelineItem {
  number: string;
  title: string;
  body: string;
}

export interface TimelineContent {
  eyebrow?: string;
  title: string;
  theme?: 'dark' | 'light';
  items: TimelineItem[];
  footnote?: string;
}

export interface EvidenceContent {
  eyebrow?: string;
  headline: string;
  headline_accent?: string;
  body: string;
  theme?: 'dark' | 'light';
}

export interface CampaignContent {
  hero: HeroContent;
  benefits?: BenefitsContent | null;
  social_proof?: SocialProofContent | null;
  faq?: FAQContent | null;
  cta_bottom?: CTABottomContent | null;
  timeline?: TimelineContent | null;
  evidence?: EvidenceContent | null;
  pricing?: unknown;
  comparison?: unknown;
  quiz?: unknown;
  bodyHtml: string;
}

export interface CampaignConfig {
  name: string;
  slug: string;
  status: string;
  theme?: 'dark' | 'light';
  offer: { type: string; display_price?: string; anchor_price?: string };
  cta: { type: string; url: string };
  seo: { index: boolean; canonical: string };
  utm: { campaign: string };
  experiments: Array<{ id: string; hypothesis: string; variant: string; status: string }>;
  [key: string]: unknown;
}

export function loadCampaignContent(slug: string): CampaignContent | null {
  const contentPath = path.join(process.cwd(), 'campaigns', slug, 'content.md');
  if (!fs.existsSync(contentPath)) return null;

  const raw = fs.readFileSync(contentPath, 'utf-8');
  const { data, content } = matter(raw);

  // Hero: handle legacy background field → layout
  let hero: HeroContent = data.hero;
  if (hero.background && !hero.layout) {
    hero = { ...hero, layout: hero.background as 'dark' | 'full' | 'split' };
  }

  // social_proof: handle flat array (old) vs object with items (new)
  let social_proof: SocialProofContent | null = null;
  if (data.social_proof) {
    if (Array.isArray(data.social_proof)) {
      social_proof = { items: data.social_proof };
    } else {
      social_proof = data.social_proof;
    }
  }

  // faq: handle flat array (old) vs object with items (new)
  let faq: FAQContent | null = null;
  if (data.faq) {
    if (Array.isArray(data.faq)) {
      faq = { items: data.faq };
    } else {
      faq = data.faq;
    }
  }

  return {
    hero,
    benefits: data.benefits || null,
    social_proof,
    faq,
    cta_bottom: data.cta_bottom || null,
    timeline: data.timeline || null,
    evidence: data.evidence || null,
    pricing: data.pricing || null,
    comparison: data.comparison || null,
    quiz: data.quiz || null,
    bodyHtml: content.trim() ? marked(content) as string : '',
  };
}

export function loadCampaignConfig(slug: string): CampaignConfig | null {
  const configPath = path.join(process.cwd(), 'campaigns', slug, 'config.yaml');
  if (!fs.existsSync(configPath)) return null;

  const raw = fs.readFileSync(configPath, 'utf-8');
  return yaml.parse(raw) as CampaignConfig;
}

export function getAllCampaignSlugs(): string[] {
  const campaignsDir = path.join(process.cwd(), 'campaigns');
  if (!fs.existsSync(campaignsDir)) return [];

  return fs.readdirSync(campaignsDir)
    .filter(dir => dir !== '_template' && !dir.startsWith('.'))
    .filter(dir => fs.existsSync(path.join(campaignsDir, dir, 'content.md')));
}
