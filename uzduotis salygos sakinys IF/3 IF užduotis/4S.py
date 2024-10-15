# 4S

from_scale = input("Įveskite temperatūros skalę, iš kurios konvertuojama (C, K, F): ").upper()
from_temp = float(input("Įveskite temperatūrą: "))
to_scale = input("Įveskite temperatūros skalę, į kurią norite konvertuoti (C, K, F): ").upper()

def convert_temperature(from_scale, from_temp, to_scale):
    if from_scale == to_scale:
        return from_temp

    if from_scale == 'C':
        if to_scale == 'K':
            return from_temp + 273.15
        elif to_scale == 'F':
            return (from_temp * 9/5) + 32
    elif from_scale == 'K':
        if to_scale == 'C':
            return from_temp - 273.15
        elif to_scale == 'F':
            return (from_temp - 273.15 + 32) * 9/5
    elif from_scale == 'F':
        if to_scale == 'C':
            return (from_temp - 32) * 5/9
        elif to_scale == 'K':
            return (from_temp - 32) * 5/9 + 273.15

if from_scale not in ['C', 'K', 'F']:
    print("Netinkama temperatūros skalė")
else:
    result = convert_temperature(from_scale, from_temp, to_scale)
    print(f"{from_temp} {from_scale} yra lygu {result:.2f} {to_scale}")