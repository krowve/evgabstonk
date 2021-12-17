// ==UserScript==
// @name         evgashoppingcarthelper
// @namespace    http://tampermonkey.net/
// @version      2021121101
// @description  try to take over the world!
// @author       You
// @match        https://www.evga.com/*
// @match        https://secure.evga.com/*
// @icon         https://www.google.com/s2/favicons?domain=evga.com
// @grant        none
// ==/UserScript==

(function() {

        if (document.title == "EVGA - Checkout") {
            document.getElementsByClassName('btn-checkout')[0].click()
            console.log("Checkout")
        }

})();