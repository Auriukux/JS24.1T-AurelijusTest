# x1 = 3
# y1 = 8
# x2 = 4
# y2 = 7

def calculate_sraigė(x1, y1, x2, y2):
    pirmą_minutę = x1 * 10 + y1
    antrą_minutę = x2 * 10 + y2

    išviso_minutes = pirmą_minutę + antrą_minutę

    centimetrų = išviso_minutes // 10
    milimetrų = išviso_minutes % 10

    return centimetrų, milimetrų

x1, y1, x2, y2 = 3, 8, 4, 7
cm, mm = calculate_sraigė(x1, y1, x2, y2)

print(f"Sraigė nuošliaužė {cm} cm. ir {mm} mm. kelio.")