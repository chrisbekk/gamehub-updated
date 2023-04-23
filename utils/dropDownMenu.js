function dropDownMenu(){
    const navbar = document.querySelector(".fa-bars")
    const dropdownMenu = document.querySelector(".dropdown-menu")
    navbar.addEventListener("click", function(){
        
        dropdownMenu.classList.toggle("show-menu")

    })

    const navlistItems = document.querySelectorAll(".navlist-item")
    navlistItems.forEach(item =>{
        
        switch(item.textContent){
            case "shop":
                item.addEventListener("click", ()=> document.location.href="store.html")
                break
            case "contact":
                item.addEventListener("click", ()=> document.location.href="contact.html")
                break
            case "about":
                item.addEventListener("click", ()=> document.location.href="about.html")
                break
        }
    })

    const cartIcon = document.querySelector(".fa-cart-shopping")
    cartIcon.addEventListener("click", ()=> document.location.href="usercart.html")

}

export default dropDownMenu