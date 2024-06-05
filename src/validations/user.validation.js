const Joi = require('joi');

const userSchema = Joi.array().items(
  Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': '400&"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'string.email': '400&"email" must be a valid email',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '400&"password" length must be at least 6 characters long',
    }),

  }),
);

module.exports = userSchema;