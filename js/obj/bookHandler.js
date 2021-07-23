const bookHandler = {

    elements_date : [],
    elements_like : [],
    elements_title : [],

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
    
    addLikeWork : function(dom_element_obj){
        if(typeof dom_element_obj === "object"){
            dom_element_obj.textContent = parseInt(dom_element_obj.textContent) + 1 ;
        }
    },

    createElementArray : function(element_name){
        GALLERY_MEDIA_ELEMENTS.forEach(element => {
            this.addElementsArray(element_name, this.getDomElementIdArray(element));            
        });
    },

    displayBookSorted: function(orderBy){
        let counter = 1;
        for(let work of this.getElementsArray(orderBy)){
            if(work.id && work.id != ""){
                document.getElementById(work.id).style.order = counter;
                counter++;
            }
        }
    },

    getDateNumberFormat : function(date){
        let ds = date.split("/");
        return ds[2]+ds[1]+ds[0];
    },

    getDomElementIdArray : function(dom_element_obj){
        return dom_element_obj.getAttribute("id").split("-");
    },

    getElementsArray : function(element_name){
        if(this["elements_"+element_name].length === 0){
            this.createElementArray(element_name);
            this.sortBook(element_name);
        }
        return this["elements_"+element_name];
    },

    sortBook : function (orderBy){
        this["elements_"+orderBy].sort(this.sortBookElement);
    },

    sortBookElement : function (a, b){
        return a.value > b.value ? 1 
            : a.value < b.value ? -1 
            : 0 ;
    }

}