# 1

def kalti_vini(k, n):
    
    liko_neikalta = n
    smugio_numeris = 1

    while liko_neikalta > 0:
        liko_neikalta -= k
        if liko_neikalta > 0:
            print(f"{smugio_numeris} Tuk! Dar liko {liko_neikalta} cm")
        else:
            print(f"{smugio_numeris} Tuk! Vinis įkalta")
        smugio_numeris += 1

kalti_vini(2, 10)