# x1 = 15
# y1 = 850
# x2 = 17
# y2 = 740

def calculate_krovinis(x1, y1, x2, y2):
    pirmą_reisą = x1 * 1000 + y1
    antrą_reisą = x2 * 1000 + y2

    išviso_reisą = pirmą_reisą + antrą_reisą

    tonų = išviso_reisą // 1000
    kilogramų = išviso_reisą % 1000

    return tonų, kilogramų

x1, y1, x2, y2 = 15, 850, 17, 740
t, kg = calculate_krovinis(x1, y1, x2, y2)

print(f"Viso krovinio svoris {t}t. ir {kg}kg.")