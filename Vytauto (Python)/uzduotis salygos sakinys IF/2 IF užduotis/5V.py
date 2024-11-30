# 5V

m = int(input("Įveskite žmogaus gimimo metus: "))

if (m % 4 == 0 and m % 100 != 0) or (m % 400 == 0):
    print("Žmogus gimė keliamaisiais metais.")
else:
    print("Žmogus gimė nekeliamaisiais metais.")