import photographerDisplayAbstract from "./photographerDisplay.js";

/**
 * display short profil in index page
 */
export default class photoShortProfilDisplay extends photographerDisplayAbstract {

    static htmlContainer = document.getElementById("photographers-list");
    profilContainer = document.getElementById("photographers-list");

    /**
     * ajust photographer profil image in index page
     */
    static ajustHeightImg(){
        let photograph_profils = document.querySelectorAll(".profil img");
        let width_screen = window.innerWidth ;
        let height = width_screen > 1023 ? (width_screen*0.9)*0.15 : width_screen / 1.79 ;
        photograph_profils.forEach(element => {
            element.style.height = parseInt(height) + "px";
        });
    }

    /**
     * 
     * @returns {string} href link
     */
    getProfilPageLink(){ return "photographer_page.html?id="+this.getId(); }

    static initHTMLContainer(){ this.htmlContainer.innerHTML = ""; }

    show(){
        // profil div container creation
        let profilBox = document.createElement("a");
        profilBox.classList.add("profil", "flex");
        profilBox.setAttribute("href", this.getProfilPageLink());
        profilBox.ariaLabel = this.getName()+"'s profil link";
        // profil img creation and insertion to profilBox
        let profilImg = document.createElement("img");
        this.setProfilImgSrc(profilImg);
        profilBox.append(profilImg);
        // profil name h2 creation and insertion to profilBox
        let namePhoto = document.createElement("h2");
        namePhoto.classList.add("name-photographer");
        namePhoto.ariaLabel = "Name";
        namePhoto.textContent = this.getName();
        profilBox.append(namePhoto);
        // "come from" p creation and insertion to profilBox
        let comeFrom = document.createElement("p");
        comeFrom.textContent = this.getComeFrom();
        comeFrom.ariaLabel = "Location";
        profilBox.append(comeFrom);
        // tagline p creation and insertion to profilBox
        let tagline = document.createElement("p");
        tagline.textContent = this.getTagline();
        profilBox.append(tagline);
        // price p creation and insertion to profilBox
        let price = document.createElement("p");
        price.textContent = this.getPrice();
        price.ariaLabel = "hour price";
        profilBox.append(price);
        // tags list ul creation 
        let ul = document.createElement("ul");
        ul.classList.add("flex");
        // tags li instertion
        this.getLiTags(ul);
        profilBox.append(ul);
        // insert to profilContainer
        this.profilContainer.append(profilBox);
    }

}