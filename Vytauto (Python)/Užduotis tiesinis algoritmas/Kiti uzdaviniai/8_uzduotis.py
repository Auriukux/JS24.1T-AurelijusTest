# p1 = 7
# p2 = 5
# p3 = 10
# p4 = 8
# p5 = 6
# v = 7.20 ***turėtumėte gauti***

def calculate_pažymių_vidurkį(p1, p2, p3, p4, p5):
    suma = p1 + p2 + p3 + p4 + p5
    vidurkis = suma / 5
    return round(vidurkis, 2)

p1, p2, p3, p4, p5 = 7, 5, 10, 8, 6
v = calculate_pažymių_vidurkį(p1, p2, p3, p4, p5)

print(f"Ričardas pažymių vidurkis yra {v}.")