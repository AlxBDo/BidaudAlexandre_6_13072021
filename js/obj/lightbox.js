const lightboxObject = {

    galleryClassList : GALLERY.classList,

    lightboxPosition : document.getElementById("lightbox-position"),


    getCurrentPosition : function(){ return parseInt(this.lightboxPosition.value); },

    getGalleryMode : function(){ 
        return this.galleryClassList.contains("gallery") ? "gallery" : "lightbox" ; 
    },

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


    setCurrentPosition : function(position){ this.lightboxPosition.value = position; },

    setCurrentType : function(media_type){ CURRENT_MEDIA_TYPE.value = media_type ; },
    

    activeElement : function(dom_element_obj){
        this.addActivClass(dom_element_obj);
        this.setCurrentPosition(bookHandler.getDomElementIdArray(dom_element_obj)[2]);
    },

    addActivClass : function(dom_element_obj){ dom_element_obj.classList.add("activ"); },

    changeBookView : function(){
        let classRemoved = this.getGalleryMode();
        let classAdded = classRemoved === "gallery" ? "lightbox" : "gallery";
        if(classAdded != "lightbox"){ 
            GALLERY.setAttribute("role", "none");
            GALLERY.setAttribute("aria-label", "media gallery");
            this.clearActivClass(); 
        } else {
            GALLERY.setAttribute("role", "dialog");
            GALLERY.setAttribute("aria-label", "image closeup view");
        }
        this.changeGalleryClass(classAdded, classRemoved);
    },

    changeGalleryClass : function(classAdded, classRemoved){
        this.galleryClassList.remove(classRemoved);
        this.galleryClassList.add(classAdded);
    },

    clearActivClass : function(){
        document.querySelector(".activ").classList.remove("activ");
    },

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
    }

};