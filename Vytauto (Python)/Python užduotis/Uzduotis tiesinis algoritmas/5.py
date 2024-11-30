# x1 = 1
# y1 = 45
# x2 = 2
# y2 = 20

def calculate_stadioną(x1, y1, x2, y2):
    pusę = x1 * 60 + y1
    pusę_antrą = x2 * 60 + y2

    išviso = pusę + pusę_antrą

    minute = išviso // 60
    sekunde = išviso % 60

    return minute, sekunde

x1, y1, x2, y2 = 1, 45, 2, 20
min, sek = calculate_stadioną(x1, y1, x2, y2)

print(f"Petriukas užtruko {min}min. ir {sek}sek.")
    