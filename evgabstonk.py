#!/usr/bin/env python3
import time
import sys
import random
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from playsound import playsound

EVGACARTURL = "https://www.evga.com/Products/shoppingcart.aspx"
BSTONKURL = "https://www.evga.com/products/productlist.aspx?type=8"
SOUNDURL = "https://www.myinstants.com/media/sounds/ill-take-your-entire-stock-jontron.mp3"
WAITTIME = 30
QUIT = 0
HEADLESS = 1
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
## 3090 FTW3 Gaming
PRODUCTS.append("24G-P5-3985-RX")
## 3090 FTW3 Ultra Gaming
PRODUCTS.append("24G-P5-3987-RX")

## 3090 FTW3 Ultra Hybrid Gaming
## PRODUCTS.append("24G-P5-3988-RX")

## EVGA Z20 RGB Optical Mechanical (Clicky Switch)
#PRODUCTS.append("812-W1-20US-RX")


while (1):
    options = Options()
    if (HEADLESS == 1):
        options.headless = True
    driver = webdriver.Firefox(options=options)
    driver.set_window_size(960, 480)
    driver.get(BSTONKURL)
    for PRODUCT in PRODUCTS:
        try:
            title=driver.find_element_by_css_selector("[title*='" + PRODUCT + "']")
            if (title):
                print(PRODUCT + " found")
                playsound(SOUNDURL)
                QUIT = 1
                sys.exit()
#                title.click()
        except SystemExit:
            print("sys.exit() worked as expected")
        except:
            print(PRODUCT + " not Found")
            pass
    if (QUIT == 1):
        driver2 = webdriver.Firefox()
        driver2.get(BSTONKURL)
        sys.exit()
    driver.close()
    print("Waiting " + str(WAITTIME) + " seconds")
    time.sleep(WAITTIME)

