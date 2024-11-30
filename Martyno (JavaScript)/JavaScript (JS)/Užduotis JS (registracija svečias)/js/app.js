function registracijaSvecias() {
    const numerisSvecias = parseInt(prompt('Kiek bus svečių? (Tik skaičiai)'));
    const sveciasSarasas = [];
    const juodasisSarasas = ['Arnoldas', 'Eirina'];

    for (let i = 0; i < numerisSvecias; i++) {
        let vardas;
        do {
            vardas = prompt(`Įveskite ${i + 1}-ojo svečio vardą: `);
            sveciasSarasas.push(vardas);

            if (juodasisSarasas.includes(vardas)) {
                alert(`Dėmesio! Šis svečias yra juodajame sąraše: ${vardas}. 
                    Prašome įvesti kitą vardą`);
            }
        } while (juodasisSarasas.includes(vardas));
    }

    let atsakymas = 'Švečių sąrašas:\n' + sveciasSarasas.map((vardas, index) => {
        let statusas;
        if (juodasisSarasas.includes(vardas)) {
            statusas = ' (Juodasis sąrašas)';
        } else {
            statusas = '';
        }
        return `${index + 1}. ${vardas}${statusas}`;
    }).join('\n');

    atsakymas += `\n\nJuodasis sąrašas:\n${juodasisSarasas.slice(0, 2).join(', ')}`;

    return atsakymas;

}
let grazintasAtsakymas = registracijaSvecias();

console.log("\nRegistracija svečių sąrašas:\n" + grazintasAtsakymas);