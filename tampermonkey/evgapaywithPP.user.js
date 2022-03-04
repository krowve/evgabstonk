// ==UserScript==
// @name         evgapaywithPP.user.js
// @namespace    http://tampermonkey.net/
// @version      2021121101
// @description  try to take over the world!
// @author       You
// @match        https://secure.evga.com/*
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
            }
        }

        var ready =  ($('.hide-ajax-loader').css('display') === 'none')
        console.log(ready)
        if (!(ready)) {
            console.log("not ready")
            return
        }

        if (document.title == "EVGA - Checkout - Billing Options") {
            console.log("Polling interval on https://secure.evga.com/Cart/Checkout_Payment.aspx")
            if (document.getElementById("modalPaypal").style.cssText == "display: block;") {
                if (!(document.querySelector("[id=chkPaypalNotice]")).checked) {
                    document.querySelector("[id=chkPaypalNotice]").click()
                }
                document.getElementById("ctl00_LFrame_ImageButton4").click()
            }
            if ((document.getElementById("modalPaypal").style.cssText == "display: none;") || (document.getElementById("modalPaypal").style.cssText == "") ){
                if (!(document.querySelector("[value=Paypal]")).checked) {
                    document.querySelector("[value=Paypal]").click()
                }
                document.getElementById("ctl00_LFrame_btncontinue").click()
            }

        }
    },500);

})();
