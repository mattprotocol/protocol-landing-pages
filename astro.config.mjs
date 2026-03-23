import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    includeFiles: [
      './campaigns/concierge-medicine-boston/content.md',
      './campaigns/concierge-medicine-boston/config.yaml',
      './campaigns/longevity-doctor-boston/content.md',
      './campaigns/longevity-doctor-boston/config.yaml',
      './campaigns/vo2-max-testing-boston/content.md',
      './campaigns/vo2-max-testing-boston/config.yaml',
      './campaigns/sample-longevity-audit/content.md',
      './campaigns/sample-longevity-audit/config.yaml',
      './campaigns/functional-medicine-boston/content.md',
      './campaigns/functional-medicine-boston/config.yaml',
      './campaigns/executive-health-boston/content.md',
      './campaigns/executive-health-boston/config.yaml',
      './campaigns/longevity-audit-boston/content.md',
      './campaigns/longevity-audit-boston/config.yaml',
      './campaigns/healthspan-plus/content.md',
      './campaigns/healthspan-plus/config.yaml',
    ],
  }),
});
