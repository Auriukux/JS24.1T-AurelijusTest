# n = 7
# k = 50
# kvid = 7.143 ***turėtumėte gauti***

def calculate_vidutinį_knygų_skaičių(n, k):
    return round(k / n, 3)

n, k = 7, 50
kvid = calculate_vidutinį_knygų_skaičių(n, k)
print(f"Vienas skaitytojas vidutiniškai perskaitė {kvid} knygų.")
