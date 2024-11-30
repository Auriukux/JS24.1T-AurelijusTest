# x1 = 15
# y1 = 85
# x2 = 7
# y2 = 70

def calculate_taupykle(x1, y1, x2, y2):
    pirmą_savaitę = x1 * 100 + y1
    antrą_savaitę = x2 * 100 + y2

    išviso_eurų = pirmą_savaitę + antrą_savaitę

    eurų = išviso_eurų // 100
    centų = išviso_eurų % 100

    return eurų, centų

x1, y1, x2, y2 = 15, 85, 7, 70
eur, cnt = calculate_taupykle(x1, y1, x2, y2)

print(f"Petriukas sutaupė {eur}eur ir {cnt}cnt.")

