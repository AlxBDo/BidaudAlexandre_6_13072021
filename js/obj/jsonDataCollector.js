import photoShortProfilDisplay from "./photoShortProfilDisplay.js";
import photographerLongProfilDisplay from "./photographerLongProfilDisplay.js" ;


/**
 * browse the json file to retrieve the information and execute the objects 
 * allowing them to be displayed
 */
export default class jsonDataCollector {

static jsonDataFile = "https://alxbdo.github.io/BidaudAlexandre_6_13072021/data/fishEyeData.json";

    /**
     * 
     * @param {string} keySearched 
     * @param {string} valueSearched 
     */
    static search(keySearched = false, valueSearched = false){
        fetch(this.jsonDataFile)
            .then(function(res){
                if(res.ok){
                    return res.json();
                }
            })
            .then(function(value){
                if(Array.isArray(value['photographers'])){
                    for(let photographer of value['photographers']){
                        if(
                            !keySearched 
                            || (keySearched === "tags" 
                            && photographer[keySearched].includes(valueSearched))
                        ){ 
                            new photoShortProfilDisplay(photographer).show(); 
                        } else if(
                            keySearched === "id" 
                            && parseInt(photographer.id) === parseInt(valueSearched)
                        ){
                            new photographerLongProfilDisplay(photographer).show();
                        }
                    }
                    if(keySearched != "id"){ photoShortProfilDisplay.ajustHeightImg(); }
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
}