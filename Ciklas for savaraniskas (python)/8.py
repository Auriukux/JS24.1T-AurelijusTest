# 8

def braskes(b, d, n):
    total = 0
    for i in range(n):
        total += b + i * d
    return total

b, d, n = 4, 5, 3
print(f"Per {n} dienas prinoko {braskes(b, d, n)} braškės.")