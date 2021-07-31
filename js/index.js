let tags = document.querySelectorAll(".tags");
tags.forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        photoShortProfilDisplay.initHTMLContainer();
        jsonDataCollector.search("tags", element.firstElementChild.textContent.toLocaleLowerCase());
    });
});

jsonDataCollector.search();

window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        document.getElementById("pass-cont").classList.remove("hidden");
    } else {
        document.getElementById("pass-cont").classList.add("hidden");
    }
});