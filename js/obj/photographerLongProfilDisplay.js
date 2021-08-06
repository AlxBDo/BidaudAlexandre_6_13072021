import {LIKE_SUM, PHOTO_SUM, VIDEO_SUM} from "../constantes_photographer_page.js";
import photographerDisplayAbstract from "./photographerDisplay.js";

/**
 * display photographer profil on photographer page
 */
export default class photographerLongProfilDisplay extends photographerDisplayAbstract {

    media_path(){ return "img/photos/"; }

    /**
     * 
     * @param {object} json_object_media 
     * @param {string} media_type 
     * @param {number} id_number 
     * @param {string} photographer_name 
     * @param {string} file_name 
     * @returns {object} media html pattern
     */
     addMediaInGallery(json_object_media, media_type, id_number, photographer_name, file_name){
        let ctnr = document.getElementById(media_type+"-container-"+id_number);
        ctnr.classList.replace("hidden", "photo-container");
        ctnr.setAttribute("aria-label", json_object_media.title + ", closeup view");
        ctnr.append(
            this.getMediaPattern(json_object_media, media_type, id_number, photographer_name, file_name)
        );
        ctnr.append( this.getMediaTitlePattern(json_object_media, media_type, id_number) );
        ctnr.append( this.getMediaLikePattern(json_object_media, media_type, id_number) );
        ctnr.append( this.getPPattern("date", media_type, id_number, json_object_media.date) );
        return ctnr;
    }

    /**
     * insert img in profil to diplay photographer's portrait
     */
    addPortraitImg(){
        let portrait = document.createElement("img");
        this.setProfilImgSrc(portrait);
        document.getElementById("photographer-informations").append(portrait);
    }

    /**
     * 
     * @param {object} json_object_media 
     * @param {string} media_type 
     * @param {number} id_number 
     * @returns {object} <p> dom element
     */
    getMediaLikePattern(json_object_media, media_type, id_number){
        let ptrn = document.createElement("a");
        ptrn.setAttribute("id", media_type + "-like-" + id_number);
        ptrn.setAttribute("href", "");
        ptrn.classList.add("like");
        ptrn.setAttribute("role", "text");
        ptrn.setAttribute("aria-label", "likes");
        ptrn.textContent = json_object_media.likes;
        return ptrn;
    }

    /**
     * 
     * @param {object} json_object_media 
     * @param {string} media_type 
     * @param {number} id_number 
     * @param {string} photographer_name 
     * @param {string} file_name 
     * @returns {object} <img> dom element
     */
    getMediaPattern(json_object_media, media_type, id_number, photographer_name, file_name){
        let ptrn = media_type === "photo" ? document.createElement("img") : document.createElement("video");
        ptrn.setAttribute("id", media_type + "-" + id_number);
        ptrn.setAttribute("src", this.media_path() + photographer_name + "/" + file_name);
        ptrn.setAttribute("alt", json_object_media["alt-text"]);
        ptrn.setAttribute("aria-label", json_object_media.title);
        return ptrn;
    }

    /**
     * 
     * @param {object} json_object_media 
     * @param {string} media_type 
     * @param {number} id_number
     * @returns {object} <h2> dom element
     */
    getMediaTitlePattern(json_object_media, media_type, id_number){
        let ptrn = document.createElement("h2");
        ptrn.setAttribute("id", media_type + "-title-" + id_number);
        ptrn.textContent = json_object_media["alt-text"];
        return ptrn;
    }

    /**
     * 
     * @param {string} radical_of_id  
     * @param {string} media_type 
     * @param {number} id_number 
     * @param {string} text_content 
     * @returns {object} <p> dom element
     */
    getPPattern(radical_of_id, media_type, id_number, text_content){
        let ptrn = document.createElement("p");
        ptrn.setAttribute("id", media_type + "-" + radical_of_id + "-" + id_number);
        ptrn.classList.add(radical_of_id === "like" ? "like" : "hidden");
        ptrn.textContent = text_content;
        return ptrn;
    }

    /**
     * Display all photographer's informations
     */
    show(){
        let domElementToComplete = [
            "Name", 
            "ComeFrom", 
            "Tagline", 
            "Tags", 
            "Portrait", 
            "Price", 
            "name-title-contact", 
            "Book"
        ];
        domElementToComplete.forEach(element => {
            switch(element){
                case "Book":
                    this.showBook(this.getBook(), this.getName());
                    break;
                case "name-title-contact":
                    document.getElementById(element).textContent = this.getName();
                    break;
                case "Portrait":
                    this.addPortraitImg();
                    break;
                case "Tags":
                    this.getLiTags(document.getElementById("Tags"));
                    break;
                default:
                    document.getElementById(element).textContent = this["get"+element]();
            }
        });
    }

    /**
     * display media's gallery
     * @param {array} book : json array
     * @param {string} photographer_name 
     */
    showBook(book, photographer_name){
        if(Array.isArray(book)){
            let id_number = 0;
            let media_type = "";
            let photo_number = 0;
            let video_number = 0;
            let sum_like = 0 ;
            for(let work of book){
                if(typeof work === "object"){
                    let file_name = work.image ? work.image : work.video;
                    let name_split = file_name.split(".");
                    if(name_split[1] === "jpg"){
                        id_number = photo_number;
                        media_type = "photo";
                        photo_number++;
                    } else if(name_split[1] === "mp4"){
                        id_number = video_number;
                        media_type = "video";
                        video_number++;
                    }
                    this.addMediaInGallery(work, media_type, id_number, photographer_name, file_name);
                    sum_like += work.likes;
                }
                
            }
            LIKE_SUM.textContent = sum_like;
            PHOTO_SUM.value = photo_number;
            VIDEO_SUM.value = video_number;
        }
    }

}