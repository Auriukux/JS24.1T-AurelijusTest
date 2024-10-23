# 3

def simpatine_eilute(n):
    suma = 0
    for i in range(1, n + 1):
        suma += int('7' * i)
    return suma

n = 3 
print(f"Eilutės suma, kai paskutinis narys turi {n} septynetų, yra {simpatine_eilute(n)}")