# e = 47
# c = 98
# n = 5

def calculate_dalintis(e, c, n):
    isviso_monetos = e * 100 + c
    monetos_uz_augintinu = isviso_monetos // n
    euru = monetos_uz_augintinu // 100
    centu = monetos_uz_augintinu % 100
    
    return euru, centu

e, c, n = 47, 98, 5
eur, cnt = calculate_dalintis(e, c, n)

print(f"Mokiniai viso surinko {e}eur. {c}ct. Jei augintinių yra {n}, tai jiems teks po {eur} eur. {cnt} cnt.")
