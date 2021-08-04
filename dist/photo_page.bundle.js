(()=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e={getListenFctName:function(){return[]},addListenner:function(){var t=this,e=this.getListenFctName();e.length>0&&e.forEach((function(e){t[e]()}))},listen:function(n){n&&"object"===t(n)&&n.forEach((function(t){e.addListenner.call(t)}))}};function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var r=function(){function t(e,n){var o,r;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r="img/photos/Profils/",(o="profilImgPath")in this?Object.defineProperty(this,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[o]=r,this.constructor===t)throw"This object can't be instancied !";this.jdo=e,this.media=n}var e,r;return e=t,(r=[{key:"getBook",value:function(){return this.media}},{key:"getComeFrom",value:function(){return this.jdo.city+", "+this.jdo.country}},{key:"getId",value:function(){return this.jdo.id}},{key:"getLiTags",value:function(t){"object"===n(t)&&this.getTags().forEach((function(e){var n=document.createElement("li");n.classList.add("inline-block","first-color-text","tags");var o=document.createElement("span");o.textContent=e,o.ariaLabel="Tag",n.append(o),t.append(n)}))}},{key:"getName",value:function(){return this.jdo.name}},{key:"getPortrait",value:function(){return this.jdo.portrait}},{key:"getPrice",value:function(){return this.jdo.price+"€ / jour"}},{key:"getTagline",value:function(){return this.jdo.tagline}},{key:"getTags",value:function(){return this.jdo.tags}},{key:"setProfilImgSrc",value:function(t){t.setAttribute("src",this.profilImgPath+this.getPortrait()),t.setAttribute("atl",this.getName()+"'s photo profil"),t.setAttribute("role","presentation")}}])&&o(e.prototype,r),t}();function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(y,t);var e,n,o,r,i,m=(r=y,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(r);if(i){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return u(this,t)});function y(){var t;a(this,y);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return d(s(t=m.call.apply(m,[this].concat(n))),"profilContainer",document.getElementById("photographers-list")),t}return e=y,o=[{key:"ajustHeightImg",value:function(){var t=document.querySelectorAll(".profil img"),e=window.innerWidth,n=e>1023?.9*e*.15:e/1.79;t.forEach((function(t){t.style.height=parseInt(n)+"px"}))}},{key:"initHTMLContainer",value:function(){this.htmlContainer.innerHTML=""}}],(n=[{key:"getProfilPageLink",value:function(){return"photographer_page.html?id="+this.getId()}},{key:"show",value:function(){var t=document.createElement("a");t.classList.add("profil","flex"),t.setAttribute("href",this.getProfilPageLink()),t.ariaLabel=this.getName()+"'s profil link";var e=document.createElement("img");this.setProfilImgSrc(e),t.append(e);var n=document.createElement("h2");n.classList.add("name-photographer"),n.ariaLabel="Name",n.textContent=this.getName(),t.append(n);var o=document.createElement("p");o.textContent=this.getComeFrom(),o.ariaLabel="Location",t.append(o);var r=document.createElement("p");r.textContent=this.getTagline(),t.append(r);var i=document.createElement("p");i.textContent=this.getPrice(),i.ariaLabel="hour price",t.append(i);var a=document.createElement("ul");a.classList.add("flex"),this.getLiTags(a),t.append(a),this.profilContainer.append(t)}}])&&c(e.prototype,n),o&&c(e,o),y}(r);d(m,"htmlContainer",document.getElementById("photographers-list"));var y="Fisheye"!=document.title?document.getElementById("current-element-type"):"",h="Fisheye"!=document.title?document.getElementById("gallery"):"",p=document.querySelectorAll("a.media"),v="Fisheye"!=document.title?document.getElementById("like-total"):"",g="Fisheye"!=document.title?document.getElementById("contact-form-modal").classList:"",b="Fisheye"!=document.title?document.getElementById("order-by-container").classList:"",k="Fisheye"!=document.title?document.getElementById("photo-sum"):"",E="Fisheye"!=document.title?document.getElementById("video-sum"):"";function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function C(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function L(t,e){return(L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(o);if(r){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return _(this,t)});function a(){return A(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"show",value:function(){var t=this;["Name","ComeFrom","Tagline","Tags","Portrait","Price","name-title-contact","Book"].forEach((function(e){switch(e){case"Book":t.showBook(t.getBook(),t.getName());break;case"name-title-contact":document.getElementById(e).textContent=t.getName();break;case"Portrait":t.setProfilImgSrc(document.getElementById("Portrait"));break;case"Tags":t.getLiTags(document.getElementById("Tags"));break;default:document.getElementById(e).textContent=t["get"+e]()}}))}},{key:"showBook",value:function(t,e){if(Array.isArray(t)){var n,o=0,r="",i=0,a="img/photos/"+e+"/",c=0,l=0,u=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(t);try{for(u.s();!(n=u.n()).done;){var s=n.value;if("object"===I(s)){var f=s.image?s.image:s.video,d=f.split(".");"jpg"===d[1]?(o=i,r="photo",i++):"mp4"===d[1]&&(o=c,r="video",c++);var m=document.getElementById(r+"-container-"+o);m.classList.replace("hidden","photo-container"),m.setAttribute("aria-label",s.title+", closeup view");var y=document.getElementById(r+"-"+o);y.setAttribute("src",a+f),y.setAttribute("alt",s["alt-text"]),y.setAttribute("aria-label",s.title),document.getElementById(r+"-date-"+o).textContent=s.date,document.getElementById(r+"-like-"+o).textContent=s.likes,document.getElementById(r+"-title-"+o).textContent=s["alt-text"],l+=s.likes}}}catch(t){u.e(t)}finally{u.f()}v.textContent=l,k.value=i,E.value=c}}}])&&C(e.prototype,n),a}(r);function B(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var O,T,F,N=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"getPhotographerMedia",value:function(t,e){if(Array.isArray(t)){var n,o=[],r=B(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;parseInt(i.photographerId)===parseInt(e)&&o.push(i)}}catch(t){r.e(t)}finally{r.f()}return o}}},{key:"search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];fetch(this.jsonDataFile).then((function(t){if(t.ok)return t.json()})).then((function(o){if(Array.isArray(o.photographers)){var r,i=B(o.photographers);try{for(i.s();!(r=i.n()).done;){var a=r.value,c=t.getPhotographerMedia(o.media,a.id);!e||"tags"===e&&a[e].includes(n)?new m(a,c).show():"id"===e&&parseInt(a.id)===parseInt(n)&&new j(a,c).show()}}catch(t){i.e(t)}finally{i.f()}"id"!=e&&m.ajustHeightImg()}})).catch((function(t){console.log(t)}))}}],null&&P(e.prototype,null),n&&P(e,n),t}();function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}F="https://alxbdo.github.io/BidaudAlexandre_6_13072021/data/fishEyeData.json",(T="jsonDataFile")in(O=N)?Object.defineProperty(O,T,{value:F,enumerable:!0,configurable:!0,writable:!0}):O[T]=F;var R={elements_date:[],elements_like:[],elements_title:[],order_by_select:document.getElementById("order-by"),addElementsArray:function(t,e){var n=document.getElementById(e[0]+"-"+t+"-"+e[2]);""!=n.textContent&&this["elements_"+t].push({id:e[0]+"-"+e[1]+"-"+e[2],value:"date"!=t?n.textContent:this.getDateNumberFormat(n.textContent)})},addLikeOnClick:function(){document.querySelectorAll(".like").forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),t.classList.contains("liked")||R.addLikeWork(t)}))}))},addLikeWork:function(t){"object"===M(t)&&(t.textContent=parseInt(t.textContent)+1,v.textContent=parseInt(v.textContent)+1)},createElementArray:function(t){var e=this;p.forEach((function(n){e.addElementsArray(t,e.getDomElementIdArray(n))}))},displayBookSorted:function(t){var e,n=1,o=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(this.getElementsArray(t));try{for(o.s();!(e=o.n()).done;){var r=e.value;r.id&&""!=r.id&&function(){var t=document.getElementById(r.id),e=75*parseInt(r.id.split("-")[2]);t.style.order=n,t.classList.add("invisible"),setTimeout((function(){t.classList.remove("invisible")}),e),n++}()}}catch(t){o.e(t)}finally{o.f()}},getDateNumberFormat:function(t){var e=t.split("-");return e[2]+e[1]+e[0]},getDomElementIdArray:function(t){return t.getAttribute("id").split("-")},getElementsArray:function(t){return 0===this["elements_"+t].length&&(this.createElementArray(t),this.sortBook(t)),this["elements_"+t]},getListenFctName:function(){return["addLikeOnClick","orderByClick","selectOptionsClick"]},orderByClick:function(){this.order_by_select.addEventListener("click",(function(t){t.preventDefault(),this.classList.contains("open")?(this.classList.remove("open"),this.setAttribute("aria-expanded",!1)):(this.classList.add("open"),this.setAttribute("aria-expanded",!0))}))},selectOptionsClick:function(){document.querySelectorAll("#order-by a").forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),b.remove("date-slct","title-slct");var n=t.getAttribute("id");document.getElementById("order-by-select").selectedIndex="date"===n?1:"like"===n?0:2,b.add(n+"-slct"),R.displayBookSorted(n)}))}))},sortBook:function(t){this["elements_"+t].sort(this.sortBookElement)},sortBookElement:function(t,e){return t.value>e.value?1:t.value<e.value?-1:0}};function H(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return U(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var q={close_modal_btn:document.getElementById("close-modal-form"),form_dom_obj:document.getElementById("contact"),inputs_value:new Map,open_form_link:document.getElementById("contact-form-link"),check:function(){var t,e=H(this.form_dom_obj.elements);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(!this.checkInput(n))return!1;this.inputs_value.set(n.id,n.value)}}catch(t){e.e(t)}finally{e.f()}return!0},checkInput:function(t){if(""!=t.id){var e=t.id.includes("name")?"Name":t.id.charAt(0).toUpperCase()+t.id.substring(1);if(!this["check"+e.charAt(0).toUpperCase()+e.substring(1)](t.value))return this.errorInput(t);this.validInput(t)}return!0},checkEmail:function(t){return!!/([\w-.]+@[\w.]+\.{1}[\w]+)/.test(t)},checkMessage:function(t){return t.length>14&&t.length<301},checkName:function(t){return!(t.length<2||/[@:./\\_{}[\]()|%*$£?!&~#`µ0-9]/.test(t))},clear:function(){var t,e=H(this.form_dom_obj.elements);try{for(e.s();!(t=e.n()).done;){var n=t.value;if(""!=n.id){n.value="";var o=document.getElementById(n.id+"-info").classList;o.contains("err")&&o.remove("err"),o.contains("valid")&&o.remove("valid")}}}catch(t){e.e(t)}finally{e.f()}setTimeout((function(){g.remove("submitted"),g.replace("opened","closed")}),3e3)},close:function(){g.replace("opened","closed"),document.getElementById("fishEye-HomePage").focus()},closeClick:function(){var t=this;this.close_modal_btn.addEventListener("click",(function(e){e.preventDefault(),t.close()}))},errorInput:function(t){var e=document.getElementById(t.id+"-info").classList;return e.contains("valid")&&e.remove("valid"),e.add("err"),t.focus(),!1},getListenFctName:function(){return["submit","closeClick","open","onChangeInput"]},onChangeInput:function(){var t,e=this,n=H(this.form_dom_obj.elements);try{var o=function(){var n=t.value;n.addEventListener("change",(function(t){e.checkInput(n)}))};for(n.s();!(t=n.n()).done;)o()}catch(t){n.e(t)}finally{n.f()}},open:function(){var t=this;this.open_form_link.addEventListener("click",(function(e){e.preventDefault(),g.replace("closed","opened"),t.close_modal_btn.focus()}))},send:function(){if(this.check()){document.getElementById("recipient-name").textContent=document.getElementById("name-title-contact").textContent,g.add("submitted"),console.log("Valeurs des inputs : ");var t,e=H(this.inputs_value);try{for(e.s();!(t=e.n()).done;){var n=t.value;console.log(n)}}catch(t){e.e(t)}finally{e.f()}this.clear()}},submit:function(){var t=this;this.form_dom_obj.addEventListener("submit",(function(e){e.preventDefault(),t.send()}))},validInput:function(t){var e=document.getElementById(t.id+"-info").classList;e.contains("err")&&e.remove("err"),e.add("valid")}},G={close_lightbox_btn:document.getElementById("close-lightbox"),galleryClassList:h.classList,lightboxPosition:document.getElementById("lightbox-position"),getCurrentPosition:function(){return parseInt(this.lightboxPosition.value)},getGalleryMode:function(){return this.galleryClassList.contains("gallery")?"gallery":"lightbox"},getListenFctName:function(){return["closeClick","openClick","moveClick"]},getNewIdHTML:function(t){var e=y.value;return(t>=("photo"===e?k.value:E.value)||t<0)&&(t=t<0&&"video"===e?k.value-1:0,"photo"===e&&E.value>0?e="video":"video"===e&&k.value>0&&(e="photo")),[e,t]},setCurrentPosition:function(t){this.lightboxPosition.value=t},setCurrentType:function(t){y.value=t},activeElement:function(t){this.addActivClass(t),this.setCurrentPosition(R.getDomElementIdArray(t)[2])},addActivClass:function(t){t.classList.add("activ")},changeBookView:function(){var t=this.getGalleryMode(),e="gallery"===t?"lightbox":"gallery";"lightbox"!=e?(h.setAttribute("role","none"),h.setAttribute("aria-label","medias"),this.clearActivClass()):(h.setAttribute("role","dialog"),h.setAttribute("aria-label","image closeup view")),this.changeGalleryClass(e,t)},changeGalleryClass:function(t,e){this.galleryClassList.remove(e),this.galleryClassList.add(t)},clearActivClass:function(){document.querySelector(".activ").classList.remove("activ")},closeClick:function(){this.close_lightbox_btn.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation(),G.changeBookView()}))},listen:function(){var t=this;this.listen_fct_names.forEach((function(e){t[e]()}))},openClick:function(){p.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),"gallery"===G.getGalleryMode()&&(G.changeBookView(),G.activeElement(t))}))}))},move:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next";this.clearActivClass();var e="next"===t?this.getCurrentPosition()+1:this.getCurrentPosition()-1,n=this.getNewIdHTML(e);this.setCurrentType(n[0]),this.activeElement(document.getElementById(n[0]+"-container-"+n[1]))},moveClick:function(){document.querySelectorAll(".move").forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),G.move(t.getAttribute("id"))}))}))}},V={keys_searched:["ArrowLeft","ArrowRight","Escape"],getListenFctName:function(){return["listenKeyboard"]},listenKeyboard:function(){var t=this;document.addEventListener("keydown",(function(e){t.keys_searched.forEach((function(n){e.key===n&&t[n+"Action"]()}))}),!1)},ArrowLeftAction:function(){G.move("previous")},ArrowRightAction:function(){G.move("next")},EscapeAction:function(){"lightbox"===G.getGalleryMode()?G.changeBookView():q.close()}},$=window.location.href;if($.split("?")[1]){var W=new URLSearchParams($.split("?")[1]);W.has("id")&&(N.search("id",W.get("id")),e.listen([R,q,V,G]))}})();