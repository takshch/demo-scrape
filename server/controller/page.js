const { justDialScraper } = require('../../scrape/scrape_functions/justdial');

const getPage = async (req, res) => {
  const { url } = req.query;

  try {
    const result = await justDialScraper(url);
    res.status(200).send(result);
  } catch (e) {
    res.status(200).send({ error: 'something wrong' });
  }
};

module.exports = { getPage };
