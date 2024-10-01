# x1 = 5
# y1 = 5
# x2 = 4
# y2 = 8

def calculate_kasimas(x1, y1, x2, y2):
    decimetrų_pirmas = x1 * 10 + y1
    decimetrų_antras = x2 * 10 + y2

    išviso_decimetrų = decimetrų_pirmas + decimetrų_antras

    metrų = išviso_decimetrų // 10
    decimetrų = išviso_decimetrų % 10

    return metrų, decimetrų

x1, y1, x2, y2 = 5, 5, 4, 8
m, dm = calculate_kasimas(x1, y1, x2, y2)

print(f"Sodininkas per 20min. sukasa {m} metrų ir {dm} decimetrų lysvės.")
