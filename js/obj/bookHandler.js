import { GALLERY_MEDIA_ELEMENTS } from "../constantes_photographer_page.js";
import { LIKE_SUM } from "../constantes_photographer_page.js";
import { ORDERBY_CONTAINER_CLASSLIST } from "../constantes_photographer_page.js";

/**
 * handling photographer's media galery
 * {object}
 */
export const bookHandler = {

// media array sorted
    //- by date
    elements_date : [],
    //- by popularity
    elements_like : [],
    //- by title
    elements_title : [],
    
    order_by_select : document.getElementById("order-by"),

    /**
     * compose the html element's id and get this value then insert it in the chosen array
     * @param {string} array_elements_name : date, popularity or title
     * @param {array} element_id_splitted : 
     */
    addElementsArray : function(array_elements_name, element_id_splitted){
        let dom_element = document.getElementById(
            element_id_splitted[0]
            +"-"+array_elements_name
            +"-"+element_id_splitted[2]
        );
        if(dom_element.textContent != ""){
            this["elements_"+array_elements_name].push({
                id: element_id_splitted[0]+"-"+element_id_splitted[1]+"-"+element_id_splitted[2],
                value: array_elements_name != "date" 
                        ? dom_element.textContent 
                        : this.getDateNumberFormat(dom_element.textContent),
            });
        }
    },

    /**
     * add like on click
     */
    addLikeOnClick: function(){
        document.querySelectorAll(".like").forEach(element => {
            element.addEventListener("click", function(event){
                event.preventDefault();
                event.stopPropagation();
                if(!element.classList.contains("liked")){
                    bookHandler.addLikeWork(element);
                }
            });
        });
    },
    
    /**
     * add an additional like to the media
     * @param {object} dom_element_obj
     */
    addLikeWork : function(dom_element_obj){
        if(typeof dom_element_obj === "object"){
            dom_element_obj.textContent = parseInt(dom_element_obj.textContent) + 1 ;
            LIKE_SUM.textContent = parseInt(LIKE_SUM.textContent) + 1 ;
        }
    },


    /**
     * get media from gallery to create media array
     * @param {string} element_name 
     */
    createElementArray : function(element_name){
        GALLERY_MEDIA_ELEMENTS.forEach(element => {
            this.addElementsArray(element_name, this.getDomElementIdArray(element));            
        });
    },

    /**
     * 
     * @param {string} orderBy : date, like or title
     */
    displayBookSorted: function(orderBy){
        let counter = 1;
        for(let work of this.getElementsArray(orderBy)){
            if(work.id && work.id != ""){
                let media_element = document.getElementById(work.id);
                let delai = (parseInt(work.id.split("-")[2])*75);
                media_element.style.order = counter;
                media_element.classList.add("invisible");
                setTimeout(function(){
                    media_element.classList.remove("invisible");
                }, delai);
                counter++;
            }
        }
    },

    /**
     * 
     * @param {string} date : yyyy/mm/dd
     * @returns {number} date : yyyymmdd
     */
    getDateNumberFormat : function(date){
        let ds = date.split("-");
        return ds[2]+ds[1]+ds[0];
    },

    /**
     * 
     * @param {object} dom_element_obj 
     * @returns {array} 
     */
    getDomElementIdArray : function(dom_element_obj){
        return dom_element_obj.getAttribute("id").split("-");
    },

    /**
     * 
     * @param {string} element_name : date, like or title
     * @returns {array} 
     */
    getElementsArray : function(element_name){
        if(this["elements_"+element_name].length === 0){
            this.createElementArray(element_name);
            this.sortBook(element_name);
        }
        return this["elements_"+element_name];
    },

    /**
     * 
     * @returns {array} array of listenner functions name
     */
    getListenFctName: function(){ return ["addLikeOnClick", "orderByClick", "selectOptionsClick"]; },
    
    /** 
     * open or close order by select 
     */
    orderByClick: function(){
        this.order_by_select.addEventListener("click", function(event){
            event.preventDefault();
            if(this.classList.contains("open")){ 
                this.classList.remove("open"); 
                this.setAttribute("aria-expanded", false);
            } else { 
                this.classList.add("open"); 
                this.setAttribute("aria-expanded", true); 
            }
        });
    },
    
    /** 
     * selected order option
     */
    selectOptionsClick: function(){
        document.querySelectorAll("#order-by a").forEach(element => {
            element.addEventListener("click", function(event){
                event.preventDefault();
                ORDERBY_CONTAINER_CLASSLIST.remove("date-slct", "title-slct");
                let id_html = element.getAttribute("id");
                document.getElementById("order-by-select").selectedIndex 
                = id_html === "date" ? 1 : id_html === "like" ? 0 : 2 ; 
                ORDERBY_CONTAINER_CLASSLIST.add(id_html+"-slct");
                bookHandler.displayBookSorted(id_html);        
            });
        });
    },

    /**
     * sort media gallery
     * @param {string} orderBy : date, like or title
     */
    sortBook : function (orderBy){
        this["elements_"+orderBy].sort(this.sortBookElement);
    },

    /**
     * sort arrays of objects
     * @param {object} a 
     * @param {object} b 
     * @returns {number}
     */
    sortBookElement : function (a, b){
        return a.value > b.value ? 1 
            : a.value < b.value ? -1 
            : 0 ;
    }

};