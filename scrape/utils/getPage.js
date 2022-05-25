const USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36';

const getPage = async (browser, url) => {
  let page;

  try {
    page = await browser.newPage();
    page.setDefaultNavigationTimeout(60000);

    // deny the load of images and fonts
    await page.setRequestInterception(true);
    page.on('request', (request) => {
      if (['image', 'font'].indexOf(request.resourceType()) !== -1) {
        request.abort();
      } else {
        request.continue();
      }
    });

    await page.setUserAgent(USER_AGENT);

    await page.goto(url);
  } catch (err) {
    throw new Error(err);
  }

  return page;
};

module.exports = { getPage };
