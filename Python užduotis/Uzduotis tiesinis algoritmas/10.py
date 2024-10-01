# x1 = 8
# y1 = 70
# x2 = 7
# y2 = 90

def calculate_ukininkas(x1, y1, x2, y2):
    pirma_diena = x1 * 100 + y1
    antra_diena = x2 * 100 + y2

    isviso_diena = pirma_diena + antra_diena

    hektaru = isviso_diena // 100
    aru = isviso_diena % 100

    return hektaru, aru

x1, y1, x2, y2 = 8, 70, 7, 90
ha, a = calculate_ukininkas(x1, y1, x2, y2)

print(f"Per dvi dienas ūkininkas nupjovė {ha} hektarų ir {a} arų pievos.")
