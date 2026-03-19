import matter from 'gray-matter';
import { marked } from 'marked';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'yaml';

// Resolve campaigns dir relative to this file, not process.cwd()
// This works reliably on Vercel serverless where cwd may differ
// Resolve campaigns dir: try multiple strategies since compiled output
// path differs from source path (src/lib/ vs dist/server/chunks/)
function findCampaignsDir(): string {
  const candidates = [
    path.join(process.cwd(), 'campaigns'),                    // Vercel function root
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..', 'campaigns'),  // from dist/server/chunks/
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'campaigns'),         // from src/lib/
  ];
  for (const dir of candidates) {
    if (fs.existsSync(dir)) return dir;
  }
  return candidates[0]; // fallback
}
const CAMPAIGNS_DIR = findCampaignsDir();

export interface CampaignContent {
  hero: {
    headline: string;
    subhead: string;
    cta_label: string;
    cta_url: string;
    background?: 'dark' | 'light' | 'image';
  };
  benefits?: {
    title: string;
    layout?: 'grid' | 'list' | 'alternating';
    items: Array<{
      icon?: string;
      title: string;
      body: string;
    }>;
  } | null;
  social_proof?: Array<{
    type: 'stat' | 'testimonial' | 'logo_bar';
    value?: string;
    label?: string;
    quote?: string;
    author?: string;
    detail?: string;
  }> | null;
  faq?: Array<{
    q: string;
    a: string;
  }> | null;
  cta_bottom?: {
    headline: string;
    body: string;
    cta_label: string;
    cta_url: string;
  } | null;
  pricing?: unknown;
  comparison?: unknown;
  quiz?: unknown;
  bodyHtml: string;
}

export interface CampaignConfig {
  name: string;
  slug: string;
  status: string;
  offer: { type: string; display_price?: string; anchor_price?: string };
  cta: { type: string; url: string };
  seo: { index: boolean; canonical: string };
  utm: { campaign: string };
  experiments: Array<{ id: string; hypothesis: string; variant: string; status: string }>;
  [key: string]: unknown;
}

export function loadCampaignContent(slug: string): CampaignContent | null {
  const contentPath = path.join(CAMPAIGNS_DIR, slug, 'content.md');
  if (!fs.existsSync(contentPath)) return null;

  const raw = fs.readFileSync(contentPath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    hero: data.hero,
    benefits: data.benefits || null,
    social_proof: data.social_proof || null,
    faq: data.faq || null,
    cta_bottom: data.cta_bottom || null,
    pricing: data.pricing || null,
    comparison: data.comparison || null,
    quiz: data.quiz || null,
    bodyHtml: content.trim() ? marked(content) as string : '',
  };
}

export function loadCampaignConfig(slug: string): CampaignConfig | null {
  const configPath = path.join(CAMPAIGNS_DIR, slug, 'config.yaml');
  if (!fs.existsSync(configPath)) return null;

  const raw = fs.readFileSync(configPath, 'utf-8');
  return yaml.parse(raw) as CampaignConfig;
}

export function getAllCampaignSlugs(): string[] {
  if (!fs.existsSync(CAMPAIGNS_DIR)) return [];

  return fs.readdirSync(CAMPAIGNS_DIR)
    .filter(dir => dir !== '_template' && !dir.startsWith('.'))
    .filter(dir => fs.existsSync(path.join(CAMPAIGNS_DIR, dir, 'content.md')));
}
