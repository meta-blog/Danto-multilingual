/* Lightense Images
  ====================================================
  Version : 1.0.10
  Website : https://sparanoid.com/work/lightense-images/
  Repo    : https://github.com/sparanoid/lightense-images
  Author  : Tunghsiao Liu
  License : MIT
  ==================================================== */

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Lightense=t():e.Lightense=t()}(window,function(){return r={},i.m=n=[function(e,t){function n(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function l(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach(function(e){var t,n,r;t=i,r=o[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))})}return i}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=function(){"use strict";var n,y=window,v=document,k={time:300,padding:40,offset:40,keyboard:!0,cubicBezier:"cubic-bezier(.2, 0, .1, 1)",background:"var(--bg-color-80, rgba(255, 255, 255, .98))",zIndex:1e6,beforeShow:void 0,afterShow:void 0,beforeHide:void 0,afterHide:void 0},w={};function r(e){var t=w[e];if(t){if("function"!=typeof t)throw"config.".concat(e," must be a function!");Reflect.apply(t,w,[w])}}function i(t){t.src&&!t.classList.contains("lightense-target")&&(t.classList.add("lightense-target"),t.addEventListener("click",function(e){return w.keyboard&&(e.metaKey||e.ctrlKey)?y.open(t.src,"_blank"):void function(e){if(w.target=e,w.target.classList.contains("lightense-open"))return a();r("beforeShow"),w.scrollY=y.scrollY,function(n,r,i){n.addEventListener(r,function e(t){Reflect.apply(i,this,t),n.removeEventListener(r,e)})}(w.target,"transitionend",function(){r("afterShow")});var t=new Image;t.onload=function(){!function(e){var t=e.width,n=e.height,r=y.pageYOffset||v.documentElement.scrollTop||0,i=y.pageXOffset||v.documentElement.scrollLeft||0,o=w.target.getBoundingClientRect(),a=t/o.width,c=y.innerWidth||v.documentElement.clientWidth||0,s=y.innerHeight||v.documentElement.clientHeight||0,l=w.target.getAttribute("data-lightense-padding")||w.target.getAttribute("data-padding")||w.padding,d=l<c?c-l:c-k.padding,u=l<s?s-l:s-k.padding,g=t/n,f=d/u;w.scaleFactor=t<d&&n<u?a:g<f?u/n*a:d/t*a;var p=c/2,b=r+s/2,h=o.left+i+o.width/2,m=o.top+r+o.height/2;w.translateX=Math.round(p-h),w.translateY=Math.round(b-m)}(this),function(){w.target.classList.add("lightense-open"),w.wrap=v.createElement("div"),w.wrap.className="lightense-wrap",setTimeout(function(){w.target.style.transform="scale("+w.scaleFactor+")"},20),w.target.parentNode.insertBefore(w.wrap,w.target),w.wrap.appendChild(w.target),setTimeout(function(){w.wrap.style.transform="translate3d("+w.translateX+"px, "+w.translateY+"px, 0)"},20);var e={cubicBezier:w.target.getAttribute("data-lightense-cubic-bezier")||w.cubicBezier,background:w.target.getAttribute("data-lightense-background")||w.target.getAttribute("data-background")||w.background,zIndex:w.target.getAttribute("data-lightense-z-index")||w.zIndex},t=l(l({},w),e);o("lightense-images-css-computed","\n    :root {\n      --lightense-z-index: ".concat(t.zIndex-1,";\n      --lightense-backdrop: ").concat(t.background,";\n      --lightense-duration: ").concat(t.time,"ms;\n      --lightense-timing-func: ").concat(t.cubicBezier,";\n    }")),w.container.style.visibility="visible",setTimeout(function(){w.container.style.opacity="1"},20)}(),y.addEventListener("keyup",s,!1),y.addEventListener("scroll",c,!1),w.container.addEventListener("click",a,!1)},t.src=w.target.src}(this)},!1))}function o(e,t){var n=v.head||v.getElementsByTagName("head")[0];v.getElementById(e)&&v.getElementById(e).remove();var r=v.createElement("style");r.id=e,r.styleSheet?r.styleSheet.cssText=t:r.appendChild(v.createTextNode(t)),n.appendChild(r)}function a(){r("beforeHide"),y.removeEventListener("keyup",s,!1),y.removeEventListener("scroll",c,!1),w.container.removeEventListener("click",a,!1),w.target.classList.remove("lightense-open"),w.wrap.style.transform="",w.target.style.transform="",w.target.classList.add("lightense-transitioning"),w.container.style.opacity="",setTimeout(function(){r("afterHide"),w.container.style.visibility="",w.container.style.backgroundColor="",w.wrap.parentNode.replaceChild(w.target,w.wrap),w.target.classList.remove("lightense-transitioning")},w.time)}function c(){Math.abs(w.scrollY-y.scrollY)>=w.offset&&a()}function s(e){e.preventDefault(),27===e.keyCode&&a()}return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};n=function(e){switch(d(e)){case"undefined":throw"You need to pass an element!";case"string":return v.querySelectorAll(e);case"object":return e}}(e),w=l(l({},k),t),o("lightense-images-css","\n:root {\n  --lightense-z-index: ".concat(w.zIndex-1,";\n  --lightense-backdrop: ").concat(w.background,";\n  --lightense-duration: ").concat(w.time,"ms;\n  --lightense-timing-func: ").concat(w.cubicBezier,";\n}\n\n.lightense-backdrop {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: calc(var(--lightense-z-index) - 1);\n  padding: 0;\n  margin: 0;\n  transition: opacity var(--lightense-duration) ease;\n  cursor: zoom-out;\n  opacity: 0;\n  background-color: var(--lightense-backdrop);\n  visibility: hidden;\n}\n\n@supports (-webkit-backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    -webkit-backdrop-filter: blur(30px);\n  }\n}\n\n@supports (backdrop-filter: blur(30px)) {\n  .lightense-backdrop {\n    background-color: var(--lightense-backdrop);\n    backdrop-filter: blur(30px);\n  }\n}\n\n.lightense-wrap {\n  position: relative;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  z-index: var(--lightense-z-index);\n  pointer-events: none;\n}\n\n.lightense-target {\n  cursor: zoom-in;\n  transition: transform var(--lightense-duration) var(--lightense-timing-func);\n  pointer-events: auto;\n}\n\n.lightense-open {\n  cursor: zoom-out;\n}\n\n.lightense-transitioning {\n  pointer-events: none;\n}")),v.querySelector(".lightense-backdrop")||(w.container=v.createElement("div"),w.container.className="lightense-backdrop",v.body.appendChild(w.container)),function(e){var t=e.length;if(t)for(var n=0;n<t;n++)i(e[n]);else i(e)}(n)}}();e.exports=r}],i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0);function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var n,r});


/* Reframe.js
  ====================================================
  Version : 3.0.2
  Website : dollarshaveclub.github.io/reframe.js
  Repo    : github.com/yowainwright/reframe.js
  Author  : Jeff Wainwright
  License : MIT
  ==================================================== */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).reframe=t()}(this,function(){"use strict";function t(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var i=Array(e),o=0,t=0;t<n;t++)for(var r=arguments[t],f=0,d=r.length;f<d;f++,o++)i[o]=r[f];return i}return function(e,s){return void 0===s&&(s="js-reframe"),("string"==typeof e?t(document.querySelectorAll(e)):"length"in e?t(e):[e]).forEach(function(e){var t,n,i,o,r,f,d,l;-1!==e.className.split(" ").indexOf(s)||-1<e.style.width.indexOf("%")||(i=e.getAttribute("height")||e.offsetHeight,o=e.getAttribute("width")||e.offsetWidth,r=("string"==typeof i?parseInt(i):i)/("string"==typeof o?parseInt(o):o)*100,(f=document.createElement("div")).className=s,(d=f.style).position="relative",d.width="100%",d.paddingTop=r+"%",(l=e.style).position="absolute",l.width="100%",l.height="100%",l.left="0",l.top="0",null!==(t=e.parentNode)&&void 0!==t&&t.insertBefore(f,e),null!==(n=e.parentNode)&&void 0!==n&&n.removeChild(e),f.appendChild(e))})}});


/* Search [with modifications]
   ====================================================
   Website : https://retifrav.github.io/blog/2020/01/05/hugo-search/
   Author  : Retif
   License : GPLv3
   ==================================================== */

   var searchResults = document.getElementById("js-results-container");
var searchInput = document.getElementById("js-search-input");
var contextDive = 95;
var timerUserInput = false;
var languagePaths = {
    "en-us": "/us",
    "en-in": "/in",
    "zh-cn": "/cn",
    "zh-tw": "/tw",
    "es-mx": "/mx",
    "ar-ae": "/ae",
    "pt-br": "/br",
    "ja-jp": "/jp",
    "de-de": "/de",
    "ko-kr": "/kr",
    "fr-fr": "/fr",
    "vi-vn": "/vn",
    "it-it": "/it",
    "tr-tr": "/tr",
    "id-id": "/id",
    "th-th": "/th"
};

function getCurrentLanguage() {
    var path = window.location.pathname;
    for (var lang in languagePaths) {
        if (languagePaths[lang] && path.startsWith(languagePaths[lang] + "/")) {
            return lang;
        }
    }
    return "en-us"; // 기본 언어 변경: English (US)
}

function adjustUrl(url, lang) {
    if (lang === "en-us") return url;
    var urlObj = new URL(url, window.location.origin);
    var langPath = languagePaths[lang];
    if (langPath && !urlObj.pathname.startsWith(langPath + "/")) {
        urlObj.pathname = langPath + urlObj.pathname;
    }
    return urlObj.href;
}

function search(query) {
    while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
    }

    if (query.length === 0 || query.length < 1) {
        searchResults.style.display = "none";
    } else {
        searchResults.style.display = "block";
        getJSON("/index.json", function(data) {
            var results = [];
            let regex = new RegExp(query, "i");
            var currentLang = getCurrentLanguage();

            data.forEach(function(item) {
                if ((item.title.match(regex) || item.content.match(regex)) && item.lang === currentLang) {
                    results.push(item);
                }
            });

            if (results.length > 0) {
                results.forEach(function(item, i) {
                    let start = item.content.toLowerCase().indexOf(query.toLowerCase());
                    let end = start + query.length;
                    let previewStart = start - contextDive;
                    
                    if (previewStart > 0) {
                        previewStart = item.content.indexOf(' ', previewStart) + 1;
                        if (previewStart > start) {
                            start = previewStart;
                        } else {
                            start -= contextDive / 2;
                        }
                    } else {
                        start = 0;
                    }

                    let previewEnd = end + contextDive;
                    if (previewEnd < item.content.length) {
                        previewEnd = item.content.indexOf(' ', previewEnd);
                        if (previewEnd !== -1) {
                            end = previewEnd;
                        } else {
                            end += contextDive / 2;
                        }
                    } else {
                        end = item.content.length - 1;
                    }

                    let preview = item.content.substring(start, end);
                    if (start !== 0) {
                        preview = "...".concat(preview);
                    }
                    if (end !== item.content.length - 1) {
                        preview = preview.concat("...");
                    }

                    var url = item.translations && item.translations[currentLang] 
                        ? item.translations[currentLang] 
                        : item.permalink;
                    url = adjustUrl(url, currentLang);

                    let resultItem = `<div class="search-results__item" id="search-summary-${i}" >
                        <a class="search-results__image" href="${url}" style="background-image: url(${adjustUrl(item.image, currentLang)})"></a>
                        <a class="search-results__link" href="${url}">
                            <time class="search-results-date">${item.date}</time>
                            <div class="search-results-title">${item.title}</div>
                        </a>
                    </div>`;

                    searchResults.appendChild(htmlToElement(resultItem));
                });
            } else {
                var noResultsText = {
                    "en-us": "No results found...",
                    "en-in": "No results found...",
                    "zh-cn": "没有找到结果...",
                    "zh-tw": "沒有找到結果...",
                    "es-mx": "No se encontraron resultados...",
                    "ar-ae": "لم يتم العثور على نتائج...",
                    "pt-br": "Nenhum resultado encontrado...",
                    "ja-jp": "検索結果がありません...",
                    "de-de": "Keine Ergebnisse gefunden...",
                    "ko-kr": "검색 결과가 없습니다...",
                    "fr-fr": "Aucun résultat trouvé...",
                    "vi-vn": "Không tìm thấy kết quả...",
                    "it-it": "Nessun risultato trovato...",
                    "tr-tr": "Sonuç bulunamadı...",
                    "id-id": "Tidak ada hasil ditemukan...",
                    "th-th": "ไม่พบผลลัพธ์..."
                }[getCurrentLanguage()] || "No results found...";

                searchResults.appendChild(htmlToElement('<div class="no-results">' + noResultsText + '</div>'));
            }
        });
    }
}

function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function() {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        } else {
            console.error(`Some error processing ${url}: ${xhr.status}`);
        }
    };
    xhr.onerror = function() {
        console.error(`Connection error: ${xhr.status}`);
    };
    xhr.send();
}

function htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

searchInput.addEventListener('keyup', function() {
    if (timerUserInput) {
        clearTimeout(timerUserInput);
    }
    timerUserInput = setTimeout(function() {
        search(searchInput.value.trim());
    }, 150);
});




/* Vanilla Lazyload
  ====================================================
  Version : 17.3
  Website : https://www.andreaverlicchi.eu/vanilla-lazyload/
  Repo    : https://github.com/verlok/vanilla-lazyload
  Author  : Andrea Verlicchi
  License : MIT
  ==================================================== */

!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n=n||self).LazyLoad=t()}(this,(function(){"use strict";function n(){return(n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n}).apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,a=t&&"classList"in document.createElement("p"),o=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i=new n(t);try{e=new CustomEvent("LazyLoad::Initialized",{detail:{instance:i}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:i})}window.dispatchEvent(e)},s=function(n,t){return n.getAttribute("data-"+t)},u=function(n,t,e){var i="data-"+t;null!==e?n.setAttribute(i,e):n.removeAttribute(i)},d=function(n){return s(n,"ll-status")},f=function(n,t){return u(n,"ll-status",t)},_=function(n){return f(n,null)},g=function(n){return null===d(n)},v=function(n){return"native"===d(n)},p=["loading","loaded","applied","error"],b=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},h=function(n,t){a?n.classList.add(t):n.className+=(n.className?" ":"")+t},m=function(n,t){a?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},E=function(n){return n.llTempImage},I=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},y=function(n,t){n&&(n.loadingCount+=t)},A=function(n,t){n&&(n.toLoadCount=t)},L=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},w=function(n,t,e){e&&n.setAttribute(t,e)},z=function(n,t){n.removeAttribute(t)},k=function(n){return!!n.llOriginalAttrs},O=function(n){if(!k(n)){var t={};t.src=n.getAttribute("src"),t.srcset=n.getAttribute("srcset"),t.sizes=n.getAttribute("sizes"),n.llOriginalAttrs=t}},C=function(n){if(k(n)){var t=n.llOriginalAttrs;w(n,"src",t.src),w(n,"srcset",t.srcset),w(n,"sizes",t.sizes)}},N=function(n,t){w(n,"sizes",s(n,t.data_sizes)),w(n,"srcset",s(n,t.data_srcset)),w(n,"src",s(n,t.data_src))},x=function(n){z(n,"src"),z(n,"srcset"),z(n,"sizes")},M=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&L(e).forEach(t)},R=function(n,t){L(n).forEach(t)},G={IMG:function(n,t){M(n,(function(n){O(n),N(n,t)})),O(n),N(n,t)},IFRAME:function(n,t){w(n,"src",s(n,t.data_src))},VIDEO:function(n,t){R(n,(function(n){w(n,"src",s(n,t.data_src))})),w(n,"poster",s(n,t.data_poster)),w(n,"src",s(n,t.data_src)),n.load()}},T=function(n,t){var e=G[n.tagName];e&&e(n,t)},D=function(n,t,e){y(e,1),h(n,t.class_loading),f(n,"loading"),b(t.callback_loading,n,e)},F={IMG:function(n,t){u(n,t.data_src,null),u(n,t.data_srcset,null),u(n,t.data_sizes,null),M(n,(function(n){u(n,t.data_srcset,null),u(n,t.data_sizes,null)}))},IFRAME:function(n,t){u(n,t.data_src,null)},VIDEO:function(n,t){u(n,t.data_src,null),u(n,t.data_poster,null),R(n,(function(n){u(n,t.data_src,null)}))}},V=function(n,t){u(n,t.data_bg_multi,null),u(n,t.data_bg_multi_hidpi,null)},j=function(n,t){var e=F[n.tagName];e?e(n,t):function(n,t){u(n,t.data_bg,null),u(n,t.data_bg_hidpi,null)}(n,t)},P=["IMG","IFRAME","VIDEO"],S=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||b(n.callback_finish,t)},U=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},$=function(n,t,e){n.removeEventListener(t,e)},q=function(n){return!!n.llEvLisnrs},H=function(n){if(q(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];$(n,e,i)}delete n.llEvLisnrs}},B=function(n,t,e){!function(n){delete n.llTempImage}(n),y(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),m(n,t.class_loading),t.unobserve_completed&&I(n,e)},J=function(n,t,e){var i=E(n)||n;q(i)||function(n,t,e){q(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";U(n,i,t),U(n,"error",e)}(i,(function(a){!function(n,t,e,i){var a=v(t);B(t,e,i),h(t,e.class_loaded),f(t,"loaded"),j(t,e),b(e.callback_loaded,t,i),a||S(e,i)}(0,n,t,e),H(i)}),(function(a){!function(n,t,e,i){var a=v(t);B(t,e,i),h(t,e.class_error),f(t,"error"),b(e.callback_error,t,i),a||S(e,i)}(0,n,t,e),H(i)}))},K=function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),J(n,t,e),function(n,t,e){var i=s(n,t.data_bg),a=s(n,t.data_bg_hidpi),r=o&&a?a:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),E(n).setAttribute("src",r),D(n,t,e))}(n,t,e),function(n,t,e){var i=s(n,t.data_bg_multi),a=s(n,t.data_bg_multi_hidpi),r=o&&a?a:i;r&&(n.style.backgroundImage=r,function(n,t,e){h(n,t.class_applied),f(n,"applied"),V(n,t),t.unobserve_completed&&I(n,t),b(t.callback_applied,n,e)}(n,t,e))}(n,t,e)},Q=function(n,t,e){!function(n){return P.indexOf(n.tagName)>-1}(n)?K(n,t,e):function(n,t,e){J(n,t,e),T(n,t),D(n,t,e)}(n,t,e)},W=["IMG","IFRAME"],X=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},Y=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){f(n,"entered"),function(n,t,e){t.unobserve_entered&&I(n,e)}(n,e,i),b(e.callback_enter,n,t,i),function(n){return p.indexOf(d(n))>=0}(n)||Q(n,e,i)}(n.target,n,t,e):function(n,t,e,i){g(n)||(function(n,t,e,i){e.cancel_on_exit&&function(n){return"loading"===d(n)}(n)&&"IMG"===n.tagName&&(H(n),function(n){M(n,(function(n){x(n)})),x(n)}(n),function(n){M(n,(function(n){C(n)})),C(n)}(n),m(n,e.class_loading),y(i,-1),_(n),b(e.callback_cancel,n,t,i))}(n,t,e,i),b(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},Z=function(n){return Array.prototype.slice.call(n)},nn=function(n){return n.container.querySelectorAll(n.elements_selector)},tn=function(n){return function(n){return"error"===d(n)}(n)},en=function(n,t){return function(n){return Z(n).filter(g)}(n||nn(t))},an=function(n,e){var a=c(n);this._settings=a,this.loadingCount=0,function(n,t){i&&!X(n)&&(t._observer=new IntersectionObserver((function(e){Y(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(a,this),function(n,e){t&&window.addEventListener("online",(function(){!function(n,t){var e;(e=nn(n),Z(e).filter(tn)).forEach((function(t){m(t,n.class_error),_(t)})),t.update()}(n,e)}))}(a,this),this.update(e)};return an.prototype={update:function(n){var t,a,o=this._settings,r=en(n,o);A(this,r.length),!e&&i?X(o)?function(n,t,e){n.forEach((function(n){-1!==W.indexOf(n.tagName)&&(n.setAttribute("loading","lazy"),function(n,t,e){J(n,t,e),T(n,t),j(n,t),f(n,"native")}(n,t,e))})),A(e,0)}(r,o,this):(a=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,a)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),nn(this._settings).forEach((function(n){delete n.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;en(n,e).forEach((function(n){I(n,t),Q(n,e,t)}))}},an.load=function(n,t){var e=c(t);Q(n,e)},an.resetStatus=function(n){_(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(an,window.lazyLoadOptions),an}));