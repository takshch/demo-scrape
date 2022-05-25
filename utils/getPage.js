const getPage = async (browser, url) => {
  let page;

  try {
    console.log('Opening new page: ' + url);

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

    await page.goto(url);
  } catch (err) {
    throw new Error(err);
  }

  return page;
};

module.exports = { getPage };
