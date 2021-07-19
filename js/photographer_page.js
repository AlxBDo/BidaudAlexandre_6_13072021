let url = window.location.href;
if(url.split('?')[1]){
    let getParams = new URLSearchParams(url.split('?')[1]);
    if(getParams.has("id")){
        jsonDataCollector.search("id", getParams.get("id"));
    }
}