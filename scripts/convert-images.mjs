/**
 * Script de conversion des images JPG/PNG en WebP
 * Usage: node scripts/convert-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGES_DIR = "./public/images";
const QUALITY = 80; // Qualité WebP (0-100)

async function convertImages() {
  console.log("🖼️  Conversion des images en WebP...\n");

  const files = await readdir(IMAGES_DIR);
  let totalSaved = 0;
  let converted = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const inputPath = join(IMAGES_DIR, file);
    const outputPath = join(IMAGES_DIR, basename(file, ext) + ".webp");

    const inputStats = await stat(inputPath);
    const inputSize = inputStats.size;

    try {
      await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);

      const outputStats = await stat(outputPath);
      const outputSize = outputStats.size;
      const saved = inputSize - outputSize;
      const percent = ((saved / inputSize) * 100).toFixed(1);

      console.log(
        `✅ ${file} → ${basename(outputPath)} (${formatBytes(inputSize)} → ${formatBytes(outputSize)}, -${percent}%)`
      );

      totalSaved += saved;
      converted++;
    } catch (err) {
      console.error(`❌ Erreur pour ${file}:`, err.message);
    }
  }

  console.log(`\n📊 Résumé:`);
  console.log(`   Images converties: ${converted}`);
  console.log(`   Espace économisé: ${formatBytes(totalSaved)}`);
  console.log(`\n💡 N'oubliez pas de:`);
  console.log(`   1. Mettre à jour les références dans le code (.jpg → .webp)`);
  console.log(`   2. Supprimer les anciens fichiers JPG/PNG si souhaité`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " Ko";
  return (bytes / (1024 * 1024)).toFixed(2) + " Mo";
}

convertImages().catch(console.error);
