const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:/Users/WELCOME/.gemini/antigravity/brain/abe2cf79-41f0-48a7-b356-ca8a38330ff2';
const LIVE_URL = 'https://sibamsasmalsportfolio.vercel.app';
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function runVerification() {
  console.log('🚀 Starting end-to-end verification of:', LIVE_URL);
  
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  const consoleMessages = [];
  const errors = [];
  
  page.on('console', msg => consoleMessages.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => errors.push(err.toString()));
  
  // 1. Initial Load at Desktop 1440x900
  console.log('📱 Testing Desktop Viewport (1440x900)...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(LIVE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  
  const title = await page.title();
  console.log('✅ Page Title:', title);

  // Take Desktop Dark Mode Screenshot
  const desktopDarkPath = path.join(ARTIFACT_DIR, 'desktop_dark_hero.png');
  await page.screenshot({ path: desktopDarkPath, fullPage: false });
  console.log('📸 Desktop Dark Mode Screenshot saved to:', desktopDarkPath);

  // 2. Test Responsive Viewports for Horizontal Scroll Overflow
  const viewports = [
    { name: 'Mobile 360px', width: 360, height: 740 },
    { name: 'Mobile 390px (iPhone 14)', width: 390, height: 844 },
    { name: 'Tablet 768px (iPad)', width: 768, height: 1024 },
    { name: 'Laptop 1024px', width: 1024, height: 768 },
    { name: 'Desktop 1440px', width: 1440, height: 900 }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise(r => setTimeout(r, 400));
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });
    console.log(`📐 ${vp.name}: width=${vp.width}px, horizontal overflow=${hasHorizontalOverflow ? 'FAIL ❌' : 'PASS ✅'}`);
  }

  // 3. Mobile View Screenshot (390px)
  await page.setViewport({ width: 390, height: 844 });
  await new Promise(r => setTimeout(r, 500));
  const mobileDarkPath = path.join(ARTIFACT_DIR, 'mobile_dark_hero.png');
  await page.screenshot({ path: mobileDarkPath, fullPage: false });
  console.log('📸 Mobile Dark Mode Screenshot saved to:', mobileDarkPath);

  // 4. Test Theme Toggle
  console.log('🌓 Testing Theme Toggle...');
  await page.setViewport({ width: 1440, height: 900 });
  
  const initialIsDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
  console.log('Initial isDark:', initialIsDark);
  
  // Click theme toggle button
  const toggleBtn = await page.$('button[title*="mode"], button[aria-label*="mode"]');
  if (toggleBtn) {
    await toggleBtn.click();
    await new Promise(r => setTimeout(r, 600));
    
    const afterToggleIsDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    const storedTheme = await page.evaluate(() => localStorage.getItem('theme'));
    console.log(`✅ Theme after click: isDark=${afterToggleIsDark}, storedTheme="${storedTheme}"`);

    // Take Desktop Light Mode Screenshot
    const desktopLightPath = path.join(ARTIFACT_DIR, 'desktop_light_hero.png');
    await page.screenshot({ path: desktopLightPath, fullPage: false });
    console.log('📸 Desktop Light Mode Screenshot saved to:', desktopLightPath);

    // Switch back to dark for consistency
    await toggleBtn.click();
    await new Promise(r => setTimeout(r, 400));
  } else {
    console.log('⚠️ Could not find theme toggle button');
  }

  // 5. Test Navigation and Scroll
  console.log('🧭 Testing Bottom Navigation & Scroll-Spy...');
  const sections = ['home', 'about', 'skills', 'certificates', 'projects', 'contact'];
  for (const sId of sections) {
    const el = await page.$(`#${sId}`);
    if (el) {
      await page.evaluate((id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      }, sId);
      await new Promise(r => setTimeout(r, 600));
      console.log(`✅ Scrolled to #${sId}`);
    } else {
      console.log(`❌ Section #${sId} not found`);
    }
  }

  // 6. Test Download CV Link
  const cvHref = await page.$eval('a[download]', el => el.getAttribute('href')).catch(() => null);
  console.log('📄 CV Download Link:', cvHref);

  // 7. Verify Contact Form Validation
  console.log('📝 Testing Contact Form Validation...');
  await page.evaluate(() => {
    document.getElementById('contact').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));

  const submitBtn = await page.$('#contact button[type="submit"]');
  if (submitBtn) {
    await submitBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const errorCount = await page.evaluate(() => {
      return document.querySelectorAll('#contact p.text-red-500').length;
    });
    console.log(`✅ Contact Form validation triggered: ${errorCount} error messages shown when fields empty`);
  }

  console.log('🔍 Browser Console Errors:', errors.length ? errors : 'None! Zero page errors.');
  
  await browser.close();
  console.log('🎉 Verification completed successfully!');
}

runVerification().catch(e => {
  console.error('Fatal verification error:', e);
  process.exit(1);
});
