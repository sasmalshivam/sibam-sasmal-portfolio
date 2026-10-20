const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const UPLOAD_DIR = 'C:/Users/WELCOME/.gemini/antigravity/brain/abe2cf79-41f0-48a7-b356-ca8a38330ff2/.user_uploaded';
const PUBLIC_AVATARS = 'C:/Users/WELCOME/.gemini/antigravity/scratch/sibam-sasmal-portfolio/public/avatars';

const mappings = [
  {
    src: path.join(UPLOAD_DIR, 'media_1792524138698_b6aeb5d8.jpg'),
    dest: path.join(PUBLIC_AVATARS, 'about_avatar.jpg'),
    label: 'About Me Avatar'
  },
  {
    src: path.join(UPLOAD_DIR, 'media_1792524204404_bf18f7ed.png'),
    dest: path.join(PUBLIC_AVATARS, 'skills_avatar.png'),
    destJpg: path.join(PUBLIC_AVATARS, 'skills_avatar.jpg'),
    label: 'My Skills Avatar'
  },
  {
    src: path.join(UPLOAD_DIR, 'media_1792524267633_99dfa707.jpg'),
    dest: path.join(PUBLIC_AVATARS, 'achievements_avatar.jpg'),
    label: 'Recognized Achievements Avatar'
  },
  {
    src: path.join(UPLOAD_DIR, 'media_1792524318725_c564073e.jpg'),
    dest: path.join(PUBLIC_AVATARS, 'projects_avatar.jpg'),
    destContact: path.join(PUBLIC_AVATARS, 'contact_avatar.jpg'),
    label: 'Featured Projects & Contact Avatar'
  }
];

async function updateAndOptimize() {
  console.log('🚀 Processing user-provided section avatars...');
  
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();

  async function optimizeImg(inputPath, maxDim, quality = 0.88) {
    const data = fs.readFileSync(inputPath);
    const mime = inputPath.endsWith('.png') ? 'image/png' : 'image/jpeg';
    const base64 = `data:${mime};base64,${data.toString('base64')}`;

    const resBase64 = await page.evaluate(async (src, dim, q) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          let w = img.width;
          let h = img.height;
          if (w > dim || h > dim) {
            if (w > h) {
              h = Math.round((h * dim) / w);
              w = dim;
            } else {
              w = Math.round((w * dim) / h);
              h = dim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', q));
        };
        img.src = src;
      });
    }, base64, maxDim, quality);

    return Buffer.from(resBase64.split(',')[1], 'base64');
  }

  for (const item of mappings) {
    console.log(`Optimizing ${item.label}...`);
    const optimizedBuffer = await optimizeImg(item.src, 900, 0.88);
    fs.writeFileSync(item.dest, optimizedBuffer);
    console.log(`✅ Saved ${item.dest} (${(optimizedBuffer.length / 1024).toFixed(1)} KB)`);

    if (item.destJpg) {
      fs.writeFileSync(item.destJpg, optimizedBuffer);
    }
    if (item.destContact) {
      fs.writeFileSync(item.destContact, optimizedBuffer);
      console.log(`✅ Also updated Contact avatar with ${item.destContact}`);
    }
  }

  await browser.close();
  console.log('🎉 All section avatars updated successfully!');
}

updateAndOptimize().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
