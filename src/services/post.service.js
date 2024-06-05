const { BlogPost, Category } = require('../models');
const postValidation = require('../validations/post.validation');

const createPost = async (title, content, categoryIds, userId) => {
  console.log('service');
  const { error } = postValidation.validate([{ title, content, categoryIds, userId }]);
  if (error) {
    const status = error.details[0].message.split('&')[0];
    const message = error.details[0].message.split('&')[1];
    return { status, data: { message } };
  }
  const categoriesPromises = categoryIds.map(async (id) => !!await Category.findByPk(id));

  const resolvedPromises = await Promise.all(categoriesPromises);

  if (resolvedPromises.includes(false)) {
    return { status: '400', data: { message: 'one or more "categoryIds" not found' } };
  }

  const post = await BlogPost.create({ title, content, userId });

  await post.addCategories(categoryIds);
  return { status: '201', data: post };
};

module.exports = {
  createPost,
};