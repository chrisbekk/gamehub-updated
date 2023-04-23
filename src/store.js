import dropDownMenu from "../utils/dropDownMenu.js";
import wordpressData from "../utils/dataFetching.js";
import createProductCard from "../utils/productCard.js"


const {getFeatured, getAll} = wordpressData.products

const logo = document.querySelector(".logo")
logo.addEventListener("click", ()=>{
    document.location.href = "index.html"
})

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
    button.innerText = "Expore"
    button.addEventListener("click", ()=> document.location.href = "product.html?id=26")
    innerContent.push(button)

    container.append(...innerContent)
}

function renderProducts(products){
    const container = document.querySelector(".product-container")
    const topSellers = document.querySelector(".top-sellers")
    const newReleases = document.querySelector(".new-releases")
    const onSale = document.querySelector(".on-sale")
    products.forEach(product => {
        product.categories.forEach(category => {
            switch(category.name){
                case "Top Sellers":
                    topSellers.append(createProductCard(product))
                    break
                case "New Releases":
                    newReleases.append(createProductCard(product))
                    break
                case "On Sale":
                    onSale.append(createProductCard(product))
            }
        })


    });

}




async function main(){
    const searchIcon = document.querySelector("#search--icon")
    const searchBar = document.querySelector("#search--input")
    searchIcon.addEventListener("click", ()=>{
        searchBar.classList.toggle("grow")
    })
    const product = await getFeatured()
    renderFeaturedProduct(product)

    const products = await getAll()
    renderProducts(products)    
    dropDownMenu()
}


document.onload = main()