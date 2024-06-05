const Joi = require('joi');

const categorySchema = Joi.array().items(
  Joi.object({
    name: Joi.string().required().messages({
      'any.required': '400&"name" is required',
    }),
  }),
);

module.exports = categorySchema;