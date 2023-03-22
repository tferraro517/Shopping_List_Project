const router = require('express').Router();
const { Product } = require('../../models');
router.post('/', async (req, res) => {
  try {
    const newProduct = await newProduct.create({
      ...req.body,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
