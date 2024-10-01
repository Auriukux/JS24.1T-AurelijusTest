# x1 = 15
# y1 = 754
# x2 = 38
# y2 = 954

def calculate_programisius(x1, y1, x2, y2):
    pirma_sekunde = x1 * 1024 + y1
    antra_sekunde = x2 * 1024 + y2

    isviso_sekunde = pirma_sekunde + antra_sekunde

    kilobaitu = isviso_sekunde // 1024
    baitu = isviso_sekunde % 1024

    return kilobaitu, baitu

x1, y1, x2, y2 = 15, 754, 38, 954
kb, b = calculate_programisius(x1, y1, x2, y2)
print(f"Viso programišius pasisavino {kb} kilobaitus ir {b} baitus informacijos.")