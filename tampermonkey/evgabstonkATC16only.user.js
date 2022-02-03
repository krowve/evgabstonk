// ==UserScript==
// @name         evgabstonkATC16only
// @namespace    http://tampermonkey.net/
// @version      2022020201
// @description  Cart from the EVGA B Stock Page
// @author       Krowve
// @downloadURL  https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgabstonkATC16only.user.js
// @updateURL    https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgabstonkATC16only.user.js
// @match        https://www.evga.com/Products/*
// @match        https://www.evga.com/products/*
// @icon         https://www.google.com/s2/favicons?domain=evga.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// Will try to cart in listed order.
// Will only try to cart one card per page load.
// Sort by your preference.

var PRODUCTS = new Array()
// EVGA GeForce GTX 1660 Ti XC Ultra Gaming
// $300 - 28MH - 80w
PRODUCTS.push("06G-P4-1266-RX")
// EVGA GeForce GTX 1660 Ti SC Ultra Black Gaming
// $290 - 28MH - 80w
PRODUCTS.push("06G-P4-1665-RX")
// EVGA GeForce GTX 1660 Ti XC Ultra Black Gaming
// $280 - 28MH - 80w
PRODUCTS.push("06G-P4-1265-RX")
// EVGA GeForce GTX 1660 Ti XC Ultra Gaming
// $280 - 28MH - 80w
PRODUCTS.push("06G-P4-1267-RX")
// EVGA GeForce GTX 1660 Ti SC Ultra Gaming
// $270 - 28MH - 80w
PRODUCTS.push("06G-P4-1667-RX")
// EVGA GeForce GTX 1660 Ti XC Black Gaming
// $260 - 28MH - 80w
PRODUCTS.push("06G-P4-1261-RX")
// EVGA GeForce GTX 1660 Ti XC Gaming
// $250 - 28MH - 80w
PRODUCTS.push("06G-P4-1263-RX")
// EVGA GeForce GTX 1660 XC Ultra Gaming
// $230 - 23MH - 80w
PRODUCTS.push("06G-P4-1167-RX")
// EVGA GeForce GTX 1660 SUPER SC Ultra Black Gaming
// $220 - 29MH - 90w
PRODUCTS.push("06G-P4-1066-RX")
// EVGA GeForce GTX 1660 SC Ultra Gaming
// $220 - 23MH - 80w
PRODUCTS.push("06G-P4-1067-RX")
// EVGA GeForce GTX 1660 SUPER SC Ultra Gaming
// $220 - 29MH - 90w
PRODUCTS.push("06G-P4-1068-RX")
// EVGA GeForce GTX 1660 XC Ultra Black Gaming
// $220 - 23MH - 80w
PRODUCTS.push("06G-P4-1165-RX")
// EVGA GeForce GTX 1660 SUPER BLACK GAMING
// $210 - 29MH - 90w
PRODUCTS.push("06G-P4-1061-RX")
// EVGA GeForce GTX 1660 XC Black Gaming
// $210 - 23MH - 80w
PRODUCTS.push("06G-P4-1161-RX")
// EVGA GeForce GTX 1660 XC Gaming
// $210 - 23MH - 80w
PRODUCTS.push("06G-P4-1163-RX")
// EVGA GeForce GTX 1660 SC Ultra Black Gaming
// $200 - 23MH - 80w
PRODUCTS.push("06G-P4-1065-RX")
// EVGA GeForce GTX 1660 Black Gaming
// $200 - 23MH - 80w
PRODUCTS.push("06G-P4-1160-RX")

// EVGA GeForce 210 DDR3
//PRODUCTS.push("01G-P3-1313-RX")

     if (document.title.includes("EVGA - Products - B-Stock")) {
         var PRODUCT = ""
         for (var i = 0; i < PRODUCTS.length; i++) {
             PRODUCT = PRODUCTS[i]

             if (document.querySelector("[title*='" + PRODUCT + "']")) {
                 document.querySelector("[title*='" + PRODUCT + "']").click()
		 break
             }
         }
     }
})();
