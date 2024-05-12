import undetected_chromedriver as uc
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time
import schedule
import shutil

def scrt():
    options = uc.ChromeOptions()
    profile="C:\\Users\\VishalPC\\AppData\\Local\\Google\\Chrome\\User Data\\Default"
    # options.add_argument(r"user-data-dir=C:\\Users\VishalPC\AppData\Local\Google\Chrome\User Data")
    options.add_argument=(f"user-data-dir={profile}")
    driver = uc.Chrome()
    # driver = uc.Chrome(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', chrome_options=options)


    driver.get("https://www.nseindia.com/get-quotes/equity?symbol=INFY#info-intradaychart")
    driver.maximize_window()
    time.sleep(5)
    # print('one')

    chart_btn= driver.find_element(By.XPATH,"//button[@title='Chart context menu']")
    chart_btn.click()
    time.sleep(2)
    # print('two')

    chart_opt_btn= driver.find_element(By.XPATH,"//li[normalize-space()='Download PNG image']")
    chart_opt_btn.click()
    time.sleep(20)
    # print('three')

schedule.every().day.at_time('08:30').do(scrt)

while 1:
    schedule.run_pending()
    time.sleep(1)
