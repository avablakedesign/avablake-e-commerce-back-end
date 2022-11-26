const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// http://localhost:3001/api/categories
router.use('/categories', categoryRoutes);

//http://localhost:3001/api/products
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
