# n1 = 3
# n2 = 8
# n5 = 6
# n10 = 10
# a = 1.49 ***turėtumėte gauti***

def calculate_taupyklės_sumą(n1, n2, n5, n10):
    bendra_suma_centais = n1 + n2 * 2 + n5 * 5 + n10 * 10
    eurai = bendra_suma_centais // 100
    centai = bendra_suma_centais % 100
    return eurai, centai

n1, n2, n5, n10 = 3, 8, 6, 10
eurai, centai = calculate_taupyklės_sumą(n1, n2, n5, n10)

print(f"Sumą taupyklėje sudaro {eurai} eurai {centai} centai.")