let tags = document.querySelectorAll(".tags");
tags.forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        photoShortProfilDisplay.initHTMLContainer();
        console.log(element.firstElementChild.nodeName);
        jsonDataCollector.search("tags", element.firstElementChild.textContent.toLocaleLowerCase());
    })
});

jsonDataCollector.search();

setTimeout(function(){
    let photograph_profils = document.querySelectorAll(".profil img");
    let height = (window.innerWidth*0.9)*0.15;
    photograph_profils.forEach(element => {
        element.style.height = height + "px";
    });
},30);

window.addEventListener("scroll", event => {
    if(window.scrollY > 0){
        document.getElementById("pass-cont").classList.remove("hidden");
    } else {
        document.getElementById("pass-cont").classList.add("hidden");
    }
});