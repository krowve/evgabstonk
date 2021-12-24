// ==UserScript==
// @name         evgacheckouthelperpp
// @namespace    http://tampermonkey.net/
// @version      2021122401
// @description  try to take over the world!
// @author       You
// @downloadURL  https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgacheckouthelperpp.user.js
// @updateURL    https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgacheckouthelperpp.user.js
// @match        https://secure.evga.com/*
// @icon         https://www.google.com/s2/favicons?domain=evga.com
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    var shoppinginterval = setInterval(function() {

        if (document.title.includes("EVGA - Checkout - Finalize Order")) {
            if (!(document.getElementById("ctl00_LFrame_cbAgree")).checked) {
                document.getElementById("ctl00_LFrame_cbAgree").click()

            }
        }
        if (document.title.includes("EVGA - Checkout - Billing Options")) {
            if (!(document.getElementById("chkPaypalNotice")).checked) {
                document.getElementById("chkPaypalNotice").click()

            }
            if (!(document.querySelector("[value=Paypal]")).checked) {
                document.querySelector("[value=Paypal]").click()
            }

        }
        if (document.title.includes("Shopping")) {
            console.log("Shopping")
            if (!(document.querySelector("[name=cbAgree]")).checked) {
                document.querySelector("[name=cbAgree]").click()
            }

            if (!(document.querySelector("[name=rdoOneAddress]")).checked) {
                    document.querySelector("[name=rdoOneAddress]").click()
            }
       }
    },500);

})();
