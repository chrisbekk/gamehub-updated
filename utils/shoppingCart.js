import handleLocalStorage from "./localStorage.js";
const {toLocalStorage, fromLocalStorage} = handleLocalStorage

class shoppingCartItem {
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const shoppingCart = {
    items: [],
    total: 0,


    addToCart: function (event){
        
        const product = event.target
        const id = product.getAttribute("id")
        const name = product.getAttribute("name")
        const price = parseInt(product.getAttribute("price"))
        const cartItem = new shoppingCartItem(id, name, price, 1)
        console.log(cartItem)
        shoppingCart.items.push(cartItem)
        shoppingCart.total = shoppingCart.total + price
        toLocalStorage(id, cartItem)
        console.log(shoppingCart.total)
        
        
    }
}

export default shoppingCart

fromLocalStorage(33)