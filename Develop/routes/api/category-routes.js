const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  const categories = await Category.findAll({include: Product});
  res.json(categories)
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const category = await Category.findByPk(id, {include: Product});
  res.json(category)
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  const newCategory = req.body;
  const category = await Category.create(newCategory);
  res.json({message: "created new category"});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
