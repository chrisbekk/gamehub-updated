import priceString from "./displayPrice.js"
import shoppingCart from "./shoppingCart.js"

const {addToCart} = shoppingCart
const pageRedirect = "product.html"


function createProductCard(product){
    const { images, name, prices, short_description } = product
    const productCardContent = []
    // Create parent container for the product card
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")
    // const productContainer = document.createElement("div")

    // Create child elements for the product card

    for(let i = 0; i < 1; i++){
        const img = images[i]
        const productImage = document.createElement("img")
        productImage.classList.add("product-image")
        productImage.src = img.src
        productImage.alt = null
        
        productCard.append(productImage)
        
    }

    const detailsContainer = document.createElement("div")
    detailsContainer.classList.add("product-details")
    
    
    const productTitle = document.createElement("p")
    productTitle.classList.add("product-title")
    productTitle.innerText = name
    detailsContainer.append(productTitle)

    const productPrice = document.createElement("p")
    productPrice.classList.add("product-price")
    productPrice.innerText = priceString(product)
    detailsContainer.append(productPrice)


    const icon = document.createElement("i")
    icon.classList.add("fa-solid")
    icon.classList.add("fa-bag-shopping")
    icon.classList.add("icon")
    icon.classList.add("shopping-icon")
    icon.setAttribute("id", product.id)
    icon.setAttribute("name", product.name)
    icon.setAttribute("price", parseInt(product.prices.price))
    icon.addEventListener("click", addToCart)
    detailsContainer.append(icon)

    const productDescription = document.createElement("p")
    productDescription.classList.add("product-description")
    productDescription.innerHTML = short_description
    detailsContainer.append(productDescription)

    
        
    
    productTitle.addEventListener("click", function(){
        document.location.href = `${pageRedirect}?id=${product.id}`
    })

    
    productCard.append(detailsContainer)
    return productCard
}

export default createProductCard