const { Category } = require('../models');
const categorySchema = require('../validations/category.validation');

const createCategory = async (name) => {
  const { error } = categorySchema.validate([{ name }]);
  if (error) {
    const status = error.details[0].message.split('&')[0];
    const message = error.details[0].message.split('&')[1];
    return { status, data: { message } };
  }
  const category = await Category.create({ name });
  return { status: '201', data: category };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: '200', data: categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};