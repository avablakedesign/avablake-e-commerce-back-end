const router = require('express').Router();
const { Tag, Product, ProductTag, Tag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const tags = await Tag.findAll({include: Product})
  res.json(tags);
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const tag = await Tag.findByPk({id: Product})
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = req.body;
  const tag = await Tag.create(newTag);
  res.json({message:"created new tag"}) 
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
