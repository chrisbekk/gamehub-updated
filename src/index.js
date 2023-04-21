import shoppingCart from "../utils/shoppingCart.js"
import dropDownMenu from "../utils/dropDownMenu.js"
import wordpressData from "../utils/dataFetching.js"
import createProductCard from "../utils/productCard.js"

const logo = document.querySelector(".logo")
logo.addEventListener("click", ()=>{
    document.location.href = "index.html"
})

const toStoreBtn = document.getElementById("toStore")
toStoreBtn.addEventListener("click", ()=> {
    document.location.href = "store.html"
})
const { getFeatured, sortCategory } = wordpressData.products

function renderFeaturedProduct(product){
    const [featuredProduct] = product
    const innerContent = []
    const container = document.querySelector(".featured-product")
    
    const featuredTitle = document.createElement("h3")
    featuredTitle.textContent = featuredProduct.name
    innerContent.push(featuredTitle)

    const featuredDescription = document.createElement("p")
    featuredDescription.innerHTML = featuredProduct.description
    innerContent.push(featuredDescription)

    const button = document.createElement("div")
    button.classList.add("button")
    button.innerText = "To Store"
    button.addEventListener("click", ()=> document.location.href = "store.html")
    innerContent.push(button)

    container.append(...innerContent)
}

function renderProducts(products){
        const container = document.querySelector(".product-container")
        products.forEach(product => {
    
            container.append(createProductCard(product))
    
    
        });
    
}



async function main (){
    const searchIcon = document.querySelector("#search--icon")
    const searchBar = document.querySelector("#search--input")
    searchIcon.addEventListener("click", ()=>{
        searchBar.classList.toggle("grow")
    })

    const product = await getFeatured()
    renderFeaturedProduct(product)

    const products = await sortCategory("24")
    renderProducts(products)

    
    dropDownMenu()
}




document.onload = main()