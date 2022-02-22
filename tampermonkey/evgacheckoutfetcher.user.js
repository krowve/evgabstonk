// ==UserScript==
// @name         evgacheckoutfetcher
// @namespace    http://tampermonkey.net/
// @version      2022022101
// @description  try to take over the world!
// @author       You
// @downloadURL  https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgacheckoutfetcher.user.js
// @updateURL    https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgacheckoutfetcher.user.js
// @match        https://secure.evga.com/Cart/Checkout_Shipping.aspx
// @icon         https://www.google.com/s2/favicons?domain=evga.com
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

     if (document.title.includes("Shopping")) {
         console.log("Shopping")
         // Insert Fetch Code Here
	 
	 setTimeout(function(){ window.open("https://secure.evga.com/Cart/Checkout_Placeorder.aspx") }, 3000);
     }
})();
