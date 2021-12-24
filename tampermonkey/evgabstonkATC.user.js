// ==UserScript==
// @name         evgabstonkATC
// @namespace    http://tampermonkey.net/
// @version      2021122401
// @description  try to take over the world!
// @author       You
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
// 3060 Ti XC Gaming
PRODUCTS.push("08G-P5-3663-RX")
// 3060 Ti FTW3 Gaming
PRODUCTS.push("08G-P5-3665-RX")
// 3060 Ti FTW3 Ultra Gaming
PRODUCTS.push("08G-P5-3667-RX")
// 3070 XC3 Black Gaming
PRODUCTS.push("08G-P5-3751-RX")
// 3070 XC3 Ultra Gaming
PRODUCTS.push("08G-P5-3755-RX")
// 3070 FTW3 Ultra Gaming
PRODUCTS.push("08G-P5-3767-RX")
// 3080 XC3 Black Gaming
PRODUCTS.push("10G-P5-3881-RX")
// 3080 XC3 Gaming
PRODUCTS.push("10G-P5-3883-RX")
// 3080 XC3 Ultra Gaming
PRODUCTS.push("10G-P5-3885-RX")
// 3080 FTW3 Gaming
PRODUCTS.push("10G-P5-3895-RX")
// 3080 FTW3 Ultra Gaming
PRODUCTS.push("10G-P5-3897-RX")
// 3080 XC3 Ultra Gaming
PRODUCTS.push("10G-P5-3885-RX")
// 3080 FTW3 Gaming
PRODUCTS.push("10G-P5-3895-RX")
// 3080 FTW3 Ultra Gaming
PRODUCTS.push("10G-P5-3897-RX")
// 3060 XC Black Gaming
PRODUCTS.push("12G-P5-3655-RX")
// 3060 XC Gaming
PRODUCTS.push("12G-P5-3657-RX")
// 3090 FTW3 Gaming
PRODUCTS.push("24G-P5-3985-RX")
// 3090 FTW3 Ultra Gaming
PRODUCTS.push("24G-P5-3987-RX")
    
// 3060Ti XC Gaming LHR
PRODUCTS.push("08G-P5-3663-RL")    

// 3060Ti FTW Ultra Gaming LHR
PRODUCTS.push("08G-P5-3667-RL")

// 3070 XC3 Ultra Gaming LHR
PRODUCTS.push("08G-P5-3755-RL")    

// 3080 XC3 Black Gaming LHR
PRODUCTS.push("10G-P5-3881-RL")    

// 3080 XC3 Ultra Gaming LHR
PRODUCTS.push("10G-P5-3885-RL")    
// 3090 FTW3 Ultra Hybrid Gaming
// PRODUCTS.push("24G-P5-3988-RX")

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
