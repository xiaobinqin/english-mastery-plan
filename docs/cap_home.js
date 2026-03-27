const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  const base = 'file://' + path.resolve(__dirname, '..');
  await page.goto(base + '/index.html');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'docs/screenshots/00_home.png', fullPage: false });
  console.log('Screenshot: 00_home.png');

  await browser.close();
})();
