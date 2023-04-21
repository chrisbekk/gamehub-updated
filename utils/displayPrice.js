function priceString(product){
    
    const price = parseInt(product.prices.price)
    
    const currency = product.prices.currency_code

    const price_String = `${currency} ${price/100}`

    return price_String
}

export default priceString