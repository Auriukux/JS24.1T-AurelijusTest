def coffee_machine():
    price = float(input("Įveskite kavos kainą eurais: "))
    correct_coin_tries = 0
    fake_coin_tries = 0
    amount_paid = 0

    while amount_paid < price:
        coin = int(input("Įmeskite monetą (10, 20, 50 centų arba 1, 2 eurai): "))
        
        if coin in [10, 20, 50, 100, 200]:
            correct_coin_tries += 1
            amount_paid += coin / 100.0
            remaining = price - amount_paid
            if remaining > 0:
                print(f"Liko sumokėti: {remaining:.2f} eurų")
            else:
                change = amount_paid - price + 1  
                if change > 0:
                    print(f"Grąža: {change:.2f} eurų")
                else:
                    print("Grąža: 0 eurų")
                print("Skanios kavos!")
        else:
            fake_coin_tries += 1
            print("Netinkama moneta. Meskite dar kartą")

    print(f"Bandymų įmesti netinkamą monetą: {fake_coin_tries}")
    print(f"Bandymų įmesti tinkamą monetą: {correct_coin_tries}")

coffee_machine()