/**
 * manages listenner and associate functions
 */
 export const listenner = {

    /**
     * 
     * @returns {array} functions name
     */
    getListenFctName: function(){ return []; },

    /**
     * browse the array of function names and execute them to add the listeners
     */
    addListenner: function(){
        let functions_name = this.getListenFctName();
        if(functions_name.length > 0){ functions_name.forEach(element => { this[element](); }); }
    },

    /**
     * browse the array of objects passed as a parameter and execute their listener functions
     */
    listen: function(array_of_objects_to_listen){ 
        if(array_of_objects_to_listen && typeof array_of_objects_to_listen === "object"){
            array_of_objects_to_listen.forEach(obj => {
                listenner.addListenner.call(obj);
            });
        }
        
    },

};