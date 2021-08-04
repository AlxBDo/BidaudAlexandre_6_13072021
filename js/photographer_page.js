import {listenner} from "./obj/listenner.js";
import jsonDataCollector from "./obj/jsonDataCollector.js";
import {bookHandler} from "./obj/bookHandler.js";
import {contactForm} from "./obj/contactForm.js";
import {lightboxObject} from "./obj/lightbox.js";

/**
 * object dedicated to the Listener object used to manage keyboard events
 */
let keyboardListenner = {

    keys_searched : ["ArrowLeft", "ArrowRight", "Escape"],

    /**
     * 
     * @returns {array} array of listenner functions name
     */
    getListenFctName: function(){ return ["listenKeyboard"]; },

    listenKeyboard : function(){
        document.addEventListener("keydown", (event) => {
            this.keys_searched.forEach(ks => { if(event.key === ks){ this[ks + "Action"](); } });
          }, false);
    },

    ArrowLeftAction: function(){ lightboxObject.move("previous"); },

    ArrowRightAction: function(){ lightboxObject.move("next"); },

    EscapeAction: function(){ 
        if(lightboxObject.getGalleryMode() === "lightbox") { lightboxObject.changeBookView(); 
        } else { contactForm.close() ; }
    }

};



// get photographer id for display his profil
let url = window.location.href;
if(url.split("?")[1]){
    let getParams = new URLSearchParams(url.split("?")[1]);
    if(getParams.has("id")){
        // get json data and display it
        jsonDataCollector.search("id", getParams.get("id"));
        // add even listenner
        listenner.listen([bookHandler, contactForm, keyboardListenner, lightboxObject]);
    }
}