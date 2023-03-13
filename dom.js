const aboutText = document.querySelector(".text")
const aboutDiv = document.querySelector(".about")
const button = document.querySelector("#button")
const header = document.querySelector("header")



button.addEventListener("click", function(){
    aboutDiv.classList.toggle("open")
    aboutText.classList.toggle("open")
    
    console.log("clicked")
})