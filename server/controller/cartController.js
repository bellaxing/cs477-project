const Cart = require("../models/cartModel");
const Books = require("../models/bookModel");

module.exports.addItemInCart = (req, res, next) =>{
    console.log(req.body)
    const product = new Cart(req.body.id, req.body.title, req.body.isbn, req.body.price, 1)
    res.json(product.addItem());
}

module.exports.listItemCart = (req, res, next) =>{ 
    const cartItems = Cart.getCartList()
    res.json(cartItems);
    
}

module.exports.removeCartItem = (req, res, next) =>{
    const products = Cart.removeItem(req.body.pid);
    res.json(products);

}