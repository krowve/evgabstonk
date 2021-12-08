# evgabstonk

CAUTION, USING THIS INCORRECTLY CAN VERY EASILY GET YOU A TEMPORARY OR PERMANENT BAN FROM EVGA!!!

Pre-Requisities: Python and a working webdriver setup.  This was
developed under Ubuntu 20.04

Recommended setup steps


1. Load a VM running Ubuntu.  (make sure you enable and test sound support)

2. sudo apt install firefoxdriver firefox-geckodriver python3-pip

3. pip3 install playsound

4. Start a VPN service (I use surfshark)

5. Run script:  ./evgabstonk.py

The script will refresh the b stock web page with clean cookies and if
the script finds a card from the search list it should play a sound file via
a URL and display the version of the web page and exit.

To modify the default time it waits between refreshes, modify the
WAITTIME variable.  You can also have a random interval.  Edit the
WAITINTERVAL value to set the interval value.

Should be easy to modify items by looking at the code. 

By default runs in headless mode, this can be toggled by changing the
HEADLESS variable in the code.

The idea is you run this script from a VM.  If it triggers quickly
jump to a browser window on your host or different computer where you
are already logged into EVGA and try to cart and checkout.
