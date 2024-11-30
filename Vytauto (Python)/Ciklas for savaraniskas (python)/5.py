# 5

def laimingi_bilietai(m, n):
    laimingu_kiekis = 0
    for bilieto_numeris in range(m, n + 1):
        if bilieto_numeris // 1000 == bilieto_numeris % 1000:
            laimingu_kiekis += 1
    return laimingu_kiekis

m = 170849
n = 189965
print(f"Laimingus bilietus įsigijo {laimingi_bilietai(m, n)} keleivių.")