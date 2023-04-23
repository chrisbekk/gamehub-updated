const handleLocalStorage = {
    toLocalStorage: function(key, item){
        const storageItem = handleLocalStorage.fromLocalStorage(key)
        if(storageItem === null){
            localStorage.setItem(key, JSON.stringify(item))
        } else{
            item.quantity = storageItem.quantity + 1
            localStorage.setItem(key, JSON.stringify(item))
        }
    },

    fromLocalStorage: function(key){
        const storageItem = JSON.parse(localStorage.getItem(key))
        
        return storageItem
    }
}



export default handleLocalStorage