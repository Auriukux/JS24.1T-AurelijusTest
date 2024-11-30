# 2S

import math

x0, y0 = map(float, input("Įveskite taikinio centro koordinates x0 ir y0: ").split())
x, y = map(float, input("Įveskite pataikymo taško koordinates x ir y: ").split())

distance = math.sqrt((x - x0)**2 + (y - y0)**2)

if distance <= 5:
    print("Šaulys gaus 10 taškų.")
elif 5 < distance <= 10:
    print("Šaulys gaus 5 taškus.")
else:
    print("Šaulys gaus 0 taškų.")