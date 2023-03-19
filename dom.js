const aboutDiv = document.querySelector(".about")
const aboutText = document.querySelector(".text")
const button = document.getElementById("button")
const links = document.getElementById("links").getElementsByTagName("a")
const logo = document.getElementById("logosvg");

button.onclick = function () {
    aboutDiv.classList.toggle('open')
    aboutText.classList.toggle("text-open")
    // model.classList.toggle("blur")
    // console.log("clicked")

    logo.classList.toggle('logo-open');

    for(let link of links){
        link.classList.toggle("links-open");

        if(aboutDiv.classList.contains('open')){
        link.onmouseenter = function(){
            this.style.borderBottomColor = '#f0eee8';
        }

        link.onmouseleave = function(){
            this.style.borderBottomColor = 'transparent';
        }

    }else{

            link.onmouseenter = function(){
                this.style.borderBottomColor = '#1f009B';
            }

        link.onmouseleave = function(){
            this.style.borderBottomColor = 'transparent';

    }
    }
}
    
}