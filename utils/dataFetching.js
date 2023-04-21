const wordpressData = {
    url: "https://gemehub.tech/wp-json/wc/store/products",
    test: "https://gemehub.tech/wp-json/wc/store/products?category=",
    id: "https://gemehub.tech/wp-json/wc/store/products/",
    category: {
        "on-sale": 27,
        "top-sellers": 24,
        "new-releases": 19 

    },

    products: {
        // Fetches all products in store
        getAll: async function(){
            const response = await fetch(wordpressData.url)
            const products = await response.json()
            console.log(products)
            return products
        },
        // Fetches a product in store based on product ID
        getProduct: async function(para){
            const response = await fetch(wordpressData.id+para)
            const product = await response.json()
            console.log(product)
            return product
        },
        // Fetches products that are labelled as featured products
        getFeatured: async function(){
            const response = await fetch(wordpressData.url + "?featured=true")
            const featuredProducts = await response.json()
            
            return featuredProducts

        },

        sortCategory: async function(category){
            const response = await fetch( wordpressData.test + category)
            const products = await response.json()
            console.log(products)
            return products
            
        }
    }

    
}

export default wordpressData;