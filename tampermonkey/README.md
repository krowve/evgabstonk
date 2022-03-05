# Donating

Good luck!  If you want to donate or contribute to my efforts check
out the following options:

If you want to use my Associate Code: [VVEWEK3CAJ39C5D](https://www.evga.com/associates/default.aspx?associatecode=VVEWEK3CAJ39C5D).

If you want to send me some BTC: 3B5mmDDTLP6wGNGngMe82zT1YswrPtbtjv

If you want to send me some ETH: 0x8F947330b4d270d13F08A821f9173d69ebeA430E

If you want to send me some other form of crypto let me know and I'll
setup a wallet for that as well.


# Scripts

evgabstonkATC.user.js = Tries to cart from b stock page in preference order.

evgabstonkATC30only.user.js = Tries to cart from b stock page in
preference order.  30 series cards only.

evgabstonkATC20only.user.js = Tries to cart from b stock page in
preference order.  20 series cards only.

evgabstonkATC16only.user.js = Tries to cart from b stock page in
preference order.  16 series cards only.

evgabstonkATCkrowve.user.js = Tries to cart from b stock page in
preference order.  Krowve's preferred cards (FHR)

evgashoppingcarthelper.user.js = Advances past shopping cart.

evgaerrorpage.user.js = If the error page loads, waits 5 seconds and 
then tries to visit B stock page.  

evgacheckout2payment.user.js = Clicks address and shipping method.

evgapaywithPP.user.js = Selects PP as payment method.  Also handles
checkbox on place order screen.

evgapaywithCC.user.js = Selects CC as payment method.  Also handles
checkbox on place order screen.

## "Priming" a cart

1. Put any item in your cart

2. Navigate to checkout, make sure you pick UPS ground.  Enter in CC
info, click submit, but stop at place order page

3. Remove item from cart.

4. Your cart is now "primed" for 30 minutes.  If you cart you can go
straight to the place order page without visiting the checkout
shipping page.


evgacheckoutfetcher.user.js = Uses a fetch command to POST your CC
info when the checkout shipping page is loaded.  After POSTing the
place order page is loaded.  The fetch command is going to be specific
per user.  To get your fetch command do the following.

1. Put any item in your cart.

2. Navigate checkout, make sure you pick UPS ground, and go all the
way up to where you have entered your CC info but before you have
clicked submit.

3. Open up the developer tools and go to the network tab.  Make sure
recording is on and clear anything recorded so it is empty.

4. Click submit, you will land on the place order page.  Scroll all
the way to the top of the network tab and find the first 302 redirect.
Right click on that and click copy as fetch.

5. Paste that fetch command into the evgacheckoutfetcher.user.js
script where noted and save in tampermonkey.  If the fetch command is
prefixed with "await" then remove await when you past it into
tampermonkey.

6. Empty your cart.

7. Next time you cart something and visit the checkout shipping page
the tampermonkey script will fire and POST your CC info. It will then
open a new window to the place order page.  If the POST command was
succesful the place order page will load.

