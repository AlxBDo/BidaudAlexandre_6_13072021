import {CURRENT_MEDIA_TYPE} from "../constantes_photographer_page.js";
import {GALLERY} from "../constantes_photographer_page.js";
import {GALLERY_MEDIA_ELEMENTS} from "../constantes_photographer_page.js";
import {PHOTO_SUM} from "../constantes_photographer_page.js";
import {VIDEO_SUM} from "../constantes_photographer_page.js";
import {bookHandler} from "./bookHandler.js";


/**
 * Display media gallery in a lightbox
 */
 export const lightboxObject = {

    close_lightbox_btn : document.getElementById("close-lightbox"),
    galleryClassList : GALLERY.classList,
    lightboxPosition : document.getElementById("lightbox-position"), //store the current position of the Lightbox

    getCurrentPosition : function(){ return parseInt(this.lightboxPosition.value); },

    /**
     * 
     * @returns {string} : gallery or lightbox
     */
    getGalleryMode : function(){ 
        return this.galleryClassList.contains("gallery") ? "gallery" : "lightbox" ; 
    },

    /**
     * 
     * @returns {array} array of listenner functions name
     */
    getListenFctName: function(){ return ["closeClick", "openClick", "moveClick"]; },

    /**
     * provide the id of the following media
     * @param {number} newPosition
     * @returns {array} : [0] type of current media / [1] position 
     */
    getNewIdHTML : function(newPosition){
        let currentType = CURRENT_MEDIA_TYPE.value;
        let limit = currentType === "photo" 
                    ? PHOTO_SUM.value : VIDEO_SUM.value ;
        if(newPosition >= limit || newPosition < 0) { 
            newPosition = newPosition < 0 && currentType === "video" 
                            ? PHOTO_SUM.value - 1 : 0 ; 
            if(currentType === "photo" && VIDEO_SUM.value > 0){
                currentType = "video";
            } else if(currentType === "video" && PHOTO_SUM.value > 0){
                currentType = "photo";
            }
        }
        return [currentType, newPosition];
    },


    /**
     * 
     * @param {number} position 
     */
    setCurrentPosition : function(position){ this.lightboxPosition.value = position; },

    /**
     * 
     * @param {string} media_type 
     */
    setCurrentType : function(media_type){ CURRENT_MEDIA_TYPE.value = media_type ; },
    

    /**
     * assign class lightbox to display media
     * @param {object} dom_element_obj 
     */
    activeElement : function(dom_element_obj){
        this.addActivClass(dom_element_obj);
        this.setCurrentPosition(bookHandler.getDomElementIdArray(dom_element_obj)[2]);
    },

    /**
     * 
     * @param {string} dom_element_obj 
     */
    addActivClass : function(dom_element_obj){ dom_element_obj.classList.add("activ"); },

    /**
     * modify view mode : gallery or lightbox
     */
    changeBookView : function(){
        let classRemoved = this.getGalleryMode();
        let classAdded = classRemoved === "gallery" ? "lightbox" : "gallery";
        if(classAdded != "lightbox"){ 
            GALLERY.setAttribute("role", "none");
            GALLERY.setAttribute("aria-label", "medias");
            this.clearActivClass(); 
        } else {
            GALLERY.setAttribute("role", "dialog");
            GALLERY.setAttribute("aria-label", "image closeup view");
        }
        this.changeGalleryClass(classAdded, classRemoved);
    },

    /**
     * 
     * @param {string} classAdded 
     * @param {string} classRemoved 
     */
    changeGalleryClass : function(classAdded, classRemoved){
        this.galleryClassList.remove(classRemoved);
        this.galleryClassList.add(classAdded);
    },

    clearActivClass : function(){
        document.querySelector(".activ").classList.remove("activ");
    },
    
    /**
     * close lightbox
     */
    closeClick: function(){
        this.close_lightbox_btn.addEventListener("click", function(event){
            event.preventDefault();
            event.stopPropagation();
            lightboxObject.changeBookView();
        }); 
    },

    /**
     * browse the array of function names and execute them to add the listeners
     */
    listen: function(){
        this.listen_fct_names.forEach(element => { this[element](); });
    },
    
    /**
     * open lightbox
     */
    openClick: function(){
        GALLERY_MEDIA_ELEMENTS.forEach(element => {
            element.addEventListener("click", function(event){
                event.preventDefault();
                if(lightboxObject.getGalleryMode() === "gallery"){
                    lightboxObject.changeBookView();
                    lightboxObject.activeElement(element);
                }
            });
        });
    },

    /**
     * 
     * @param {string} direction : next or previous
     */
    move : function(direction = "next"){
        this.clearActivClass();
        let new_position = direction === "next" 
                    ?  this.getCurrentPosition() + 1 
                    : this.getCurrentPosition() - 1 ;
        let idHTML = this.getNewIdHTML(new_position);
        this.setCurrentType(idHTML[0]);
        this.activeElement(
            document.getElementById(idHTML[0]+"-container-"+idHTML[1])
        );
    },
     
    /**
     * change full screen image displayed
     */
    moveClick: function(){
        document.querySelectorAll(".move").forEach(element => {
            element.addEventListener("click", function(event){
                event.preventDefault();
                event.stopPropagation();
                lightboxObject.move(element.getAttribute("id"));
            });
        });
    }

};