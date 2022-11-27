const router = require('express').Router();
const { Tag, Product, ProductTag} = require('../../models');

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
  res.json(tag);
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = req.body;
  const tag = await Tag.create(newTag);
  res.json({message:"created new tag"}) 
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const id = req.params.id;
  const updatedTag = req.body;
  const modifiedTag = await Tag.update(updatedTag, {where:{id}}); 
  res.json({message: `Updated tag with id ${id}`});

});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const id = req.params.id;
  const destroyedTagRef = await ProductTag.destroy({where:{tag_id: id}});
  const destroyedTag = await Tag.destroy({where:{id}});
  res.json({message: `destroyed tag with id ${id}`});
});

module.exports = router;
