// Listenner

/**
 * add like on click
 */
document.querySelectorAll(".like").forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        if(!element.classList.contains("liked")){
            bookHandler.addLikeWork(element);
        }
    });
});

/**
 * close lightbox
 */
document.getElementById("close-lightbox").addEventListener("click", function(event){
    event.preventDefault();
    event.stopPropagation();
    lightboxObject.changeBookView();
}); 
 
/**
 * change full screen image displayed
 */
 document.querySelectorAll(".move").forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        lightboxObject.move(element.getAttribute('id'));
    });
});

/**
 * open lightbox
 */
 GALLERY_MEDIA_ELEMENTS.forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        if(lightboxObject.getGalleryMode() === "gallery"){
            lightboxObject.changeBookView();
            lightboxObject.activeElement(element);
        }
    });
});

/** open or close order by select */
document.getElementById("order-by").addEventListener("click", function(){
    if(this.classList.contains("open")){ this.classList.remove("open"); 
    } else { this.classList.add("open"); }
})

/** selected order option */
document.querySelectorAll("#order-by p").forEach(element => {
    element.addEventListener("click", function(){
        ORDERBY_CONTAINER_CLASSLIST.remove("date-slct", "title-slct");
        let id_html = element.getAttribute("id");
        document.getElementById("order-by-select").selectedIndex 
        = id_html === "date" ? 1 : id_html === "like" ? 0 : 2 ; 
        ORDERBY_CONTAINER_CLASSLIST.add(id_html+"-slct")
        bookHandler.displayBookSorted(id_html);        
    });
});



let url = window.location.href;
if(url.split('?')[1]){
    let getParams = new URLSearchParams(url.split('?')[1]);
    if(getParams.has("id")){
        jsonDataCollector.search("id", getParams.get("id"));
        contactForm.listen();
    }
}