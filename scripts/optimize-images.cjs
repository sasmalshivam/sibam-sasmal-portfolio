const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const PUBLIC_DIR = 'C:/Users/WELCOME/.gemini/antigravity/scratch/sibam-sasmal-portfolio/public';

async function optimizeImages() {
  console.log('🖼️ Starting image optimization...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // Helper to optimize image using browser canvas
  async function compressImageToWebP(inputFilePath, maxDimension, quality = 0.85) {
    const fileData = fs.readFileSync(inputFilePath);
    const mime = inputFilePath.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const base64 = `data:${mime};base64,${fileData.toString('base64')}`;

    const webpBase64 = await page.evaluate(async (src, maxDim, q) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/webp', q));
        };
        img.src = src;
      });
    }, base64, maxDimension, quality);

    return Buffer.from(webpBase64.split(',')[1], 'base64');
  }

  // 1. Optimize animated_3d_portfolio_portrait.svg embedded image
  const svgPath = path.join(PUBLIC_DIR, 'animated_3d_portfolio_portrait.svg');
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  
  // Extract the base64 png inside svg
  const match = svgContent.match(/xlink:href="(data:image\/png;base64,[^"]+)"/);
  if (match) {
    console.log('Found embedded PNG in SVG! Compressing to WebP...');
    const originalBase64 = match[1];
    const compressedWebpBase64 = await page.evaluate(async (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          // Scale down to 800px width (plenty for max-width 520px hero portrait)
          const scale = 800 / img.width;
          canvas.width = 800;
          canvas.height = Math.round(img.height * scale);
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL('image/webp', 0.85));
        };
        img.src = src;
      });
    }, originalBase64);

    const newSvg = svgContent.replace(match[0], `xlink:href="${compressedWebpBase64}"`);
    fs.writeFileSync(svgPath, newSvg);
    const oldSize = (Buffer.byteLength(svgContent) / 1024).toFixed(1);
    const newSize = (Buffer.byteLength(newSvg) / 1024).toFixed(1);
    console.log(`✅ animated_3d_portfolio_portrait.svg optimized: ${oldSize} KB -> ${newSize} KB!`);
  }

  // 2. Optimize each section avatar in /public/avatars/
  const avatarFiles = fs.readdirSync(path.join(PUBLIC_DIR, 'avatars'));
  for (const file of avatarFiles) {
    const fullPath = path.join(PUBLIC_DIR, 'avatars', file);
    const stats = fs.statSync(fullPath);
    if (stats.size > 200 * 1024) {
      console.log(`Compressing ${file} (${(stats.size / 1024).toFixed(1)} KB)...`);
      const compressed = await compressImageToWebP(fullPath, 700, 0.82);
      fs.writeFileSync(fullPath, compressed);
      const newStats = fs.statSync(fullPath);
      console.log(` -> Optimized ${file}: ${(newStats.size / 1024).toFixed(1)} KB`);
    }
  }

  await browser.close();
  console.log('🎉 Image optimization completed!');
}

optimizeImages().catch(e => console.error(e));
