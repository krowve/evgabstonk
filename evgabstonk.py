#!/usr/bin/env python3
import time
import sys
import random
from selenium import webdriver

SOUNDURL = "https://www.myinstants.com/media/sounds/ill-take-your-entire-stock-jontron.mp3"
WAITTIME = 30

PRODUCTS = []

## 3060 Ti XC Gaming
PRODUCTS.append("08G-P5-3663-RX")
## 3060 Ti FTW3 Gaming
PRODUCTS.append("08G-P5-3665-RX")
## 3060 Ti FTW3 Ultra Gaming
PRODUCTS.append("08G-P5-3667-RX")
## 3070 XC3 Black Gaming
PRODUCTS.append("08G-P5-3751-RX")
## 3070 XC3 Ultra Gaming
PRODUCTS.append("08G-P5-3755-RX")
## 3070 FTW3 Ultra Gaming
PRODUCTS.append("08G-P5-3767-RX")
## 3080 XC3 Black Gaming
PRODUCTS.append("10G-P5-3881-RX")
## 3080 XC3 Gaming
PRODUCTS.append("10G-P5-3883-RX")
## 3080 XC3 Ultra Gaming
PRODUCTS.append("10G-P5-3885-RX")
## 3080 FTW3 Gaming
PRODUCTS.append("10G-P5-3895-RX")
## 3080 FTW3 Ultra Gaming
PRODUCTS.append("10G-P5-3897-RX")
## EVGA GeForce 210 DDR3
#PRODUCTS.append("01G-P3-1313-RX")


while (1):
    driver = webdriver.Firefox()
    driver.get("https://www.evga.com/products/productlist.aspx?type=8")
    for PRODUCT in PRODUCTS:
        try:
            title=driver.find_element_by_css_selector("[title*='" + PRODUCT + "']")
            if (title):
                print(PRODUCT + " found")
                driver.get(SOUNDURL)
                time.wait(WAITTIME)
                sys.exit()
#                title.click()
        except:
            print(PRODUCT + " not Found")
            pass
    RANDTIME = random.randrange(WAITTIME - 5, WAITTIME + 5)
    driver.close()
    print("Waiting " + str(RANDTIME) + " seconds")
    time.sleep(RANDTIME)
