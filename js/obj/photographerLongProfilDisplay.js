class photographerLongProfilDisplay extends photographerDisplayAbstract {

    show(){
        let domElementToComplete = ['Name', "ComeFrom", "Tagline", "Tags", "Portrait", "Price", "Like", "Book"];
        domElementToComplete.forEach(element => {
            switch(element){
                case "Book":
                    this.showBook(this.getBook(), this.getName());
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

    showBook(book, photographer_name){
        if(Array.isArray(book)){
            let photo_number = 0;
            let photo_path = "img/photos/"+photographer_name+"/";
            for(let work of book){
                // test picture or video
                let name_split = work.name.split(".");
                if(name_split[1] === 'jpg'){
                    document.getElementById("photo-container-"+photo_number).classList.remove("hide");
                    document.getElementById("photo-"+photo_number)
                    .setAttribute("src", photo_path+work.name);
                    document.getElementById("photo-title-"+photo_number).textContent = work.title;
                    document.getElementById("likeP-"+photo_number).textContent = work.like;
                    photo_number++;
                } else if(name_split[1] === 'mp4'){
                    document.getElementById("video-container-0").classList.remove("hide");
                    document.getElementById("video-0").setAttribute("src", photo_path+work.name);
                    document.getElementById("video-0-download-link")
                    .setAttribute("href", photo_path+work.name);
                    document.getElementById("likeV-0").textContent = work.like;
                }
            }
        }
    }

}