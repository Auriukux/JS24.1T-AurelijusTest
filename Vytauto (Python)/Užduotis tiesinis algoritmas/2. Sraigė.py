
# 2. Sraigė per pirmą minutę nušliaužė x1 centimetrų ir y1 milimetrų, o per antrą minutę – x2 centimetrų ir y2 milimetrų. 
# Parašykite programą, kuri apskaičiuotų, kokį atstumą sraigė nušliaužė per 2 minutes?
# Pasitikrinkite. Kai x1 = 3, y1 = 8, x2 = 4, y2 = 7, turi būti spausdinama:
# Sraigė nušliaužė 8cm. ir 5mm. kelio


# Trumpiausias
def sraige (x1, y1, x2, y2):
    cm, mm = (x1 + x2 + (y1 + y2) / 10), (y1 + y2) % 10
    return int(cm), mm

x1, y1, x2, y2 = 3, 8, 4, 7
cm, mm = sraige(x1, y1, x2, y2)

print(f"Sraigė nušliaužė {cm}cm. ir {mm}mm. kelio.")


# Aiškus variantas
def skaičiuoti_sraigė(x1, y1, x2, y2):
    # Apskaičiuojame, kiek nušliaužė sraigė per pirmą minutę
    pirma_minute = x1 * 10 + y1  # Konvertuojame centimetrus į milimetrus ir pridedame papildomus milimetrus
    antra_minute = x2 * 10 + y2  # Apskaičiuojame, kiek nušliaužė sraigė per antrą minutę
    
    # Sumuojame nušliaužtus atstumus
    bendras_atstumas_milimetrais = pirma_minute + antra_minute
    
    # Konvertuojame atgal į centimetrus ir milimetrus
    centimetrai = bendras_atstumas_milimetrais // 10
    milimetrai = bendras_atstumas_milimetrais % 10
    return centimetrai, milimetrai

# Duomenys
x1, y1 = 3, 8  # 3 centimetrai ir 8 milimetrai
x2, y2 = 4, 7  # 4 centimetrai ir 7 milimetrai

# Apskaičiavimas
centimetrai, milimetrai = skaičiuoti_sraigė(x1, y1, x2, y2)

# Rezultato išvedimas
print(f"Sraigė per 2 minutes nušliaužė {centimetrai} centimetrų ir {milimetrai} milimetrų.")