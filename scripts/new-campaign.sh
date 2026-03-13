#!/bin/bash
set -e

CAMPAIGN_NAME=$1

if [ -z "$CAMPAIGN_NAME" ]; then
  echo "Usage: npm run new-campaign <campaign-name>"
  exit 1
fi

CAMPAIGN_DIR="campaigns/$CAMPAIGN_NAME"

if [ -d "$CAMPAIGN_DIR" ]; then
  echo "Error: Campaign '$CAMPAIGN_NAME' already exists"
  exit 1
fi

echo "Creating campaign: $CAMPAIGN_NAME"

cp -r campaigns/_template "$CAMPAIGN_DIR"

# Replace CAMPAIGN_NAME placeholder (macOS sed syntax)
sed -i '' "s/CAMPAIGN_NAME/$CAMPAIGN_NAME/g" "$CAMPAIGN_DIR/content.md"
sed -i '' "s/CAMPAIGN_NAME/$CAMPAIGN_NAME/g" "$CAMPAIGN_DIR/config.yaml"
sed -i '' "s/CAMPAIGN_NAME/$CAMPAIGN_NAME/g" "$CAMPAIGN_DIR/brief.md"
sed -i '' "s/CAMPAIGN_NAME/$CAMPAIGN_NAME/g" "$CAMPAIGN_DIR/ads.md"

# Set created date
TODAY=$(date +%Y-%m-%d)
sed -i '' "s/YYYY-MM-DD/$TODAY/g" "$CAMPAIGN_DIR/config.yaml"

# Rebuild registry
npm run build-registry

echo ""
echo "Campaign created at $CAMPAIGN_DIR"
echo ""
echo "Next steps:"
echo "  1. Edit $CAMPAIGN_DIR/content.md with your campaign copy"
echo "  2. Edit $CAMPAIGN_DIR/config.yaml with campaign settings"
echo "  3. Run: npm run dev"
echo "  4. Visit: http://localhost:4321/$CAMPAIGN_NAME"
