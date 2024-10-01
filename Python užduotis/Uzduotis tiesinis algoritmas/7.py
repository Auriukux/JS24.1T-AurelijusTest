# x1 = 3
# y1 = 5
# x2 = 4
# y2 = 6

def calculate_kalnas(x1, y1, x2, y2):
    kopė = x1 * 7 + y1
    leidosi = x2 * 7 + y2

    išviso_kalnas = kopė + leidosi

    savaites = išviso_kalnas // 7
    paras = išviso_kalnas % 7

    return savaites, paras

x1, y1, x2, y2 = 3, 5, 4, 6
sav, p = calculate_kalnas(x1, y1, x2, y2)

print(f"Alpinistas keliavo {sav} savaites ir {p} paras.")