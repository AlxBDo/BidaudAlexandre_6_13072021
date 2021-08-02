(()=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n=function(){function n(t){var e,r;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),r="img/photos/Profils/",(e="profilImgPath")in this?Object.defineProperty(this,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[e]=r,this.constructor===n)throw"This object can't be instancied !";this.jdo=t}var r,o;return r=n,(o=[{key:"getBook",value:function(){return this.jdo.book}},{key:"getComeFrom",value:function(){return this.jdo.city+", "+this.jdo.country}},{key:"getId",value:function(){return this.jdo.id}},{key:"getLiTags",value:function(e){"object"===t(e)&&this.getTags().forEach((function(t){var n=document.createElement("li");n.classList.add("inline-block","first-color-text","tags");var r=document.createElement("span");r.textContent=t,r.ariaLabel="Tag",n.append(r),e.append(n)}))}},{key:"getName",value:function(){return this.jdo.name}},{key:"getPortrait",value:function(){return this.jdo.portrait}},{key:"getPrice",value:function(){return this.jdo.price+"€ / jour"}},{key:"getTagline",value:function(){return this.jdo.tagline}},{key:"getTags",value:function(){return this.jdo.tags}},{key:"setProfilImgSrc",value:function(t){t.setAttribute("src",this.profilImgPath+this.getPortrait()),t.setAttribute("atl",this.getName()+"'s photo profil"),t.setAttribute("role","presentation")}}])&&e(r.prototype,o),n}();function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?u(t):e}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(m,t);var e,n,r,s,y,p=(s=m,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=l(s);if(y){var n=l(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c(this,t)});function m(){var t;o(this,m);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return f(u(t=p.call.apply(p,[this].concat(n))),"profilContainer",document.getElementById("photographers-list")),t}return e=m,r=[{key:"ajustHeightImg",value:function(){var t=document.querySelectorAll(".profil img"),e=window.innerWidth,n=e>1023?.9*e*.15:e/1.79;t.forEach((function(t){t.style.height=parseInt(n)+"px"}))}},{key:"initHTMLContainer",value:function(){this.htmlContainer.innerHTML=""}}],(n=[{key:"getProfilPageLink",value:function(){return"photographer_page.html?id="+this.getId()}},{key:"show",value:function(){var t=document.createElement("a");t.classList.add("profil","flex"),t.setAttribute("href",this.getProfilPageLink()),t.ariaLabel=this.getName()+"'s profil link";var e=document.createElement("img");this.setProfilImgSrc(e),t.append(e);var n=document.createElement("h2");n.classList.add("name-photographer"),n.ariaLabel="Name",n.textContent=this.getName(),t.append(n);var r=document.createElement("p");r.textContent=this.getComeFrom(),r.ariaLabel="Location",t.append(r);var o=document.createElement("p");o.textContent=this.getTagline(),t.append(o);var i=document.createElement("p");i.textContent=this.getPrice(),i.ariaLabel="hour price",t.append(i);var a=document.createElement("ul");a.classList.add("flex"),this.getLiTags(a),t.append(a),this.profilContainer.append(t)}}])&&i(e.prototype,n),r&&i(e,r),m}(n);f(s,"htmlContainer",document.getElementById("photographers-list")),"Fisheye"!=document.title&&document.getElementById("current-element-type"),"Fisheye"!=document.title&&document.getElementById("gallery"),document.querySelectorAll("a.media");var y="Fisheye"!=document.title?document.getElementById("like-total"):"",p=("Fisheye"!=document.title&&document.getElementById("contact-form-modal").classList,"Fisheye"!=document.title&&document.getElementById("order-by-container").classList,"Fisheye"!=document.title?document.getElementById("photo-sum"):""),m="Fisheye"!=document.title?document.getElementById("video-sum"):"";function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function a(){return g(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"show",value:function(){var t=this;["Name","ComeFrom","Tagline","Tags","Portrait","Price","name-title-contact","Book"].forEach((function(e){switch(e){case"Book":t.showBook(t.getBook(),t.getName());break;case"name-title-contact":document.getElementById(e).textContent=t.getName();break;case"Portrait":t.setProfilImgSrc(document.getElementById("Portrait"));break;case"Tags":t.getLiTags(document.getElementById("Tags"));break;default:document.getElementById(e).textContent=t["get"+e]()}}))}},{key:"showBook",value:function(t,e){if(Array.isArray(t)){var n,r=0,o="",i=0,a="img/photos/"+e+"/",c=0,u=0,l=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(t);try{for(l.s();!(n=l.n()).done;){var f=n.value,s=f.name.split(".");"jpg"===s[1]?(r=i,o="photo",i++):"mp4"===s[1]&&(r=c,o="video",c++);var d=document.getElementById(o+"-container-"+r);d.classList.replace("hidden","photo-container"),d.setAttribute("aria-label",f.title+", closeup view");var g=document.getElementById(o+"-"+r);g.setAttribute("src",a+f.name),g.setAttribute("aria-label",f.title),document.getElementById(o+"-date-"+r).textContent=f.date,document.getElementById(o+"-like-"+r).textContent=f.like,document.getElementById(o+"-title-"+r).textContent=f.title,u+=f.like}}catch(t){l.e(t)}finally{l.f()}y.textContent=u,p.value=i,m.value=c}}}])&&b(e.prototype,n),a}(n);function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var S,B,O,C=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n;return e=t,n=[{key:"search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];fetch(this.jsonDataFile).then((function(t){if(t.ok)return t.json()})).then((function(n){if(Array.isArray(n.photographers)){var r,o=k(n.photographers);try{for(o.s();!(r=o.n()).done;){var i=r.value;!t||"tags"===t&&i[t].includes(e)?new s(i).show():"id"===t&&parseInt(i.id)===parseInt(e)&&new j(i).show()}}catch(t){o.e(t)}finally{o.f()}"id"!=t&&s.ajustHeightImg()}})).catch((function(t){console.log(t)}))}}],null&&P(e.prototype,null),n&&P(e,n),t}();O="https://alxbdo.github.io/BidaudAlexandre_6_13072021/data/fishEyeData.json",(B="jsonDataFile")in(S=C)?Object.defineProperty(S,B,{value:O,enumerable:!0,configurable:!0,writable:!0}):S[B]=O,document.querySelectorAll(".tags").forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),s.initHTMLContainer(),C.search("tags",t.firstElementChild.textContent.toLocaleLowerCase())}))})),window.addEventListener("scroll",(function(){window.scrollY>0?document.getElementById("pass-cont").classList.remove("hidden"):document.getElementById("pass-cont").classList.add("hidden")})),C.search()})();