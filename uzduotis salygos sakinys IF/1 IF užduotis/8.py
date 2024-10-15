#8

a, b = 5, 10 
if a > b:
    DID, MAZ = a, b
elif b > a:
    DID, MAZ = b, a
else:
    print("Skaičiai yra lygūs.")
    DID, MAZ = None, None 

print("DID:", DID)
print("MAZ:", MAZ)