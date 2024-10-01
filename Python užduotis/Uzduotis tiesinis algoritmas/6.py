# x1 = 5
# y1 = 13
# x2 = 4
# y2 = 20

def calculate_walk(x1, y1, x2, y2):
    lithuania = x1 * 24 + y1
    latvia = x2 * 24 + y2

    išviso_šalis = lithuania + latvia

    paru = išviso_šalis // 24
    valandu = išviso_šalis % 24

    return paru, valandu

x1, y1, x2, y2 = 5, 13, 4, 20
p, val = calculate_walk(x1, y1, x2, y2)

print(f"Turistas keliavo {p} parų ir {val} valandas.")