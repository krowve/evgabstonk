#!/usr/bin/env python3
import time
import sys
import random
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from playsound import playsound

EVGACARTURL = "https://www.evga.com/Products/shoppingcart.aspx"
GT210URL = "https://www.evga.com/products/ProductList.aspx?type=0&family=GeForce+200+Series+Family"
SOUNDURL = "https://www.myinstants.com/media/sounds/ill-take-your-entire-stock-jontron.mp3"
WAITTIME = 60
WAITINTERVAL = 10
QUIT = 0
HEADLESS = 1
PRODUCTS = []

## EVGA GeForce 210 DDR3
PRODUCTS.append("01G-P3-1313-KR")


while (1):
    options = Options()
    if (HEADLESS == 1):
        options.headless = True
    driver = webdriver.Firefox(options=options)
    driver.set_window_size(960, 480)
    driver.get(GT210URL)
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
        driver2.get(GT210URL)
        sys.exit()
    RANDTIME = random.randrange(WAITTIME - WAITINTERVAL, WAITTIME + WAITINTERVAL)
    driver.close()
    print("Waiting " + str(RANDTIME) + " seconds")
    time.sleep(RANDTIME)
