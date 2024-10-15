# 6V

pazymiai = [8, 9, 6, 5, 10]
vidurkis = sum(pazymiai) / len(pazymiai)

if vidurkis > 9:
    print("Petriukas gaus 3 saldainius(-ius)")
elif 7 <= vidurkis <= 9:
    print("Petriukas gaus 2 saldainius(-ius)")
else:
    print("Petriukas gaus 1 saldainius(-ius)")