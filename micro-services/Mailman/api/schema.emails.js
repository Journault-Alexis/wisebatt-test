const Joi = require('joi');

const email = Joi.object().keys({
  template: Joi.object()
    .keys({
      client: Joi.string().required(),
      type: Joi.string().required(),
      language: Joi.string().required(),
      name: Joi.string().required(),
    })
    .required(),
  email: Joi.object()
    .keys({
      to: Joi.string().required(),
      from: Joi.string().required(),
      cc: Joi.string(),
      bcc: Joi.string(),
      subject: Joi.string().required(),
    })
    .required(),
  substitutions: Joi.object(),
});

exports.Email = email;