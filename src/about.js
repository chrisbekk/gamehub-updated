import dropDownMenu from "../utils/dropDownMenu.js"

async function main(){
    const searchIcon = document.querySelector("#search--icon")
    const searchBar = document.querySelector("#search--input")
    searchIcon.addEventListener("click", ()=>{
        searchBar.classList.toggle("grow")
    })

    const logo = document.querySelector(".logo")
    logo.addEventListener("click", ()=>{
    document.location.href = "index.html"
    })
    
    dropDownMenu()
}


document.onload = main()