// ==UserScript==
// @name         evgacheckout2payment.user.js
// @namespace    http://tampermonkey.net/
// @version      2022030401
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

        var ready =  ($('.hide-ajax-loader').css('display') === 'none')
        console.log(ready)
        if (!(ready)) {
            console.log("not ready")
            return
        }


        if (document.title == "Shopping") {
            console.log("Polling interval on https://secure.evga.com/Cart/Checkout_Shipping.aspx")
            if (document.getElementById("divShipFee").style.cssText == "display: block;") {
                if (!(document.querySelector("[name=cbAgree]")).checked) {
                    document.querySelector("[name=cbAgree]").click()
                }
                document.getElementsByClassName('btnCheckoutContinue')[1].click()
                return
            }

            if (document.getElementById("modalSuggestAddress").style.cssText == "display: block;") {
                document.getElementsByClassName('btnCheckoutContinue')[2].click()

            }
            if ((document.getElementById("modalSuggestAddress").style.cssText == "display: none;") || (document.getElementById("modalSuggestAddress").style.cssText == "")) {
                document.getElementsByClassName('btnCheckoutContinue')[0].click()
            }
        }
    },500);

})();
