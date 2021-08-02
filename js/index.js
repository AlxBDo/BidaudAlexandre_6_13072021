// Listenner

// Tags click
let tags = document.querySelectorAll(".tags");
tags.forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        photoShortProfilDisplay.initHTMLContainer();
        jsonDataCollector.search("tags", element.firstElementChild.textContent.toLocaleLowerCase());
    });
});

// link appear on scroll move
window.addEventListener("scroll", function(){
    if(window.scrollY > 0){
        document.getElementById("pass-cont").classList.remove("hidden");
    } else {
        document.getElementById("pass-cont").classList.add("hidden");
    }
});



// Get json Data and display
jsonDataCollector.search();