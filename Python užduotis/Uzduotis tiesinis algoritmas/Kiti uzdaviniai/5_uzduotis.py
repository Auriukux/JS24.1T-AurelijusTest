# k = 7.5
# m = 305.5
# n = 4
# kk = 1.65
# s = 9.45 ***turėtumėte gauti***

def calculate_kuro_kaina(k, m, n, kk):
    sunaudotas_kuras = k * m / 100
    bendra_kaina = sunaudotas_kuras * kk
    s = bendra_kaina / n
    return s

k, m, n, kk = 7.5, 305.5, 4, 1.65
s = calculate_kuro_kaina(k, m, n, kk)

print(f"Vienas žmogus kainuoja {s} eurų.")