# evgabstonk

CAUTION, USING THIS INCORRECTLY CAN VERY EASILY GET YOU A TEMPORARY OR PERMANENT BAN FROM EVGA!!!

Pre-Requisities:  Python and a working webdriver setup.  This was developed under Ubuntu 20.04  

Recommended setup.

Load a VM.  (make sure you enable and test sound support)
Start a VPN service
Run script.

The script will refresh the b stock web page with clean cookies and if the script finds a FHR 3060ti or 3070 it should play a sound file via a URL.  Should be easy to add more items by looking at the code.  Also should be easy to change the default refresh interval by looking at the code.

The idea is you run this script from a VM.  If it triggers quickly jump to a browser window on your host or different computer where you are already logged into EVGA and try to cart.  
