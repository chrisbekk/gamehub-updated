import dropDownMenu from "../utils/dropDownMenu.js";
import wordpressData from "../utils/dataFetching.js";
import priceString from "../utils/displayPrice.js";
import queryString from "../utils/queryString.js";
import createProductCard from "../utils/productCard.js";
import handleShoppingCart from "../utils/shoppingCart.js";
const { getProduct, getAll} = wordpressData.products

const logo = document.querySelector(".logo")
logo.addEventListener("click", ()=>{
    document.location.href = "index.html"
})

const toStoreBtn = document.getElementById("toStore")
toStoreBtn.addEventListener("click", ()=> {
    document.location.href = "store.html"
})


function renderProduct(product){
    const containerYellow = document.querySelector(".product-container-yellow")
    const containerBlack = document.querySelector(".product-container-black")

    product.images.forEach(image => {
        const productImage = document.createElement("img")
        productImage.classList.add("product-image")
        productImage.src = image.src
        containerYellow.append(productImage)
    });

    const containerYellowDetails = document.createElement("div")
    containerYellowDetails.classList.add("container-yellow-details")
    
    const productDescription = document.createElement("p")
    productDescription.classList.add("product-description")
    productDescription.innerHTML = product.description

    

    const tagsContainer = document.createElement("ul")
    tagsContainer.classList.add("tags")

    product.tags.forEach(tag => {
        const tagElement = document.createElement("li")
        tagElement.classList.add("tag")
        tagElement.innerText = tag.name
        tagsContainer.append(tagElement)
    })

    containerYellowDetails.append(productDescription, tagsContainer)
    containerYellow.append(containerYellowDetails)

    const productTitle = document.createElement("h2")
    productTitle.textContent = product.name.toUpperCase()
    containerBlack.append(productTitle)

    const productPrice = document.createElement("h2")
    productPrice.textContent = priceString(product)
    containerBlack.append(productPrice)

    const button = document.createElement("span")
    button.classList.add("button")
    button.textContent = "ADD TO CART"
    button.setAttribute("id", product.id)
    button.addEventListener("click", handleShoppingCart)
    containerBlack.append(button)
}

async function getRelatedProducts(products, queryString){
    const container = document.querySelector(".product-container")
    const currentProductID = queryString
    const currentProduct =  await getProduct(currentProductID)
    const tags = currentProduct.tags
    const currentProductTags = tags.map(a => a.name)
    
    
    products.forEach(product => {
        const relatedProductTags = product.tags.map(a => a.name)
        currentProductTags.forEach(tag => {
            if(relatedProductTags.includes(tag)){
                product.id === currentProduct.id ? null : container.append(createProductCard(product))
            }
        })
        
    })
}


async function main(){
    const searchIcon = document.querySelector("#search--icon")
    const searchBar = document.querySelector("#search--input")
    searchIcon.addEventListener("click", ()=>{
        searchBar.classList.toggle("grow")
    })
    const product = await getProduct(queryString())
    const products = await getAll()
    renderProduct(product)
    getRelatedProducts(products, queryString())
    dropDownMenu()
    
    
}

main()