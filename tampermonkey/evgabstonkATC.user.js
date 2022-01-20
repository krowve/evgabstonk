// ==UserScript==
// @name         evgabstonkATC
// @namespace    http://tampermonkey.net/
// @version      2022012001
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
// 3070 Ti FTW3 Ultra Gaming
PRODUCTS.push("08G-P5-3797-RX")
    
// 3090 FTW3 Ultra Hybrid Gaming
// PRODUCTS.push("24G-P5-3988-RX")
// 2060 KO Gaming
PRODUCTS.push("06G-P4-2066-RX")
// 2060 KO Ultra Gaming
PRODUCTS.push("06G-P4-2068-RX")
// 2060 Gaming
PRODUCTS.push("06G-P4-2060-RX")
// 2060 XC Black Gaming
PRODUCTS.push("06G-P4-2061-RX")    
// 2060 SC Ultra Gaming
PRODUCTS.push("06G-P4-2067-RX")
// 2060 SC Black Gaming
PRODUCTS.push("06G-P4-1762-RX")
// 2060 SC Gaming
PRODUCTS.push("06G-P4-2062-RX")    
// 2060 XC Gaming
PRODUCTS.push("06G-P4-2063-RX")        
// 2060 SC Ultra Black Gaming
PRODUCTS.push("06G-P4-2065-RX")    
// 2060 XC Ultra Gaming
PRODUCTS.push("06G-P4-2167-RX")
// 2060 XC Ultra Black Gaming
PRODUCTS.push("06G-P4-2163-RX")    
// 2060 XC Ultra Gaming
PRODUCTS.push("06G-P4-2166-RX")
// 2060 Super SC Ultra Gaming
PRODUCTS.push("08G-P4-3067-RX")
// 2060 Super Black Gaming Dual HDB Fans
PRODUCTS.push("08G-P4-3061-RX")
// 2060 Super Black Gaming Dual Fans
PRODUCTS.push("08G-P4-3062-RX")
// 2060 Super SC Ultra Black Gaming
PRODUCTS.push("08G-P4-3065-RX")
// 2060 Super XC Black Gaming
PRODUCTS.push("08G-P4-3161-RX")    
// 2060 Super XC Gaming
PRODUCTS.push("08G-P4-3162-RX")    
// 2060 Super XC Ultra Gaming
PRODUCTS.push("08G-P4-3163-RX")    
// 2070 Black Gaming
PRODUCTS.push("08G-P4-1071-RX")
// 2070 XC Gaming
PRODUCTS.push("08G-P4-2172-RX")
// 2070 XC Ultra Gaming
PRODUCTS.push("08G-P4-2173-RX")
// 2070 XC Black Edition
PRODUCTS.push("08G-P4-2071-RX")
// 2070 Super Black Gaming
PRODUCTS.push("08G-P4-3071-RX")
// 2070 XC Black Edition Gaming
PRODUCTS.push("08G-P4-1171-RX")    
// 2070 FTW3 Gaming
PRODUCTS.push("08G-P4-2273-RX")
// 2070 FTW3 Ultra iCX2
PRODUCTS.push("08G-P4-2277-RX")
// 2070 Super KO Gaming
PRODUCTS.push("08G-P4-2072-RX")
// 2070 Super Gaming
PRODUCTS.push("08G-P4-3070-RX")
// 2070 Super XC Gaming
PRODUCTS.push("08G-P4-3172-RX")
// 2070 Gaming
PRODUCTS.push("08G-P4-2070-RX")
// 2070 Super XC Ultra Gaming
PRODUCTS.push("08G-P4-3173-RX")
// 2070 Super FTW3 Gaming
PRODUCTS.push("08G-P4-3273-RX")
// 2070 Super FTW3 Ultra Gaming
PRODUCTS.push("08G-P4-3277-RX")
// 2070 Super FTW3 Ultra+
PRODUCTS.push("08G-P4-3377-RX")
// 2070 XC Black Gaming
PRODUCTS.push("08G-P4-2171-RX")
// 2070 Super XC Ultra+
PRODUCTS.push("08G-P4-3175-RX")
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
