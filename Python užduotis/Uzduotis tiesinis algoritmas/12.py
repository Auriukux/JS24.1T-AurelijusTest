# x = 120
# y = 10
# m = 23

def calculate_kaina_uz_mokiniai(x, y, m):
    kaina = x + y * m
    pinigai_uz_mokiniai = kaina * 100 // m
    euru = pinigai_uz_mokiniai // 100
    centu = pinigai_uz_mokiniai % 100

    return kaina, euru, centu

x, y, m = 120, 10, 23
kaina, eur, cnt = calculate_kaina_uz_mokiniai(x, y, m)


print(f"Viso kelionė kainuos {kaina}eur. Kadangi važiuoja {m} mokinai, tai vienam mokiniui kainuos apytiksliai {eur}eur. {cnt}ct.")