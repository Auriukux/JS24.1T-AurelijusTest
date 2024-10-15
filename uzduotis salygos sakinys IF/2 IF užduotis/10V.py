# 10V

a, b, c, d = map(int, input("Įveskite kartimių ilgius a, b, c, d: ").split())

if (a == c and b == d) or (a == d and b == c):
    print("Kurmiui žemės sklypo ribas pažymėti pavyks")
else:
    print("Kurmiui žemės sklypo ribų pažymėti nepavyks")