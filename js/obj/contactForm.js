import { MODAL_CF_CLASSLIST } from "../constantes_photographer_page.js";

export const contactForm = {

    close_modal_btn : document.getElementById("close-modal-form"),
    form_dom_obj : document.getElementById("contact"),
    inputs_value : new Map(), // store input values
    open_form_link: document.getElementById("contact-form-link"),

    /**
     * check inputs value
     */
    check: function(){
        for(let ipt of this.form_dom_obj.elements){
            if(!this.checkInput(ipt)){ return false; 
            } else { this.inputs_value.set(ipt.id, ipt.value) ; }
        }
        return true;
    },

    /**
     * 
     * @param {object} ipt : DOM element object 
     * @returns {boolean} true input value is valid
     */
    checkInput: function(ipt){
        if(ipt.id != ""){
            let id = ipt.id.includes("name") ? "Name" 
            : ipt.id.charAt(0).toUpperCase()+ipt.id.substring(1);
            if(
                !this["check"+id.charAt(0).toUpperCase()+id.substring(1)](ipt.value)
            ) { return this.errorInput(ipt) ; 
            } else { 
                this.validInput(ipt);
            }
        } 
        return true;
    },

    /**
     * email verification
     * @param {string} email 
     * @returns {boolean} true = email is correct
     */
    checkEmail: function(email){
        return /([\w-.]+@[\w.]+\.{1}[\w]+)/.test(email) ? true : false;
    },

    /**
     * message verification
     * @param {string} msg 
     * @returns {boolean} true = msg is correct
     */
    checkMessage: function(msg){
        let msg_lgth = msg.length;
        return msg_lgth > 14 && msg.length < 301 ? true : false;
    },

    /**
     * first name or last name verification
     * @param {string} name 
     * @returns {boolean} true = name is correct
     */
    checkName: function(name){
        return name.length < 2 
          || /[@:./\\_{}[\]()|%*$£?!&~#`µ0-9]/.test(name) 
          ? false : true;
    },

    /**
     * delete all input value and close modal
     */
    clear: function(){
        for(let ipt of this.form_dom_obj.elements){ 
            if(ipt.id != ""){ 
                ipt.value = ""; 
                let container_classlist = document.getElementById(ipt.id+"-info").classList;
                if(container_classlist.contains("err")){ container_classlist.remove("err"); }
                if(container_classlist.contains("valid")){ container_classlist.remove("valid"); }
            } 
        }
        setTimeout(function(){
            MODAL_CF_CLASSLIST.remove("submitted");
            MODAL_CF_CLASSLIST.replace("opened", "closed");
        }, 3000);
    },

    /**
     * close contact form modal
     */
    close : function(){
        MODAL_CF_CLASSLIST.replace("opened", "closed");
        document.getElementById("fishEye-HomePage").focus();
    },

    /**
     * Add click listenner on close modal button
     */
    closeClick : function(){
        this.close_modal_btn.addEventListener("click", event => {
            event.preventDefault();
            this.close();
        });
    },

    /**
     * apply the error class to the input
     * @param {object} input_obj : DOM element object 
     * @returns {boolean} false
     */
    errorInput: function(input_obj){
        let div_classlist = document.getElementById(input_obj.id+"-info").classList;
        if(div_classlist.contains("valid")){ div_classlist.remove("valid"); }
        div_classlist.add("err");
        input_obj.focus();
        return false;
    },

    /**
     * 
     * @returns {array} array of listenner functions name
     */
    getListenFctName: function(){ return ["submit", "closeClick", "open", "onChangeInput"]; },

    /**
     * get inputs and add onchange listenner
     */
    onChangeInput: function(){
        for(let ipt of this.form_dom_obj.elements){
            ipt.addEventListener("change", event => { this.checkInput(ipt); });
        }
    },

    /**
     * open contact form modal
     */
    open: function(){
        this.open_form_link.addEventListener("click", event => {
            event.preventDefault();
            MODAL_CF_CLASSLIST.replace("closed", "opened");
            this.close_modal_btn.focus();
        });
    },

    send: function(){
        if(this.check()){
            document.getElementById("recipient-name").textContent 
            = document.getElementById("name-title-contact").textContent;
            MODAL_CF_CLASSLIST.add("submitted");
            console.log("Valeurs des inputs : ");
            for(let ipt_val of this.inputs_value){
                console.log(ipt_val);
            }
            this.clear();
            document.getElementById("fishEye-HomePage").focus();
        }
    },
    
    /**
     * check inputs value before submit
     */
     submit: function(){
        this.form_dom_obj.addEventListener("submit", event => {
            event.preventDefault();
            this.send();
        });
    },

    /**
     * remove the error class at the input if it is applied
     * @param {object} input_obj : DOM element object 
     */
    validInput: function(input_obj){
        let container_classlist = document.getElementById(input_obj.id+"-info").classList;
        if(container_classlist.contains("err")){ container_classlist.remove("err"); }
        container_classlist.add("valid");
    }

};