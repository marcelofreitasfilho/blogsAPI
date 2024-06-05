const Joi = require('joi');

const message = '400&Some required fields are missing';

const postSchema = Joi.array().items(
  Joi.object({
    title: Joi.string().required().empty().messages({
      'any.required': message,
      'string.empty': message,
    }),
    content: Joi.string().required().empty().messages({
      'any.required': message,
      'string.empty': message,
    }),
    categoryIds: Joi.array().required().empty().messages({
      'any.required': message,
      'string.empty': message,
    }),
    userId: Joi.number().required().messages({
      'any.required': message,
    }),
  }),
);

module.exports = postSchema;