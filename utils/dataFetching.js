const wordpressData = {
    baseURL: "https://gemehub.tech/wp-json/wc/store/products",
    productCategory: "https://gemehub.tech/wp-json/wc/store/products?category=",
    id: "https://gemehub.tech/wp-json/wc/store/products/",
    tags: "https://gemehub.tech/wp-json/wc/store/products/tags",
    category: {
        "on-sale": 27,
        "top-sellers": 24,
        "new-releases": 19 

    },

    products: {
        // Fetches all products in store
        getAll: async function(){
            try{
                const response = await fetch(wordpressData.baseURL)
                const products = await response.json()
    
                return products
            }
            catch(error) {
                console.error(error)
            }

        },
        // Fetches a product in store based on product ID
        getProduct: async function(productID){
            try{

                const response = await fetch(wordpressData.id+productID)
                const product = await response.json()
                if(isNaN(productID)) throw "Function argument is not a valid data type. Product ID must be a number."
                if(productID = "") throw "No function argument passed. You must pass a valid argument."

                return product
            }
            catch(error){
                console.error(error)
            }

        },
        // Fetches products that are labelled as featured products
        getFeatured: async function(){
            try{
                const response = await fetch(wordpressData.baseURL + "?featured=true")
                const featuredProducts = await response.json()
                
                return featuredProducts
            }
            catch(error){
                console.error(error)
            }


        },
        // Fetches all products within a certain product category.
        sortCategory: async function(category){
            try{
                const response = await fetch( wordpressData.productCategory + category)
                const products = await response.json()
                
                return products
            }
            catch(error){
                console.error(error)
            }

            
        },

        //Fetch an array of product tags
        getTags: async function(){
            try{
                const response = await fetch(wordpressData.tags)
                const tags = await response.json()
                return tags
            }
            catch(error){
                console.error(error)
            }
        }
    }

    
}

export default wordpressData;