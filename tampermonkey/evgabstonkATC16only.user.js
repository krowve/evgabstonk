// ==UserScript==
// @name         evgabstonkATC
// @namespace    http://tampermonkey.net/
// @version      2022012002
// @description  Cart from the EVGA B Stock Page
// @author       Krowve
// @downloadURL  https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgabstonkATC.user.js
// @updateURL    https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgabstonkATC.user.js
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
PRODUCTS.push("06G-P4-1266-RX")
// EVGA GeForce GTX 1660 Ti SC Ultra Black Gaming
PRODUCTS.push("06G-P4-1655-RX")
// EVGA GeForce GTX 1660 Ti XC Ultra Black Gaming
PRODUCTS.push("06G-P4-1265-RX")
// EVGA GeForce GTX 1660 Ti XC Ultra Gaming
PRODUCTS.push("06G-P4-1267-RX")
// EVGA GeForce GTX 1660 Ti SC Ultra Gaming
PRODUCTS.push("06G-P4-1667-RX")
// EVGA GeForce GTX 1660 Ti XC Black Gaming
PRODUCTS.push("06G-P4-1261-RX")
// EVGA GeForce GTX 1660 Ti XC Gaming
PRODUCTS.push("06G-P4-1263-RX")
// EVGA GeForce GTX 1660 XC Ultra Gaming
PRODUCTS.push("06G-P4-1167-RX")
// EVGA GeForce GTX 1660 SUPER SC Ultra Black Gaming
PRODUCTS.push("06G-P4-1066-RX")
// EVGA GeForce GTX 1660 SC Ultra Gaming
PRODUCTS.push("06G-P4-1067-RX")
// EVGA GeForce GTX 1660 SUPER SC Ultra Gaming
PRODUCTS.push("06G-P4-1068-RX")
// EVGA GeForce GTX 1660 XC Ultra Black Gaming
PRODUCTS.push("06G-P4-1165-RX")
// EVGA GeForce GTX 1660 SUPER BLACK GAMING
PRODUCTS.push("06G-P4-1061-RX")
// EVGA GeForce GTX 1660 XC Black Gaming
PRODUCTS.push("06G-P4-1161-RX")
// EVGA GeForce GTX 1660 XC Gaming
PRODUCTS.push("06G-P4-1163-RX")
// EVGA GeForce GTX 1660 SC Ultra Black Gaming
PRODUCTS.push("06G-P4-1065-RX")
// EVGA GeForce GTX 1660 Black Gaming
PRODUCTS.push("06G-P4-1160-RX")    
    
// EVGA GeForce 210 DDR3
//PRODUCTS.push("01G-P3-1313-RX")

     if (document.title.includes("EVGA - Products - B-Stock")) {
         var PRODUCT = ""
         for (var i = 0; i < PRODUCTS.length; i++) {
             PRODUCT = PRODUCTS[i]

             if (document.querySelector("[title*='" + PRODUCT + "']")) {
                 document.querySelector("[title*='" + PRODUCT + "']").click()
             }
         }
     }
})();
