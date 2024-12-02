# x1 = 5
# y1 = 850
# x2 = 7
# y2 = 700

def calculate_šilauogių(x1, y1, x2, y2):
    pirmą_dieną = x1 * 1000 + y1
    antrą_dieną = x2 * 1000 + y2

    išviso_dieną = pirmą_dieną + antrą_dieną

    kilogramų = išviso_dieną // 1000
    gramų = išviso_dieną % 1000

    return kilogramų, gramų

x1, y1, x2, y2 = 5, 850, 7, 700
kg, g = calculate_šilauogių(x1, y1, x2, y2)

print(f"Viso Petriukas pririnko {kg}kg. ir {g}g. šilauogių.")