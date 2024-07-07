const puppeteer = require("puppeteer");

let bukaBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // devtools: true,
    // defaultViewport: null,
  });

  const page = await browser.newPage();
  page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  await page.goto("https://www.google.com");

  await page.screenshot({ path: "./screenshot/google.png" });

  console.log("Browser terbuka");

  await browser.close();

  //   const page = await browser.newPage();
  //   await page.goto("https://www.google.com");
};

bukaBrowser();
