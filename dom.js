const infoDiv = document.querySelector("#info")
const aboutDiv = document.querySelector(".about")
const button = document.querySelector("#button")
const header = document.querySelector("header")



button.addEventListener("click", function(){
    aboutDiv.classList.toggle("visible")
    infoDiv.classList.toggle("open")
    console.log("clicked")
})