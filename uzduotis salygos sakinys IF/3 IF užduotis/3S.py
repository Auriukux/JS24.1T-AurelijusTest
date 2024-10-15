# 3S

books = []

for i in range(3):
    k, s = map(int, input(f"Įveskite {i+1}-osios knygos kodą ir parduotų egzempliorių skaičių: ").split())
    books.append({'code': k, 'sales': s})

max_sales = max(book['sales'] for book in books)
popular_books = [book['code'] for book in books if book['sales'] == max_sales]

print("Populiariausios knygos kodas(-ai):", ', '.join(map(str, popular_books)))