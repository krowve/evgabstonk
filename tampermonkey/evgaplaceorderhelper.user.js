// ==UserScript==
// @name         evgaplaceorderhelper
// @namespace    http://tampermonkey.net/
// @version      2021122902
// @description  try to take over the world!
// @author       You
// @match        https://secure.evga.com/Cart/Checkout_PlaceOrder.aspx
// @icon         https://www.google.com/s2/favicons?domain=evga.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var shoppinginterval = setInterval(function() {
        if (document.title.includes("EVGA - Checkout - Finalize Order")) {
            console.log("Polling interval on https://secure.evga.com/Cart/Checkout_PlaceOrder.aspx")
            if (!(document.querySelector("[id=ctl00_LFrame_cbAgree]")).checked) {
                document.getElementById("ctl00_LFrame_cbAgree").click()
		clearInterval(shoppinginterval);
            }
        }

    },1000);

})();
