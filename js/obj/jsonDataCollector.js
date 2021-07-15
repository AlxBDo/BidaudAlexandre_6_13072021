class jsonDataCollector {

    static jsonDataFile = "../../data/fishEyeData.json";

    static read(){
        fetch(this.jsonDataFile)
            .then(function(res){
                if(res.ok){
                    return res.json;
                }
            })
            .then(function(value){
                console.log(value);
            })
            .catch(function(err){
                console.log(err);
            });
    }
}