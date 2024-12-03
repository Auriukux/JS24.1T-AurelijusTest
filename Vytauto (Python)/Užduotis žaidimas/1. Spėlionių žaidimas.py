import random

def generuoti_atsitiktini_skaiciu(n):
    return random.randint(1, n)

def zaisti_zaidima():
    n = 100  
    spejimams_likusia = 75 
    tikslus_skaicius = generuoti_atsitiktini_skaiciu(n)
    atspeti_skaiciai = set()

    print("Sveiki atvykę į skaičiaus spėnimo žaidimą!")
    print(f"Spėkite skaičių nuo 1 iki {n}.")
    
    while spejimams_likusia > 0:
        print(f"Liko spėnų: {spejimams_likusia}")
        spejimas = input("Įveskite savo spėjimą: ")
        
        if spejimas.isdigit():
            spejimas = int(spejimas)
            atspeti_skaiciai.add(spejimas)
            
            if spejimas < tikslus_skaicius:
                print("Sugeneruotas skaičius yra didesnis.")
            elif spejimas > tikslus_skaicius:
                print("Sugeneruotas skaičius yra mažesnis.")
            else:
                print(f"Sveikiname! Sugeneruotas skaičius buvo {tikslus_skaicius}.")
                irasyti_zaidimo_pranesimus(atspeti_skaiciai, tikslus_skaicius)
                break
        else:
            print("Prašome įvesti galiojantį skaičių.")

        spejimams_likusia -= 1

    if spejimams_likusia == 0:
        print(f"Žaidimas baigtas. Sugeneruotas skaičius buvo {tikslus_skaicius}.")
        irasyti_zaidimo_pranesimus(atspeti_skaiciai, tikslus_skaicius)

    print("Jūs atspėjote šiuos skaičius:", atspeti_skaiciai)
    print("Ar žaisite dar? (Taip/Ne)")
    zaisti_dar = input().strip().lower()
    
    if zaisti_dar == "taip" or zaisti_dar == "t":
        zaisti_zaidima()
    else:
        print("Ačiū, kad žaidėte!")

def irasyti_zaidimo_pranesimus(atspeti_skaiciai, tikslus_skaicius):
    with open("zaidimo_pranesimai.txt", "a", encoding='utf-8') as file:
        file.write(f"Tikslus skaičius: {tikslus_skaicius}\n")
        file.write(f"Atspėti skaičiai: {atspeti_skaiciai}\n\n")

if __name__ == "__main__":
    zaisti_zaidima()