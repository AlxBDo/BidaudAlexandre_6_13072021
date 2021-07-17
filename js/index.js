let tags = document.querySelectorAll(".tags span");
tags.forEach(element => {
    element.addEventListener("click", function(event){
        //event.stopPropagation();
        event.preventDefault();
        photoShortProfilDisplay.initHTMLContainer();
        jsonDataCollector.search("tags", element.textContent.toLocaleLowerCase());
    })
});

jsonDataCollector.search();