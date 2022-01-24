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
// 30 Series
// 3080 XC3 Black Gaming
// $800 - 92MH - 230w
PRODUCTS.push("10G-P5-3881-RX")
// 3080 XC3 Gaming
// $850 - 92MH - 230w
PRODUCTS.push("10G-P5-3883-RX")
// 3080 XC3 Ultra Gaming
// $870 - 92MH - 230w
PRODUCTS.push("10G-P5-3885-RX")
// 3080 FTW3 Gaming
// $870 - 92MH - 230w
PRODUCTS.push("10G-P5-3895-RX")
// 3080 FTW3 Ultra Gaming
// $910 - 92MH - 230w
PRODUCTS.push("10G-P5-3897-RX")
// 3060 Ti XC Gaming
// $470 - 59MH - 130w
PRODUCTS.push("08G-P5-3663-RX")
// 3060 Ti FTW3 Gaming
// $500 - 59MH - 130w
PRODUCTS.push("08G-P5-3665-RX")
// 3060 Ti FTW3 Ultra Gaming
// $530 - 59MH - 130w
PRODUCTS.push("08G-P5-3667-RX")
// 3070 XC3 Black Gaming
// $600 - 59MH - 130w
PRODUCTS.push("08G-P5-3751-RX")
// 3070 XC3 Ultra Gaming
// $650 - 59MH - 130w
PRODUCTS.push("08G-P5-3755-RX")
// 3070 FTW3 Ultra Gaming
// $710 - 59MH - 130w
PRODUCTS.push("08G-P5-3767-RX")
// 3080 XC3 Black Gaming
// $800 - 92MH - 230w
PRODUCTS.push("10G-P5-3881-RX")
// 3080 XC3 Gaming
// $850 - 92MH - 230w
PRODUCTS.push("10G-P5-3883-RX")
// 3080 XC3 Ultra Gaming
// $870 - 92MH - 230w
PRODUCTS.push("10G-P5-3885-RX")
// 3080 FTW3 Gaming
// $870 - 92MH - 230w
PRODUCTS.push("10G-P5-3895-RX")
// 3080 FTW3 Ultra Gaming
// $910 - 92MH - 230w
PRODUCTS.push("10G-P5-3897-RX")
// 3060 XC Black Gaming
// $390 - 34MH - 120w
PRODUCTS.push("12G-P5-3655-RX")
// 3060 XC Gaming
// $420 - 34MH - 120w
PRODUCTS.push("12G-P5-3657-RX")
// 3090 XC3 Gaming
// $1650 - 114MH - 320w
PRODUCTS.push("24G-P5-3973-RX")
// 3090 FTW3 Gaming
// $1830 - 114MH - 320w
PRODUCTS.push("24G-P5-3985-RX")
// 3090 XC3 Ultra Gaming
// $1730 - 114MH - 320w
PRODUCTS.push("24G-P5-3975-RX")
// 3090 FTW3 Ultra Gaming
// $1900 - 114MH - 320w
PRODUCTS.push("24G-P5-3987-RX")
// 3060Ti XC Gaming LHR
// $470 - 42MH - 130w
PRODUCTS.push("08G-P5-3663-RL")
// 3060Ti FTW Ultra Gaming LHR
// $530 - 42MH - 130w
PRODUCTS.push("08G-P5-3667-RL")
// 3070 Ti FTW3 Ultra Gaming
// $820 - 55MH - 190w
PRODUCTS.push("08G-P5-3797-RX")
// 3090 XC3 Gaming
// $1650 - 114MH - 320w
PRODUCTS.push("24G-P5-3973-RX")
// 3090 FTW3 Gaming
// $1830 - 114MH - 320w
PRODUCTS.push("24G-P5-3985-RX")
// 3090 XC3 Ultra Gaming
// $1730 - 114MH - 320w
PRODUCTS.push("24G-P5-3975-RX")
// 3090 FTW3 Ultra Gaming
// $1900 - 114MH - 320w
PRODUCTS.push("24G-P5-3987-RX")
// 3080 XC3 Black Gaming LHR
// $800 - 71MH - 240w
PRODUCTS.push("10G-P5-3881-RL")
// 3080 XC3 Ultra Gaming LHR
// $870 - 71MH - 240w
PRODUCTS.push("10G-P5-3885-RL")
// 3080 Ti XC3 Gaming
// $1190 - 85MH - 290w
PRODUCTS.push("12G-P5-3953-RX")
// 3080 Ti XC3 Ultra Gaming
// $1310 - 85MH - 290w
PRODUCTS.push("12G-P5-3955-RX")
// 3080 Ti XC3 Ultra Hybrid Gaming
// $1410 - 85MH - 290w
PRODUCTS.push("12G-P5-3958-RX")
// 3080 Ti FTW3 Ultra Gaming
// $1410 - 85MH - 290w
PRODUCTS.push("12G-P5-3967-RX")
// 3070 XC3 Ultra Gaming LHR
// $650 - 43MH - 130w
PRODUCTS.push("08G-P5-3755-RL")
// 3090 FTW3 Ultra Hybrid Gaming
// $1900 - 114MH - 320w
PRODUCTS.push("24G-P5-3988-RX")

// 20 Series
// 2060 KO Gaming
// $280 - 30MH - 120w
PRODUCTS.push("06G-P4-2066-RX")
// 2060 KO Ultra Gaming
// $290 - 30MH - 120w
PRODUCTS.push("06G-P4-2068-RX")
// 2060 Gaming
// $320 - 30MH - 120w
PRODUCTS.push("06G-P4-2060-RX")
// 2060 XC Black Gaming
// $320 - 30MH - 120w
PRODUCTS.push("06G-P4-2061-RX")
// 2060 SC Ultra Gaming
// $340 - 30MH - 120w
PRODUCTS.push("06G-P4-2067-RX")
// 2060 SC Black Gaming
// $340 - 30MH - 120w
PRODUCTS.push("06G-P4-1762-RX")
// 2060 SC Gaming
// $340 - 30MH - 120w
PRODUCTS.push("06G-P4-2062-RX")
// 2060 XC Gaming
// $350 - 30MH - 120w
PRODUCTS.push("06G-P4-2063-RX")
// 2060 SC Ultra Black Gaming
// $350 - 30MH - 120w
PRODUCTS.push("06G-P4-2065-RX")
// 2060 XC Ultra Gaming
// $350 - 30MH - 120w
PRODUCTS.push("06G-P4-2167-RX")
// 2060 XC Ultra Black Gaming
// $370 - 30MH - 120w
PRODUCTS.push("06G-P4-2163-RX")
// 2060 XC Ultra Gaming
// $370 - 30MH - 120w
PRODUCTS.push("06G-P4-2166-RX")
// 2060 Super SC Ultra Gaming
// $390 - 40MH - 120w
PRODUCTS.push("08G-P4-3067-RX")
// 2060 Super Black Gaming Dual HDB Fans
// $400 - 40MH - 120w
PRODUCTS.push("08G-P4-3061-RX")
// 2060 Super Black Gaming Dual Fans
// $400 - 40MH - 120w
PRODUCTS.push("08G-P4-3062-RX")
// 2060 Super SC Ultra Black Gaming
// $400 - 40MH - 120w
PRODUCTS.push("08G-P4-3065-RX")
// 2060 Super XC Black Gaming
// $410 - 40MH - 120w
PRODUCTS.push("08G-P4-3161-RX")
// 2060 Super XC Gaming
// $430 - 40MH - 120w
PRODUCTS.push("08G-P4-3162-RX")
// 2060 Super XC Ultra Gaming
// $440 - 40MH - 120w
PRODUCTS.push("08G-P4-3163-RX")
// 2070 Black Gaming
// $450 - 40MH - 140w
PRODUCTS.push("08G-P4-1071-RX")
// 2070 XC Gaming
// $450 - 40MH - 140w
PRODUCTS.push("08G-P4-2172-RX")
// 2070 XC Ultra Gaming
// $460 - 40MH - 140w
PRODUCTS.push("08G-P4-2173-RX")
// 2070 XC Black Edition
// $480 - 40MH - 140w
PRODUCTS.push("08G-P4-2071-RX")
// 2070 Super Black Gaming
// $480 - 41MH - 140w
PRODUCTS.push("08G-P4-3071-RX")
// 2070 XC Black Edition Gaming
// $490 - 40MH - 140w
PRODUCTS.push("08G-P4-1171-RX")
// 2070 FTW3 Gaming
// $490 - 40MH - 140w
PRODUCTS.push("08G-P4-2273-RX")
// 2070 FTW3 Ultra iCX2
// $490 - 40MH - 140w
PRODUCTS.push("08G-P4-2277-RX")
// 2070 Super KO Gaming
// $500 - 41MH - 140w
PRODUCTS.push("08G-P4-2072-RX")
// 2070 Super Gaming
// $500 - 41MH - 140w
PRODUCTS.push("08G-P4-3070-RX")
// 2070 Super XC Gaming
// $510 - 41MH - 140w
PRODUCTS.push("08G-P4-3172-RX")
// 2070 Gaming
// $530 - 40MH - 140w
PRODUCTS.push("08G-P4-2070-RX")
// 2070 Super XC Ultra Gaming
// $530 - 41MH - 140w
PRODUCTS.push("08G-P4-3173-RX")
// 2070 Super FTW3 Gaming
// $540 - 41MH - 140w
PRODUCTS.push("08G-P4-3273-RX")
// 2070 Super FTW3 Ultra Gaming
// $540 - 41MH - 140w
PRODUCTS.push("08G-P4-3277-RX")
// 2070 Super FTW3 Ultra+
// $540 - 41MH - 140w
PRODUCTS.push("08G-P4-3377-RX")
// 2070 XC Black Gaming
// $550 - 40MH - 140w
PRODUCTS.push("08G-P4-2171-RX")
// 2070 Super XC Ultra+
// $550 - 41MH - 140w
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
