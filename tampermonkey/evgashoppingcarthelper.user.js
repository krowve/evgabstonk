// ==UserScript==
// @name         evgashoppingcarthelper
// @namespace    http://tampermonkey.net/
// @version      2022011802
// @description  try to take over the world!
// @author       You
// @downloadURL  https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgashoppingcarthelper.user.js
// @updateURL    https://github.com/krowve/evgabstonk/raw/main/tampermonkey/evgashoppingcarthelper.user.js
// @match        https://www.evga.com/products/shoppingcart.aspx
// @match        https://www.evga.com/products/ShoppingCart.aspx
// @match        https://www.evga.com/Products/shoppingcart.aspx
// @match        https://www.evga.com/Products/ShoppingCart.aspx
// @icon         https://www.google.com/s2/favicons?domain=evga.com
// @grant        none
// ==/UserScript==

(function() {

        if (document.title == "EVGA - Checkout") {
            if (!(document.getElementsByClassName('message-important')[0].innerText == "Your Cart is Empty")) {
                console.log("Checkout")
                //document.getElementsByClassName('btn-checkout')[0].click()
                setTimeout(function(){ document.location = "https://secure.evga.com/Cart/Checkout_Shipping.aspx" }, 1000);
            }

        }

})();
