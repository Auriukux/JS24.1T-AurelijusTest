# 1S

from datetime import datetime

def parse_time(time_str):
    try:
        h, m = map(int, time_str.split(':')) 
        if h < 0 or h > 23 or m < 0 or m > 59:
            raise ValueError("Klaidingi duomenys")
        return datetime.strptime(f"{h:02d}:{m:02d}", "%H:%M")
    except:
        print("Klaidingi duomenys.")
        return None

a = float(input("Įveskite atstumą tarp matuoklių (km): "))
start_time = input("Įveskite pirmo matuoklio užfiksuotą laiką (HH:MM): ")
end_time = input("Įveskite antro matuoklio užfiksuotą laiką (HH:MM): ")
v = float(input("Įveskite leistiną greitį (km/h): "))

start = parse_time(start_time)
end = parse_time(end_time)
if start is None or end is None:
    print("Klaidingi duomenys.")
else:
    
    time_diff = end - start  
    time_diff_in_hours = time_diff.total_seconds() / 3600 
    speed = a / time_diff_in_hours
    print(f"Apskaičiuotas greitis: {speed:.2f} km/h")
    
    if speed > v:
        if speed - v <= 10:
            print("Greitis viršytas iki 10 km/h. Skiriamas įspėjimas.")
        else:
            print(f"Greitis viršytas {speed - v:.2f} km/h. Skiriama bauda.")
    else:
        print("Greitis nebuvo viršytas.")