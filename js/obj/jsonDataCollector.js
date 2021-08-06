import photoShortProfilDisplay from "./photoShortProfilDisplay.js";
import photographerLongProfilDisplay from "./photographerLongProfilDisplay.js" ;


/**
 * browse the json file to retrieve the information and execute the objects 
 * allowing them to be displayed
 */
export default class jsonDataCollector {

static jsonDataFile(){ return "https://alxbdo.github.io/BidaudAlexandre_6_13072021/data/fishEyeData.json"; }

    static getPhotographerMedia(media_json_data_array, photographer_id){
        if(Array.isArray(media_json_data_array)){
            let media_array = [];
            for(let media of media_json_data_array){
                if(parseInt(media.photographerId) === parseInt(photographer_id)){
                    media_array.push(media);
                }
            }
            return media_array;
        }
    }

    /**
     * 
     * @param {string} keySearched 
     * @param {string} valueSearched 
     */
    static search(keySearched = false, valueSearched = false){
        fetch(this.jsonDataFile())
            .then(function(res){
                if(res.ok){
                    return res.json();
                }
            })
            .then(function(value){
                if(Array.isArray(value["photographers"])){
                    for(let photographer of value["photographers"]){
                        let medias = jsonDataCollector.getPhotographerMedia(
                                        value["media"], 
                                        photographer.id
                                    );
                        if(
                            !keySearched 
                            || (keySearched === "tags" 
                            && photographer[keySearched].includes(valueSearched))
                        ){ 
                            new photoShortProfilDisplay(
                                photographer, 
                                medias
                            ).show(); 
                        } else if(
                            keySearched === "id" 
                            && parseInt(photographer.id) === parseInt(valueSearched)
                        ){
                            new photographerLongProfilDisplay(
                                photographer, 
                                medias
                            ).show();
                        }
                    }
                    if(keySearched !== "id"){ photoShortProfilDisplay.ajustHeightImg(); }
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
}