// ==UserScript==
// @name         evgaberrorpage
// @namespace    http://tampermonkey.net/
// @version      2022010301
// @description  Cart from the EVGA B Stock Page
// @author       Krowve
// @downloadURL  https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgaerrorpage.user.js
// @updateURL    https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgaerrorpage.user.js
// @match        https://www.evga.com/Products/*
// @match        https://www.evga.com/products/*
// @icon         https://www.google.com/s2/favicons?domain=evga.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


     if (document.title.includes("Error")) {
         setTimeout(function(){ window.open(window.location = "https://www.evga.com/products/productlist.aspx?type=8") }, 5000);
     }
})();

