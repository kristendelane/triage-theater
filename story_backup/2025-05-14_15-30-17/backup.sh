#!/bin/bash
echo "🩸 Initiating Full Project Backup Ritual..."

# Timestamp for unique folder name
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
BACKUP_DIR="story_backup/$TIMESTAMP"
mkdir -p "$BACKUP_DIR"

# Copy critical directories
cp -r src/Story-Data "$BACKUP_DIR/Story-Data"
cp -r src "$BACKUP_DIR/"
cp -r public "$BACKUP_DIR/"

# Copy config and scripts
cp vite.config.js "$BACKUP_DIR/" 2>/dev/null
cp package.json "$BACKUP_DIR/" 2>/dev/null
cp package-lock.json "$BACKUP_DIR/" 2>/dev/null
cp *.sh "$BACKUP_DIR/" 2>/dev/null

# Git stage
git add src public vite.config.js package.json package-lock.json *.sh story_backup

# Commit and push
git commit -m "🩸 Auto-backup on $(date +'%Y-%m-%d %H:%M')"
git push origin main

echo "✅ Backup complete. The blood is saved in: $BACKUP_DIR"
