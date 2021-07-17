class photographerDisplayAbstract {

    profilImgPath = "img/photos/Profils/";

    constructor(jsonDataObject){
        if(this.constructor === photographerDisplayAbstract){
            throw "This object can't be instancied !";
        } else {
            this.jdo = jsonDataObject;
        }
    }

    getComeFrom(){ return this.jdo.city +", "+this.jdo.country; }

    getId(){ return this.jdo.id; }

    getLiTags(ulDomElementObj){
        if(typeof ulDomElementObj === 'object'){
            this.getTags().forEach(element => {
                // li creation
                let li = document.createElement("li");
                li.classList.add('inline-block', "first-color-text", "tags");
                // span creation and insertion to li
                let span = document.createElement("span");
                span.textContent = element;
                li.append(span);
                // elements created insertion to ulDomElementObj
                ulDomElementObj.append(li);
            });
        }
    }

    getName(){ return this.jdo.name; }

    getPortrait(){ return this.jdo.portrait; }

    getPrice(){ return this.jdo.price; }

    getTagline(){ return this.jdo.tagline; }

    getTags(){ return this.jdo.tags; }

    setProfilImgSrc(imgHtmlElement){ 
        imgHtmlElement.setAttribute('src', this.profilImgPath + this.getPortrait()); 
    }
    
}