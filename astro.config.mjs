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
    ],
  }),
});
