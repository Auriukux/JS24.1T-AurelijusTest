# k = 5
# kk = 1.5
# e = 7
# ek = 0.45
# a = 12
# ak = 0.09
# z = 11.73 ***turėtumėte gauti***

def calculate_išviso_zuviu_svori(k, kk, e, ek, a, ak):
    bendras_krapių_svoris = k * kk
    bendras_ežerių_svoris = e * ek
    bendras_aukšlių_svoris = a * ak
    bendras_svoris = bendras_krapių_svoris + bendras_ežerių_svoris + bendras_aukšlių_svoris
    return bendras_svoris

k, kk, e, ek, a, ak = 5, 1.5, 7, 0.45, 12, 0.09
z = calculate_išviso_zuviu_svori(k, kk, e, ek, a, ak)

print(f"Žvejys iš viso pagavo {z} kg žuvies.")