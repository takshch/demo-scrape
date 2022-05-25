const Joi = require('joi');

const removeDoubleString = (msg) => msg.replace(/"/g, '');

const getPage = async (req, res, next) => {
  const schema = Joi.object().strict().keys({
    url: Joi.string().uri().required()
  });

  try {
    await schema.validateAsync(req.query);
    next();
  } catch (e) {
    const errMessage = removeDoubleString(e.details[0].message);
    res.status(200).send({ error: errMessage });
  }
};

module.exports = { getPage };
