const { chromium } = require('playwright');

(async () => {
    
  const browser = await chromium.launch({
    //headless: false // set this to true
  });
  const page = await browser.newPage();
  await page.goto('https://podhub.herokuapp.com/home');
  await page.screenshot({ path: `example.png` });
  await browser.close();
})();