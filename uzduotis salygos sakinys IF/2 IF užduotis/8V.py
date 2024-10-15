# 8V 

vidurkiai = list(map(float, input("Įveskite klasių vidurkius: ").split()))

max_vidurkis = max(vidurkiai)
print(f"Didžiausias vidurkis: {max_vidurkis}")

for vidurkis in vidurkiai:
    if vidurkis != max_vidurkis:
        skirtumas = max_vidurkis - vidurkis
        print(f"Kitų klasių vidurkiai skiriasi: {skirtumas:.1f}", end=", ")
print()  # Nauja eilutė po rezultatų išvedimo