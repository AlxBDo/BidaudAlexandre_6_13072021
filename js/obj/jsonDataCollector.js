class jsonDataCollector {

    static jsonDataFile = "https://alxbdo.github.io/BidaudAlexandre_6_13072021/data/fishEyeData.json";

    static search(keySearched = false, valueSearched = false){
        return fetch(this.jsonDataFile)
            .then(function(res){
                if(res.ok){
                    return res.json();
                }
            })
            .then(function(value){
                if(Array.isArray(value['photographers'])){
                    let photographers = [];
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
                            return photographer.book;
                        }
                    }
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
}