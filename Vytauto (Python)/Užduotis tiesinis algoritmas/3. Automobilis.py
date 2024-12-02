
# 3. Automobilis per pirmą valandą nuvažiavo x1 kilometrų ir y1 metrų kelio, o per antrą valandą – x2 kilometrų ir y2 metrų. 
# Parašykite programą, kuri apskaičiuotų, kokį atstumą automobilis nuvažiavo per 2 valandas?
# Pasitikrinkite. Kai x1 = 65, y1 = 850, x2 = 75, y2 = 700, turi būti spausdinama:
# Viso automobilis nuvažiavo 141km. ir 550m. kelio


# Trumpiausias
def automobilis(x1, y1, x2, y2):
    viso_km = x1 + x2 + (y1 + y2) / 1000
    return int(viso_km), (y1 + y2) % 1000

x1, y1, x2, y2 = 65, 850, 75, 700
km, m = automobilis(x1, y1, x2, y2)

print(f"Viso automobilis nuvažiavo {km}km. ir {m}m. kelio")


# Aiškus variantas
def skaičiuoti_automobilis(x1, y1, x2, y2):
    bendras_atstumas_metrais = (x1 * 1000 + y1) + (x2 * 1000 + y2)  # Apskaičiuojame bendrą nuvažuotą atstumą metrais
    
    # Konvertuojame atgal į kilometrus ir metrus
    bendri_kilometrai = bendras_atstumas_metrais // 1000  # Gauti sveikąją dalį
    likę_metrai = bendras_atstumas_metrais % 1000  # Gauti likutį po dalybos iš 1000
    return bendri_kilometrai, likę_metrai

# Duomenys
x1, y1 = 65, 850  # 65 kilometrų ir 850 metrų
x2, y2 = 75, 700  # 75 kilometrų ir 700 metrų

# Apskaičiavimas
viso_kilometrai, viso_metrai = skaičiuoti_automobilis(x1, y1, x2, y2)

# Rezultato išvedimas
print(f"Automobilis per dvi valandas nuvažiavo {viso_kilometrai} kilometrų ir {viso_metrai} metrų.")