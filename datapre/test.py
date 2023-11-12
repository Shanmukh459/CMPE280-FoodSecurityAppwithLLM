import requests
import csv

url = "https://sensor-website-data-upload.azurewebsites.net/api/SensorDataGet?code=_7jdX01l9EG-CdEIX80kyi-QkptE9LZmnb2RAL9ugly6AzFuQpPF8w"

response = requests.get(url)

if response.status_code == 200:
    try:
        data = response.json()
        print(data)
        
        # Convert the response data to CSV and write to file
        with open("data.csv", "w", newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(data[0].keys())
            for row in data:
                writer.writerow(row.values())
            
        print("Data saved to data.csv")
        
    except ValueError as e:
        print("Error decoding JSON:", e)
        print("Response text:", response.text)
else:
    print("Error fetching data. Status code:", response.status_code)
