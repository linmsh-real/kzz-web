const puppeteer = require('puppeteer');
 
async function scrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://linmsh-real.github.io/kzz-web/');
  const title = await page.title();
  console.log('Page title:', title);
  await browser.close();
}

scrape().catch(err => console.error(err));