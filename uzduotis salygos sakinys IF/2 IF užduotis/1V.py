# 1V
# Pirmas pavyzdys

v, m = 10, 50
p = 60
vv, vm = 12, 50

start_time = v * 60 + m
end_time = vv * 60 + vm
cooking_time = end_time - start_time

if cooking_time >= p:
    print("Mama pietus pagaminti spės.")
else:
    print("Mama pietų pagaminti nespės.")


# Antras pavyzdys
v, m = 10, 50
p = 30
vv, vm = 11, 10

start_time = v * 60 + m
end_time = vv * 60 + vm
cooking_time = end_time - start_time

if cooking_time >= p:
    print("Mama pietus pagaminti spės.")
else:
    print("Mama pietų pagaminti nespės.")