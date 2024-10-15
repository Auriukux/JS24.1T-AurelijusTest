# 3V

import math

skystis = float(input("Įveskite skysčio kiekį: "))


while True:
    try:
        r, h = map(int, input("Įveskite indo spindulį ir aukštį: ").split())
        break
    except ValueError:
        print("Klaida: Prašome įvesti du skaičius, atskirtus tarpais.")

indo_turis = math.pi * (r * 0.01)**2 * h * 0.01
indo_turis = round(indo_turis, 2) 

print(f"Indo tūris: {indo_turis} litro.")

if skystis <= indo_turis:
    liko = indo_turis - skystis
    print(f"Skystis inde telpa.\nLaisvos vietos liko: {liko} litro.")
else:
    nesupilta = round(skystis - indo_turis, 2)
    print(f"Skystis netelpa.\nLiko nesupilta {nesupilta} litro.")