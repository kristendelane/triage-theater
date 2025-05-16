#!/bin/bash

echo "🩸 Initiating Story Backup Ritual..."

# Navigate to project directory
cd "$(dirname "$0")"

# Timestamp
timestamp=$(date +"%Y-%m-%d_%H-%M-%S")

# Stage changes
echo "📁 Staging all changes..."
git add .

# Commit
echo "🗒️ Committing..."
git commit -m "🩸 Auto-backup on $timestamp"

# Push
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Backup complete. The blood is saved."
