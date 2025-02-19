const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct
} = require('../controllers/productController');

module.exports = (app) => {

  app.get(`/api/product`, getAllProducts)

  app.post(`/api/product`, createProduct)

  app.put(`/api/product/:id`, updateProduct)

  app.delete(`/api/product/:id`, deleteProduct)

}
