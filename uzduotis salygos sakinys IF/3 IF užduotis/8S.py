# 8S

def compare_boxes(box1, box2):
    b1 = sorted([int(x) for x in box1])
    b2 = sorted([int(x) for x in box2])
    
    if b1 == b2:
        return "Abi vienodų matmenų"
    elif all(b1[i] < b2[i] for i in range(3)):
        return "Pirmoji telpa antrojoje"
    elif all(b2[i] < b1[i] for i in range(3)):
        return "Antroji telpa pirmojoje"
    else:
        return "Dėžučių vieną į kitą įdėti nepavyks"

print(compare_boxes("5 6 7", "7 5 6"))
print(compare_boxes("3 4 10", "8 2 3"))
print(compare_boxes("5 10 9", "11 12 10"))