# 9S 

def rearrange_number(num):
    num_str = str(num)
    if len(num_str) != 4:
        raise ValueError("Skaičius turi būti keturženklis")
    
    digits = sorted(num_str, reverse=True)
    even = ''.join(sorted([d for d in digits if int(d) % 2 == 0]))
    odd = ''.join(sorted([d for d in digits if int(d) % 2 != 0]))
    
    return even + odd

print(rearrange_number(7590))
print(rearrange_number(1230))