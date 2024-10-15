# 5S

def binary_to_decimal(binary_str):
    if len(binary_str) != 8:
        raise ValueError("Turi būti 8 bitai")

    sign_bit = binary_str[0]
    is_negative = sign_bit == '1'

    if is_negative:
        inverted = ''.join('1' if bit == '0' else '0' for bit in binary_str[1:])
        value = int(inverted, 2) + 1
        return -value
    else:
        return int(binary_str, 2)

# Testavimas
print(binary_to_decimal('11101100')) 
print(binary_to_decimal('01111001'))
print(binary_to_decimal('10100010'))