// get photographer id for display his profil
let url = window.location.href;
if(url.split("?")[1]){
    let getParams = new URLSearchParams(url.split("?")[1]);
    if(getParams.has("id")){
        // get json data and display it
        jsonDataCollector.search("id", getParams.get("id"));
        // add even listenner
        bookHandler.listen();
        contactForm.listen();
        lightboxObject.listen();
    }
}