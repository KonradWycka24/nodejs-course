const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};
exports.getProduct = (req,res,next) =>
{
const prodId = req.params.productId;
Product.findById(prodId,product => 
{
  res.render('shop/product-detail', {
    product: product,
    pageTitle:product.title,
    path: '/' });
}
);

}
exports.getIndex = (req,res,next) => 
{
    Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'All products',
      path: '/products'
    });
  });
};
exports.getCart = (req,res,next) => 
{
    res.render('shop/cart', {
      pageTitle: 'Your Cart',
      path: '/cart'
    });
  };
exports.getOrders = (req,res,next) => 
{
    res.render('shop/orders', {
      pageTitle: 'Your Orders',
      path: '/orders'
    });
  };  

exports.getCheckout = (req,res,next) => 
{
    res.render('shop/checkout', {
      pageTitle: 'Checkout',
      path: '/checkout'
    });
  };
exports.postCart = (req,res,next) =>
{
  const prodId = req.body.productId;
  console.log(prodId);
  res.redirect('/cart');
};