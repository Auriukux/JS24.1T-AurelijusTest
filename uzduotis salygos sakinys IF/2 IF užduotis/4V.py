# 4V

klaidos = int(input("Įveskite mokinio padarytų klaidų kiekį: "))

if klaidos <= 2:
    print("Mokinio gautas įvertinimas: Gerai")
elif 3 <= klaidos <= 7:
    print("Mokinio gautas įvertinimas: Patenkinamai")
else:
    print("Mokinio gautas įvertinimas: Nepatenkinamai")