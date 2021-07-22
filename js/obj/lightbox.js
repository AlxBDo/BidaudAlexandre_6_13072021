const lightboxObject = {

    currentMediaType : document.getElementById("current-element-type"),

    gallery : document.getElementById("gallery"),

    galleryClassList : gallery.classList,

    lightboxPosition : document.getElementById("lightbox-position"),


    getCurrentPosition : function(){ return parseInt(this.lightboxPosition.value); },

    getDomElementPosition : function(domElementObject){
        return domElementObject.getAttribute("id").split("-")[2];
    },

    getGalleryMode : function(){ 
        return this.galleryClassList.contains("gallery") ? "gallery" : "lightbox" ; 
    },

    getNewIdHTML : function(newPosition){
        let currentType = document.getElementById("current-element-type").value;
        let limit = currentType === "photo" 
                    ? photoSum.value : videoSum.value ;
        if(newPosition >= limit || newPosition < 0) { 
            newPosition = newPosition < 0 && currentType === "video" 
                            ? photoSum.value - 1 : 0 ; 
            if(currentType === "photo" && videoSum.value > 0){
                currentType = "video";
            } else if(currentType === "video" && photoSum.value > 0){
                currentType = "photo";
            }
        }
        return [currentType, newPosition];
    },


    setCurrentPosition : function(position){ this.lightboxPosition.value = position; },

    setCurrentType : function(media_type){ this.currentMediaType.value = media_type ; },
    

    activeElement : function(domElementObject){
        this.addActivClass(domElementObject);
        this.setCurrentPosition(this.getDomElementPosition(domElementObject));
    },

    addActivClass : function(domElementObject){ domElementObject.classList.add("activ"); },

    changeBookView : function(){
        let classRemoved = this.getGalleryMode();
        let classAdded = classRemoved === "gallery" ? "lightbox" : "gallery";
        if(classAdded != "lightbox"){ this.clearActivClass(); }
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