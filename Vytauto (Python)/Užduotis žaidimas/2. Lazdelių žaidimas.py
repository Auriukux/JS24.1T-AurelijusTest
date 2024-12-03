import random

def pradeti_zaidima():
    zaideju_vardai = ["Algis", "Jonas"]
    random.shuffle(zaideju_vardai)
    zaidejas = 0
    laimetojas = None
    pradeda_zaidimas = zaideju_vardai[zaidejas]
    lazdeliu_skaicius = 10

    with open("zaidimo_registravimo_failas.txt", "a", encoding='utf-8') as file:
        file.write(f"{zaideju_vardai}\n")
        file.write(f"Lazdelės: {lazdeliu_skaicius}\n")
        file.write(f"Pradeda: {pradeda_zaidimas}\n")

    print(f"Žaidimo pradžioje yra {lazdeliu_skaicius} lazdelės.")
    print(f"Pradeda {pradeda_zaidimas}")

    while lazdeliu_skaicius > 0:
        if zaidejas == 0:
            print(f"{pradeda_zaidimas} paima 3 lazeles. Liko {lazdeliu_skaicius - 3}")
            lazdeliu_skaicius -= 3
            zaidejas = 1
        else:
            print(f"{zaideju_vardai[zaidejas]} paima 3 lazeles. Liko {lazdeliu_skaicius - 3}")
            lazdeliu_skaicius -= 3
            zaidejas = 0

        with open("zaidimo_registravimo_failas.txt", "a", encoding='utf-8') as file:
            file.write(f"{zaideju_vardai[zaidejas]} paima 3 lazeles. Liko {lazdeliu_skaicius}\n")

    laimetojas = zaideju_vardai[zaidejas]
    print(f"Žaidimą laimėjo {laimetojas}.")
    print("Ar žaisite dar? (Ne)")
    zaisti_dar = input().strip().lower()

    if zaisti_dar == "ne":
        print("Žaidimas baigtas.")
    else:
        pradeti_zaidima()

if __name__ == "__main__":
    pradeti_zaidima()