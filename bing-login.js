const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.bing.com/
  await page.goto('https://www.bing.com');

  // Click a[role="button"]:has-text("Sign in")
  await page.click('a[role="button"]:has-text("Sign in")');

  await page.goto('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1619667757&rver=6.7.6631.0&wp=MBI_SSL&wreply=https%3a%2f%2fwww.bing.com%2fsecure%2fPassport.aspx%3frequrl%3dhttps%253a%252f%252fwww.bing.com%252f%253ftoHttps%253d1%2526redig%253d9D34ADA9BAF24812A324A4DD8D672DD9%2526wlexpsignin%253d1%26sig%3d3AEC14AAB90E67DE0C010482B8BD66DE&lc=1033&id=264960&CSRFToken=46827246-c966-4aec-a22e-0e006a594b2e&aadredir=1');

  // Click [placeholder="Email, phone, or Skype"]
  await page.click('[placeholder="Email, phone, or Skype"]');

  // Fill [placeholder="Email, phone, or Skype"]
  await page.fill('[placeholder="Email, phone, or Skype"]', 'EnterEmailHere');

  // Click text=Next
  await Promise.all([
    page.waitForNavigation(),
    page.click('text=Next')
  ]);

  // Click text=Other ways to sign in
  await page.click('text=Other ways to sign in');

  // Click [aria-label="Use my password"]
  await page.click('[aria-label="Use my password"]');

  // Click [placeholder="Password"]
  await page.click('[placeholder="Password"]');

  // Click [placeholder="Password"]
  //await page.click('[placeholder="Password"]');

  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', 'EnterPassWordHere');

  // Click input:has-text("Sign in")
  await Promise.all([
    page.waitForNavigation(),
    page.click('input:has-text("Sign in")')
  ]);

  // ---------------------
  //await context.close();
  //await browser.close();
})();