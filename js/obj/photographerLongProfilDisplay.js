class photographerLongProfilDisplay extends photographerDisplayAbstract {
    
    show(){
        let domElementToComplete = ['Name', "ComeFrom", "Tagline", "Tags", "Portrait", "Price", "Like", "Book"];
        domElementToComplete.forEach(element => {
            switch(element){
                case "Book":
                    console.log(this.getBook());
                    break;
                case "Like":
                    // TODO gestion des likes
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

}