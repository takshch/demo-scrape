const { getBrowser } = require('./getBrowser');
const { getPage } = require('./getPage');

const scrapeByPageActions = async (url, cb) => {
  try {
    const browser = await getBrowser();
    const page = await getPage(browser, url);
    const result = await cb(page);

    await page.close();
    await browser.close();

    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { scrapeByPageActions };
