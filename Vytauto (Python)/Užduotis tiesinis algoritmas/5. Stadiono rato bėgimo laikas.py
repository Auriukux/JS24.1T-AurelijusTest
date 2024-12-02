
# 5. Petriukas puse stadiono rato bėgdamas įveikia per x1 minučių ir y1 sekundžių, o antrą pusę per x2 minučių ir y2 sekundžių. 
# Parašykite programą, kuri apskaičiuotų, per kiek minučių ir sekundžių Petriukas įveikė visą stadiono ratą?
# Pasitikrinkite. Kai x1 1, y1 = 45, o, x2 = 2, y2 = 20, turi būti spausdinama:
# Petriukas užtruko 4min. ir 5sek.


# Trumpiausias
def begimo_laikas(x1, y1, x2, y2):
    isviso_sekundziu = x1 * 60 + y1 + x2 * 60 + y2
    minutes, sekundes = divmod(isviso_sekundziu, 60)
    return minutes, sekundes

x1, y1, x2, y2 = 1, 45, 2, 20
min, sek = begimo_laikas(x1, y1, x2, y2)

print(f"Petriukas užtruko {min}min. ir {sek}sek.")


# Aiškus variantas
def skaičiuoti_bėgimo_laiką(x1, y1, x2, y2):
    pirmosios_pusės = x1 * 60 + y1  # Skaičiuojame pirmosios pusės laiką sekundėmis
    antrosios_pusės = x2 * 60 + y2  # Skaičiuojame antrosios pusės laiką sekundėmis
    
    # Randame bendrą laiką sekundėmis
    bendras_laikas_sekundėmis = pirmosios_pusės + antrosios_pusės
    
    # Konvertuojame bendrą laiką į minutes ir sekundes
    minutės = bendras_laikas_sekundėmis // 60
    sekundės = bendras_laikas_sekundėmis % 60
    return minutės, sekundės

# Duomenys
x1, y1 = 1, 45  # Pirmosios pusės laikas
x2, y2 = 2, 20  # Antrosios pusės laikas

# Apskaičiavimas
minutes, sekundes = skaičiuoti_bėgimo_laiką(x1, y1, x2, y2)

# Rezultato išvedimas
print(f"Užtruko {minutes} min. ir {sekundes} sek.")