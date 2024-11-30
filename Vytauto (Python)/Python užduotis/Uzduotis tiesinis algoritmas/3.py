# x1 = 65
# y1 = 850
# x2 = 75
# y2 = 700

def calculate_car(x1, y1, x2, y2):
    pirmą_kilometrų = x1 * 1000 + y1
    antrą_kilometrų = x2 * 1000 + y2

    išviso_kilometrų = pirmą_kilometrų + antrą_kilometrų

    kilometrų = išviso_kilometrų // 1000
    metrų = išviso_kilometrų % 1000

    return kilometrų, metrų

x1, y1, x2, y2 = 65, 850, 75, 700
km, m = calculate_car(x1, y1, x2, y2)

print(f"Viso automobilis nuvažiavo {km} km. ir {m} m. kelio.")
