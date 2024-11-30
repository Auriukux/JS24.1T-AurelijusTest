#6S

def print_conversion(binary):
    decimal = binary_to_decimal(binary)
    print(f"{binary} -> {decimal}")

print_conversion('11101100')
print_conversion('01111001')
print_conversion('10100010')

def explain_conversion(binary_str):
    if len(binary_str) != 8:
        return "Netinkamas bitų skaičius"
    
    sign_bit = binary_str[0]
    value_bits = binary_str[1:]
    is_negative = sign_bit == '1'
    
    print(f"Ženklo bitas: {sign_bit}")
    if is_negative:
        print("Skaičius saugomas papildomame kode.")
        print("Bitų inversija (išskyrus ženklą):")
        inverted = ''.join('0' if bit == '1' else '1' for bit in value_bits) 
        print(f"  {value_bits} -> {inverted}")
        decimal = int(inverted, 2) + 1
        print(f"Papildomo kodo konvertavimas: {inverted} + 1 = {decimal}")
        print(f"Rezultatas: -{decimal}")
    else:
        print("Skaičius saugomas tiesioginiame kode.")
        decimal = binary_str 
        print(f"Rezultatas: {decimal}")

explain_conversion('11101100')