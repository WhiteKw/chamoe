# -*-coding:utf-8-*-
import requests
from bs4 import BeautifulSoup
import urllib.request

import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding='utf-8')

# testURL = "https://naver.me/GLA7izLh"

# f = open("test.txt", "w+")
# f.write(testURL)
# f.close()

#f = open("test.txt", "r")
#testString = f.readline().strip().strip("\"")
# f.close()

# print(testString)


songTitle = sys.argv[1]

url = "https://music.bugs.co.kr/search/integrated?q=" + songTitle
options = webdriver.ChromeOptions()
options.add_argument("headless")
options.add_argument("disable-gpu")
options.add_argument("lang=ko_KR")

driver = webdriver.Chrome('chromedriver', options=options)
# 암묵적으로 웹 자원 로드를 위해 2초까지 기다려 준다.
driver.implicitly_wait(2)
driver.get(url)
driver.find_element(By.CLASS_NAME, "list.trackList").find_element(
    By.TAG_NAME, "tbody").find_element(By.CLASS_NAME, "trackInfo").click()
time.sleep(0.5)

try:
    # urllib.request.urlopen(driver.current_url)

    #response = requests.get(driver.current_url)

    # print(response)
    # print(response.status_code)
    # print(response.text)

    #html = response.text
    html = driver.page_source

    soup = BeautifulSoup(html, "html.parser")

    #imgSrc = soup.find('meta', {'property': 'og:image'}).get('content')
    lyricContainer = soup.find('div', class_='lyricsContainer')
    lyric = lyricContainer.find('xmp')

    print(lyric.getText().strip())

    quit()

    #lambda lyric : lyric
except IOError:
    print("URL 주소가 올바르지 않습니다.")
# except:
#    print("오류가 발생하였습니다. 다시 시도해주십시오.")
