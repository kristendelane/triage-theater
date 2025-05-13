#!/bin/bash
echo "🩸 Initiating Full Project Backup Ritual..."

# Timestamp for unique folder name
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_DIR="story_backup/$TIMESTAMP"
mkdir -p "$BACKUP_DIR"

# Copy critical directories (no wildcards!)
cp -r Story-Data "$BACKUP_DIR/"
cp -r src "$BACKUP_DIR/"
cp -r public "$BACKUP_DIR/"

# Copy config and script files
cp vite.config.js "$BACKUP_DIR/" 2>/dev/null
cp package.json "$BACKUP_DIR/" 2>/dev/null
cp package-lock.json "$BACKUP_DIR/" 2>/dev/null
cp *.sh "$BACKUP_DIR/" 2>/dev/null

# Stage changes for git
git add Story-Data src public vite.config.js package.json package-lock.json *.sh story_backup

# Commit with timestamp
git commit -m "🩸 Auto-backup on $(date +'%Y-%m-%d %H:%M')"

# Push to GitHub
git push origin main

echo "✅ Backup complete. The blood is saved in: $BACKUP_DIR"
