#!/usr/bin/env python3
import time
import sys
import random
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from playsound import playsound

EVGACARTURL = "https://www.evga.com/Products/shoppingcart.aspx"
GT710URL = "https://www.evga.com/products/productlist.aspx?type=0&family=GeForce+700+Series+Family&chipset=GT+710"
SOUNDURL = "https://www.myinstants.com/media/sounds/ill-take-your-entire-stock-jontron.mp3"
WAITTIME = 30
WAITINTERVAL = 3
QUIT = 0
HEADLESS = 1
PRODUCTS = []

## GT710 1GB
PRODUCTS.append("01G-P3-2711-KR")

## GT710 2GB Single Slot, Low Profile
PRODUCTS.append("01G-P3-2713-KR")

## GT710 2GB Single Slot, Dual DVI
PRODUCTS.append("01G-P3-2717-KR")



while (1):
    options = Options()
    if (HEADLESS == 1):
        options.headless = True
    driver = webdriver.Firefox(options=options)
    driver.set_window_size(960, 480)
    driver.get(GT710URL)
    for PRODUCT in PRODUCTS:
        try:
            title=driver.find_element_by_css_selector("[title*='Add " + PRODUCT + " to cart']")
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
        driver2.get(GT710URL)
        sys.exit()
    RANDTIME = random.randrange(WAITTIME - WAITINTERVAL, WAITTIME + WAITINTERVAL)
    driver.close()
    print("Waiting " + str(RANDTIME) + " seconds")
    time.sleep(RANDTIME)
