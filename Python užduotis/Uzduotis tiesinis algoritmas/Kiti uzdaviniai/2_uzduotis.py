# ckgkaina = 0.7
# k = 50
# n = 3
# moketi = 150 ***turėtumėte gauti***

def calculate_cukraus_kaina(ckgkaina, k, n):
    maisu_kaina = ckgkaina * k
    isviso_kaina = maisu_kaina * n

    return isviso_kaina

ckgkaina, k, n = 0.7, 50, 3
moketi = calculate_cukraus_kaina(ckgkaina, k, n)

print(f"Įmonė sumokės {moketi} eur už cukrų.")