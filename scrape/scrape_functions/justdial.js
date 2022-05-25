const { scrapeByPageActions } = require('../utils/scrapeByPageActions');

const CARD_CONTAINER_CLASS = '.cntanr';
const CARD_LINK_ATTR_NAME = 'data-href';
const CARD_NAME_ATTR_NAME = 'data-cn';

const scrapeActions = async (page) => {
  await page.waitForSelector(CARD_CONTAINER_CLASS);

  const cardContainers = await page.$$(CARD_CONTAINER_CLASS);
  console.log(`No of containers: ${cardContainers.length}`);

  const result = await Promise.all(
    cardContainers.map(
      async (container) => container.evaluate((el) => {
        const link = el.getAttribute('data-href');
        const name = el.getAttribute('data-cn');

        const imgEl = el.querySelector('img.altImgcls');
        const src = imgEl.getAttribute('src');

        return { link, name, src };
      })
    )
  );

  return result;
};

const justDialScraper = async (url) => {
  console.log('starting scraping...');
  const result = await scrapeByPageActions(url, scrapeActions);
  return result;
};

module.exports = { justDialScraper };
