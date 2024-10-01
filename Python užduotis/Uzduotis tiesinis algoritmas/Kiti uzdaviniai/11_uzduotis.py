# x = 2
# y = 3
# n = 10
# s = 77 ***turėtumėte gauti***

def calculate_bendrą_kainą(x, y, n):
    žuvų_skaičius = 2 * n + 2
    sraigių_skaičius = n + 1
    bendra_kaina = (x * žuvų_skaičius) + (y * sraigių_skaičius)
    return bendra_kaina, žuvų_skaičius, sraigių_skaičius

x, y, n = 2, 3, 10
bendras, žuvys, sraigės = calculate_bendrą_kainą(x, y, n)

print(f"Viso buvo nupirkta {sraigės} sraigių, {žuvys} žuvyčių. Už viską sumokėta {bendras}eur.")