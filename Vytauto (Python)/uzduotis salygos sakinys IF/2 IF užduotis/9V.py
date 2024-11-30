# 9V 

metai = int(input("Įveskite metus: "))

if (metai - 1896) % 4 == 0 and metai >= 1896:
    numeris = (metai - 1896) // 4 + 1
    print(f"Metai {metai} yra olimpiniai, tai {numeris}-osios žaidynės.")
else:
    print(f"Metai {metai} nėra olimpiniai.")