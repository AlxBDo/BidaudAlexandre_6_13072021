import {LIKE_SUM} from "../constantes_photographer_page.js";
import {PHOTO_SUM} from "../constantes_photographer_page.js";
import {VIDEO_SUM} from "../constantes_photographer_page.js";


import photographerDisplayAbstract from "./photographerDisplay.js";

/**
 * display photographer profil on photographer page
 */
export default class photographerLongProfilDisplay extends photographerDisplayAbstract {

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
                    this.setProfilImgSrc(document.getElementById("Portrait"));
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
            let photo_path = "img/photos/"+photographer_name+"/";
            let video_number = 0;
            let sum_like = 0 ;
            for(let work of book){
                // test picture or video
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
                    let media_ctnr = document.getElementById(media_type+"-container-"+id_number);
                    media_ctnr.classList.replace("hidden", "photo-container");
                    media_ctnr.setAttribute("aria-label", work.title+", closeup view");
                    let media = document.getElementById(media_type+"-"+id_number);
                    media.setAttribute("src", photo_path+file_name);
                    media.setAttribute("alt", work["alt-text"]);
                    media.setAttribute("aria-label", work.title);
                    document.getElementById(media_type+"-date-"+id_number).textContent = work.date;
                    document.getElementById(media_type+"-like-"+id_number).textContent = work.likes;
                    document.getElementById(media_type+"-title-"+id_number).textContent = work["alt-text"];
                    sum_like += work.likes;
                }
                
            }
            LIKE_SUM.textContent = sum_like;
            PHOTO_SUM.value = photo_number;
            VIDEO_SUM.value = video_number;
        }
    }

}