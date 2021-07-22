// Constantes

const photoSum = document.getElementById("photo-sum");

const videoSum = document.getElementById("video-sum");


// Listenner

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
document.querySelectorAll("a.photo-container").forEach(element => {
    element.addEventListener("click", function(event){
        event.preventDefault();
        if(lightboxObject.getGalleryMode() === "gallery"){
            lightboxObject.changeBookView();
            lightboxObject.activeElement(element);
        }
    });
});




let url = window.location.href;
if(url.split('?')[1]){
    let getParams = new URLSearchParams(url.split('?')[1]);
    if(getParams.has("id")){
        jsonDataCollector.search("id", getParams.get("id"));
    }
}

function bookOrder(a, b, dataTypeToDorder){
    return a[dataTypeToDorder] > b[dataTypeToDorder] ? 1 
        : a[dataTypeToDorder] < b[dataTypeToDorder] ? -1 
        : 0 ;
}

function bookOrderByName(a, b){
    return bookOrder(a, b, "name");
}

let obj1 = {name: "calex", nombre: 4};
let obj2 = {name: "ben", nombre: 25};
let obj3 = {name: "jo", nombre: 14};
let test = [obj1, obj2, obj3];
test.sort(bookOrderByName);