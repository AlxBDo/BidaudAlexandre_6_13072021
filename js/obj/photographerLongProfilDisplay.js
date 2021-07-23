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
            let id_number = 0;
            let media_type = "";
            let photo_number = 0;
            let photo_path = "img/photos/"+photographer_name+"/";
            let video_number = 0;
            for(let work of book){
                // test picture or video
                let name_split = work.name.split(".");
                if(name_split[1] === 'jpg'){
                    id_number = photo_number;
                    media_type = "photo";
                    photo_number++;
                } else if(name_split[1] === 'mp4'){
                    id_number = video_number;
                    media_type = "video";
                    video_number++;
                }
                document.getElementById(media_type+"-container-"+id_number).classList
                .replace("hidden", "photo-container");
                document.getElementById(media_type+"-"+id_number)
                .setAttribute("src", photo_path+work.name);
                document.getElementById(media_type+"-date-"+id_number).textContent = work.date;
                document.getElementById(media_type+"-like-"+id_number).textContent = work.like;
                document.getElementById(media_type+"-title-"+id_number).textContent = work.title;
            }
            PHOTO_SUM.value = photo_number;
            VIDEO_SUM.value = video_number;
        }
    }

}