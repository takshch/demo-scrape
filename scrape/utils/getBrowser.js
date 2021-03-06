const puppeteer = require('puppeteer');
const config = require('config');

const browserConfig = config.get('browserConfig');
if (!browserConfig) {
  throw new Error('Invalid browser config');
}

const getBrowser = async () => {
  let browser;

  try {
    browser = await puppeteer.launch(browserConfig);
  } catch (err) {
    throw new Error(err);
  }

  return browser;
};

module.exports = { getBrowser };
