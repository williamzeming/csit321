from pyowm import OWM
import pandas as pd
import requests
import json
import os
import sys

def main():
    df = pd.read_excel('data.xlsx', usecols='A,C,D')

    df2 = pd.read_excel('data.xlsx', usecols='A')

    owm = OWM('6bca166efab1076deec3c9f74d763655')
    mgr = owm.weather_manager()

    API_key = '6bca166efab1076deec3c9f74d763655'
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    if (os.path.isfile("weather.json")):
        # os.remove() function to remove the file
        os.remove("weather.json")
        # Printing the confirmation message of deletion
        print("File Deleted successfully")
    else:
        print("File does not exist")

    with open("weather.json", "a") as f:
        print("[", file=f)
        for index, row in df.iterrows():
            query_city = row[1]
            query_place = row[0]

            Final_url = base_url + "appid=" + API_key + "&q=" + query_city

            weather_data = requests.get(Final_url).json()
            weather_data2 = json.dumps(weather_data, sort_keys=True, indent=4, separators=(',', ': '))
            json1 = json.loads(weather_data2)
            print(json1["wind"])
            # print(weather_data2.main.feels_like)
            # print("\nCurrent Weather Data Of " + query_place + " in " + query_city +":\n",file=f)
            print(weather_data2, file=f)
            if index != len(df) - 1:
                print(",", file=f)
        print("]", file=f)

    print(f.closed)
    sys.exit(0)
main()