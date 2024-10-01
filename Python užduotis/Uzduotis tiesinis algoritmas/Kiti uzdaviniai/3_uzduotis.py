# v = 1001
# n = 50
# vv = 0.1
# p = 200.002 ***turėtumėte gauti***

# Atsakymas 200.200 dienų. Bet, jei jūs klausėte dėl sveikojo skaičiaus, 200.200 yra teisingas atsakymas.

def apskaičiuoti_vandens_dienas(v, n, vv):
    kasdienis_sunaudojimas = n * vv
    dienos = v / kasdienis_sunaudojimas
    return dienos

v, n, vv = 1001, 50, 0.1
dienos = apskaičiuoti_vandens_dienas(v, n, vv)

print(f"Vandens užteks {dienos:.3f} dienų.")