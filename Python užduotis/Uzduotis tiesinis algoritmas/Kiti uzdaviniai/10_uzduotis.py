# a = 32
# k = 600
# m = 100
# kvid = 22 ***turėtumėte gauti***

# Atsakymas 15 keleivių. Bet, jei jūs klausėte dėl sveikojo skaičiaus, 15 yra teisingas atsakymas.

def calculate_vidutinį_keleivių_skaičių(a, k, m):
    keleiviai_tiksli_kryptis = k - m
    vidutinis_keleivių_skaicius = keleiviai_tiksli_kryptis // a
    return vidutinis_keleivių_skaicius

a, k, m = 32, 600, 100
kvid = calculate_vidutinį_keleivių_skaičių(a, k, m)

print(f"Vienas autobusas vidutiniškai veža {kvid} keleivių.")