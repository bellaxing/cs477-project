
let cart = []
const cartHistory =[];
class Cart {
    constructor(pid, productName,isbn, price, qty) {

        this.pid = pid;
        this.productName = productName;
        this.isbn = isbn;
        this.price = price;
        this.qty = qty;
    }
    addItem() {
        const productIndex = cart.findIndex(item => item.pid == this.pid);
        if (productIndex > -1) {
             cart[productIndex].qty = cart[productIndex].qty + 1;
             return this;
        } else {
            cart.push(this)
            return this;

        }
    }
    static removeItem(pid) {
        const index = cart.findIndex(item => item.pid === pid);

        if (index > -1) {
            if (cart[index].qty > 1) {
                cart[index].qty = cart[index].qty - 1;
                return cart[index];
            } else {
                cart.slice(index, 1)
            }

        } else {
            throw new Error ("ITEM NOT FOUND");
        }
    }
    static getCartList(){
        console.log("incart")
        return cart;
    }

    static orderPlaced(){
        cart.forEach(item => cartHistory.push(item));
        cart = [];
    }
}

module.exports = Cart;

        



