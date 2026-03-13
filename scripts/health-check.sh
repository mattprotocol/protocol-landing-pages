#!/bin/bash
set -e

ERRORS=0

echo "Running Protocol Landing Pages health check..."
echo ""

# Check all campaigns (skip _template)
for dir in campaigns/*/; do
  campaign=$(basename "$dir")
  if [ "$campaign" = "_template" ]; then
    continue
  fi

  echo "Checking campaign: $campaign"

  # Required files
  for file in content.md config.yaml; do
    if [ ! -f "${dir}${file}" ]; then
      echo "  ERROR: Missing $file"
      ERRORS=$((ERRORS + 1))
    else
      echo "  OK: $file"
    fi
  done

  # Required config fields
  if [ -f "${dir}config.yaml" ]; then
    for field in name slug status; do
      if ! grep -q "^$field:" "${dir}config.yaml"; then
        echo "  ERROR: config.yaml missing required field: $field"
        ERRORS=$((ERRORS + 1))
      fi
    done
  fi

  echo ""
done

if [ $ERRORS -eq 0 ]; then
  echo "Health check passed!"
  exit 0
else
  echo "Health check failed with $ERRORS error(s)"
  exit 1
fi
