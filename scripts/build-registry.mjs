import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const campaignsDir = path.join(root, 'campaigns');
const registryPath = path.join(root, 'registry.json');

const campaigns = [];

const dirs = fs.readdirSync(campaignsDir)
  .filter(dir => dir !== '_template' && !dir.startsWith('.'))
  .filter(dir => {
    const configPath = path.join(campaignsDir, dir, 'config.yaml');
    return fs.existsSync(configPath);
  });

for (const dir of dirs) {
  const configPath = path.join(campaignsDir, dir, 'config.yaml');
  const raw = fs.readFileSync(configPath, 'utf-8');
  const config = yaml.parse(raw);

  campaigns.push({
    slug: config.slug || dir,
    name: config.name || dir,
    status: config.status || 'draft',
    offer_type: config.offer?.type || '',
    template: config.template || 'standard',
    created: config.created || '',
    url: `https://landing.protocol.us/${config.slug || dir}`,
  });
}

const registry = {
  campaigns,
  generated_at: new Date().toISOString(),
};

fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
console.log(`Registry updated: ${campaigns.length} campaign(s) written to registry.json`);
