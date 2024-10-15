# 2V

d = int(input("Įveskite dėžių skaičių: "))
k = int(input("Įveskite knygų skaičių: "))
pon = int(input("Įveskite, kelios knygos telpa į dėžę: "))

if k <= d * pon:
    print("Knygos telpa į dėžes.")
else:
    netilpo = k - d * pon
    print(f"Knygos netelpa į dėžes. Į dėžes netilpo {netilpo} knygos/-a.")