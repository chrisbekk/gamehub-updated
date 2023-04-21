function queryString(){
    const queryString = document.location.search
    const searchParam = new URLSearchParams(queryString)
    const productID = searchParam.get("id")

    return productID
}

export default queryString