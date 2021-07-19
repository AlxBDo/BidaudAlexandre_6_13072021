class photographerLongProfilDisplay extends photographerDisplayAbstract {
    
    show(){
        let domElementToComplete = ['Name', "ComeFrom", "Tagline", "Tags", "Portrait", "Price", "Like"];
        domElementToComplete.forEach(element => {
            switch(element){
                case "Tags":
                    this.getLiTags(document.getElementById("Tags"));
                    break;
                case "Portrait":
                    this.setProfilImgSrc(document.getElementById("Portrait"));
                    break;
                case "Like":
                    // TODO gestion des likes
                    break;
                default:
                    document.getElementById(element).textContent = this["get"+element]();
            }
        });
    }

}