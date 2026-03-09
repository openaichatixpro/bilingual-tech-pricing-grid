#!/bin/bash

# This script fixes the npm lock file by removing the old lock and generating a new one
# This is necessary when package.json dependencies have changed

echo "Fixing npm lock file..."

# Remove old lock files if they exist
if [ -f "package-lock.json" ]; then
  echo "Removing old package-lock.json..."
  rm -f package-lock.json
fi

if [ -f "npm-shrinkwrap.json" ]; then
  echo "Removing old npm-shrinkwrap.json..."
  rm -f npm-shrinkwrap.json
fi

# Clear npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Regenerate lock file
echo "Regenerating lock file..."
npm install

echo "Lock file regenerated successfully!"
