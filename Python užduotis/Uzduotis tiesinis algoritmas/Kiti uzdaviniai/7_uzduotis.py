# a = 6.5
# b = 8.5
# c = 6.5
# aa = 0.5
# bb = 1
# cc = 0.5
# n = 5
# s = 10.00 ***turėtumėte gauti***

def calculate_medaus_kainą(a, b, c, aa, bb, cc, n):
    liepų_kaina = a * aa
    grikių_kaina = b * bb
    rapsų_kaina = c * cc
    kaina_be_nuolaidos = liepų_kaina + grikių_kaina + rapsų_kaina
    bendra_kaina = kaina_be_nuolaidos - n
    return max(bendra_kaina, 0)

a, b, c, aa, bb, cc, n = 6.5, 8.5, 6.5, 0.5, 1, 0.5, 5
s = calculate_medaus_kainą(a, b, c, aa, bb, cc, n)

print(f"Regina sumokės už medų {s} eurų.")