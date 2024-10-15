# 7S

def classify_triangle(a, b, c):
    if a + b < c or b + c < a or c + a < b:
        return "Trikampio sudaryti negalima"
    
    if a == b == c:
        return "Trikampis yra lygiakraštis"
    elif a == b or b == c or a == c:
        return "Trikampis yra lygiašonis"
    elif a**2 + b**2 == c**2 or b**2 + c**2 == a**2 or c**2 + a**2 == b**2:
        return "Trikampis yra statusis"
    else:
        return "Trikampis yra ivairiakrastis"

print(classify_triangle(4, 4, 4))
print(classify_triangle(3, 4, 5))
print(classify_triangle(6, 6, 7))
print(classify_triangle(4, 5, 6))
print(classify_triangle(1, 4, 7)) 