async function getPromiseValue(myPromiz){
    
}

let url = window.location.href;
if(url.split('?')[1]){
    let getParams = new URLSearchParams(url.split('?')[1]);
    if(getParams.has("id")){
        jsonDataCollector.search("id", getParams.get("id"));
    }
}

function bookOrder(a, b, dataTypeToDorder){
    return a[dataTypeToDorder] > b[dataTypeToDorder] ? 1 
        : a[dataTypeToDorder] < b[dataTypeToDorder] ? -1 
        : 0 ;
}

function bookOrderByName(a, b){
    return bookOrder(a, b, "name");
}

let obj1 = {name: "calex", nombre: 4};
let obj2 = {name: "ben", nombre: 25};
let obj3 = {name: "jo", nombre: 14};
let test = [obj1, obj2, obj3];
test.sort(bookOrderByName);
console.log("test trié = " + test[0].name);