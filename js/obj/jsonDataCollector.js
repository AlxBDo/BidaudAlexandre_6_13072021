class jsonDataCollector {

    static jsonDataFile = "https://alxbdo.github.io/BidaudAlexandre_6_13072021/data/fishEyeData.json";

    static search(keySearched = false, valueSearched = false){
        fetch(this.jsonDataFile)
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
                            || photographer[keySearched].includes(valueSearched)
                        ){ new photoShortProfilDisplay(photographer).show(); }
                    }
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
}