const about_el = document.querySelector(".about")
const info_el = document.getElementById("info")
const links_el = document.getElementById("links").getElementsByTagName("a")
const logo_el = document.getElementById("logosvg");

info_el.onclick = function () {
    about_el.classList.toggle('open');

    logo_el.classList.toggle('logo-open');

    for(let link of links_el){
        link.classList.toggle("links-open");

        if(about_el.classList.contains('open')){
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