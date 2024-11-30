# 7V

a, b = map(float, input("Įveskite kainas a ir b: ").split())
n1, n2, n3 = map(int, input("Įveskite kiekius n1, n2, n3: ").split())
k = float(input("Įveskite bandelės kainą: "))

if k <= a:
    suma = n1 * k
elif a < k < b:
    suma = n2 * k
else:
    suma = n3 * k

print(f"Už bandeles bus sumokėta: {suma:.2f} eur.")