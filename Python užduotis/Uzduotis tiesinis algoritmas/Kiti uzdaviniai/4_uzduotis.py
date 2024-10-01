# sp = 0.142
# n = 120
# ka = 200
# kp = 150
# p = 511200.0 ***turėtumėte gauti***

def calculate_popieriaus_tūris(sp, n, ka, kp):
    bendras_storis = sp * n
    tūris = bendras_storis * ka * kp
    return tūris

sp, n, ka, kp = 0.142, 120, 200, 150
p = calculate_popieriaus_tūris(sp, n, ka, kp)

print(f"Popieriaus tūris yra {p} kubiniai milimetrai.")