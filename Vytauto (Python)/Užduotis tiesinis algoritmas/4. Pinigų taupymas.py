
# 4. Petriukas pirmą savaitę į taupyklę įdėjo x1 eurų ir y1 centų, o per antrą savaitę – x2 eurų ir y2 centų. 
# Parašykite programą, kuri apskaičiuotų, kiek eurų ir centų Petriukas sutaupė per dvi savaites?
# Pasitikrinkite. Kai x1 = 15, y1 = 85, o, x2 = 7, y2 = 70, turi būti spausdinama:
# Petriukas sutaupė 23eur. ir 55cnt.


# Trumpiausias
def taupymas(x1, y1, x2, y2):
    euru = x1 + x2 + (y1 + y2) // 100
    centu = (y1 + y2) % 100
    return euru, centu

x1, y1, x2, y2 = 15, 85, 7, 70
euru, centu = taupymas(x1, y1, x2, y2)

print(f"Petrukas sutaupė {euru}eurų ir {centu}centų.")


# Aiškus variantas
def skaičiuoti_pinigų_taupymą(x1, y1, x2, y2):
    pirma_savaite_centais = x1 * 100 + y1  # Pirmosios savaitės suma centais
    antra_savaite_centais = x2 * 100 + y2  # Antrosios savaitės suma centais
    
    # Bendras sutaupytas centų kiekis
    bendras_centų_kiekis = pirma_savaite_centais + antra_savaite_centais
    
    # Apskaičiuojame eurus ir centus
    eurai = bendras_centų_kiekis // 100
    centai = bendras_centų_kiekis % 100
    return eurai, centai

# Duomenys
x1, y1, x2, y2 = 15, 85, 7, 70

# Apskaičiavimas
eurai, centai = skaičiuoti_pinigų_taupymą(x1, y1, x2, y2)

# Rezultato išvedimas
print(f"Sutaupė {eurai} eurų ir {centai} centų.")