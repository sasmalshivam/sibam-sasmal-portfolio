const puppeteer = require('puppeteer-core');
const path = require('path');

async function snapSkills() {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-gpu']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1100 });
  await page.goto('https://sibamsasmalsportfolio.vercel.app', { waitUntil: 'networkidle2' });
  
  await page.evaluate(() => {
    document.getElementById('skills').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1500));
  
  const skillsElement = await page.$('#skills');
  const outPath = 'C:/Users/WELCOME/.gemini/antigravity/brain/abe2cf79-41f0-48a7-b356-ca8a38330ff2/skills_with_logos.png';
  if (skillsElement) {
    await skillsElement.screenshot({ path: outPath });
    console.log('✅ Skills section screenshot with logos saved to:', outPath);
  }
  await browser.close();
}

snapSkills().catch(e => console.error(e));

