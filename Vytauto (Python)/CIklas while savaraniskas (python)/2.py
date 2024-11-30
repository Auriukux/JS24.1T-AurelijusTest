def star_representation(number):
    number_str = str(number)
    index = 0
    while index < len(number_str):
        stars = int(number_str[index]) * "*"
        print(stars)
        index += 1

def number_pattern(n):
    i = 1
    while i <= n:
        print(''.join(str(x) for x in range(1, i + 1)))
        i += 1
    while i > 1:
        i -= 1
        print(''.join(str(x) for x in range(1, i)))

number = input("Įveskite skaičių: ")
star_representation(number)
number_pattern(int(number[0]))