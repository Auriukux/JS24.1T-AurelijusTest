
# 1. Sodininkas per pirmas 10 minučių sukasa x1 metrų ir y decimetrų lysvės. Per kitas 10 minučių jis sukasa x2 metrų ir y2 decimetrų lysvės. 
# Parašykite programą, kuri apskaičiuotų, kiek metrų ir decimetrų lysvės sodininkas sukasa per 20 min.
# Pasitikrinkite. Kai x1 = 5, y1 = 5, x2 = 4, y2 = 8, turi būti spausdinama:
# Sodininkas sukasė 10m. ir 3dm. lysvės


# Trumpiausias
def kasimas(x1, y1, x2, y2):
    m, dm = (x1 + x2 + (y1 + y2) / 10), (y1 + y2) % 10
    return int(m), dm

x1, y1, x2, y2 = 5, 5, 4, 8
m, dm = kasimas(x1, y1, x2, y2)

print(f"Sodininkas sukasė {m}m. ir {dm}dm. lysvės.")


# Aiškus variantas
def skaičiuoti_kasimas(x1, y1, x2, y2):
    pirmas_kasimas_decimetrais = x1 * 10 + y1  # Pirmiausia, apskaičiuojame, kiek decimetrų buvo sukasta per pirmas 10 minučių
    antras_kasimas_decimetrais = x2 * 10 + y2  # Tada, kiek decimetrų buvo sukasta per kitas 10 minučių
    
    # Sumuojame visus decimetrus
    bendras_kasimas_decimetrais = pirmas_kasimas_decimetrais + antras_kasimas_decimetrais
    
    # Apskaičiuojame, kiek metrų ir decimetrų gauname
    metrai = bendras_kasimas_decimetrais // 10  # Kiekvienas 10 decimetrų sudaro 1 metrą
    decimetrai = bendras_kasimas_decimetrais % 10  # Liekana po padalijimo iš 10 - tai decimetrai
    return metrai, decimetrai

# Duomenys
x1, y1 = 5, 5  # 5 metrai ir 5 decimetrai
x2, y2 = 4, 8  # 4 metrai ir 8 decimetrai

# Apskaičiavimas
metrai, decimetrai = skaičiuoti_kasimas(x1, y1, x2, y2)

# Rezultato išvedimas
print(f"Sodininkas per 20 minučių sukasė {metrai} metrų ir {decimetrai} decimetrų.")