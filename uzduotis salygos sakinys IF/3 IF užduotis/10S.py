# 10S

def race_results(*results):
    racers = []
    for result in results:
        name, *times = result.split()
        total_time = sum(int(t) for t in times)
        racers.append((name, total_time))
    
    sorted_racers = sorted(racers, key=lambda x: x[1])
    
    for place, (name, time) in enumerate(sorted_racers, 1):
        print(f"{place}) {name}")

race_results("Aidas 536 546 587", "Rokas 587 566 573", "Lukas 556 597 536")