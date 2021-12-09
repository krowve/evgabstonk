#!/usr/bin/env python3
import time
import sys
import random
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from playsound import playsound

EVGACARTURL = "https://www.evga.com/Products/shoppingcart.aspx"
GT1030URL = "https://www.evga.com/products/productlist.aspx?type=0&family=GeForce+10+Series+Family&chipset=GT+1030"
SOUNDURL = "https://www.myinstants.com/media/sounds/ill-take-your-entire-stock-jontron.mp3"
WAITTIME = 60
WAITINTERVAL = 10
QUIT = 0
HEADLESS = 1
PRODUCTS = []

## GT1030 SC 2GB
PRODUCTS.append("02G-P4-6332-KR")

## GT1030 2GB SC 2GB Single Slot
PRODUCTS.append("02G-P4-6338-KR")

## GT1030 2GB SC 2GB Low Profile
PRODUCTS.append("02G-P4-6333-KR")

## GT1030 2GB SC 2GB Passive Low Profile
PRODUCTS.append("02G-P4-6232-KR")



while (1):
    options = Options()
    if (HEADLESS == 1):
        options.headless = True
    driver = webdriver.Firefox(options=options)
    driver.set_window_size(960, 480)
    driver.get(GT1030URL)
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
        driver2.get(GT1030URL)
        sys.exit()
    RANDTIME = random.randrange(WAITTIME - WAITINTERVAL, WAITTIME + WAITINTERVAL)
    driver.close()
    print("Waiting " + str(RANDTIME) + " seconds")
    time.sleep(RANDTIME)
