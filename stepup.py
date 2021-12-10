#!/usr/bin/env python3
import time
import sys
import random
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from playsound import playsound

EVGACARTURL = "https://www.evga.com/Products/shoppingcart.aspx"
GT210URL = "https://www.evga.com/products/ProductList.aspx?type=0&family=GeForce+200+Series+Family"
GT710URL = "https://www.evga.com/products/productlist.aspx?type=0&family=GeForce+700+Series+Family&chipset=GT+710"
GT1030URL = "https://www.evga.com/products/productlist.aspx?type=0&family=GeForce+10+Series+Family&chipset=GT+1030"
SOUNDURL = "https://www.myinstants.com/media/sounds/ill-take-your-entire-stock-jontron.mp3"
WAITTIME = 60
WAITINTERVAL = 10
QUIT = 0
HEADLESS = 1
PRODUCTS = []



while (1):
    options = Options()
    if (HEADLESS == 1):
        options.headless = True
    print("Opening GT210 URL")        
    driver = webdriver.Firefox(options=options)
    driver.set_window_size(960, 480)
    driver.get(GT210URL)
    PRODUCTS = []
    ## EVGA GeForce 210 DDR3
    PRODUCTS.append("01G-P3-1313-KR")
    print("Checking for GT210")
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
        
    driver.close()
    options = Options()
    if (HEADLESS == 1):
        options.headless = True
    print("Opening GT710 URL")
    driver = webdriver.Firefox(options=options)
    driver.set_window_size(960, 480)
    driver.get(GT710URL)
    PRODUCTS = []
    ## GT710 1GB
    PRODUCTS.append("01G-P3-2711-KR")
    ## GT710 2GB Single Slot, Low Profile
    PRODUCTS.append("01G-P3-2713-KR")
    ## GT710 2GB Single Slot, Dual DVI
    PRODUCTS.append("01G-P3-2717-KR")
    ## EVGA GeForce 210 DDR3
    PRODUCTS.append("01G-P3-1313-KR")
    print("Checking for GT710")
    for PRODUCT in PRODUCTS:
        try:
            title=driver.find_element_by_css_selector("[title*='Add " + PRODUCT + " to cart']")
            if (title):
                print(PRODUCT + " found")
                playsound(SOUNDURL)
                QUIT = 1
                sys.exit()
        except SystemExit:
            print("sys.exit() worked as expected")
        except:
            print(PRODUCT + " not Found")
            pass
    if (QUIT == 1):
        driver2 = webdriver.Firefox()
        driver2.get(GT710URL)
        sys.exit()

    driver.close()    
    options = Options()
    if (HEADLESS == 1):
        options.headless = True
    print("Opening 1030 URL")
    driver = webdriver.Firefox(options=options)
    driver.set_window_size(960, 480)
    driver.get(GT1030URL)
    PRODUCTS = []
    ## GT1030 SC 2GB
    PRODUCTS.append("02G-P4-6332-KR")
    ## GT1030 2GB SC 2GB Single Slot
    PRODUCTS.append("02G-P4-6338-KR")
    ## GT1030 2GB SC 2GB Low Profile
    PRODUCTS.append("02G-P4-6333-KR")
    ## GT1030 2GB SC 2GB Passive Low Profile
    PRODUCTS.append("02G-P4-6232-KR")
    print("Checking for GT1030")    
    for PRODUCT in PRODUCTS:
        try:
            title=driver.find_element_by_css_selector("[title*='Add " + PRODUCT + " to cart']")
            if (title):
                print(PRODUCT + " found")
                playsound(SOUNDURL)
                QUIT = 1
                sys.exit()
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
