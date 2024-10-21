
let vardas = "jonas";
let pavarde = "petrauskas";
let asmensKodas = "38102131234";


if (vardas.length < 3) {
    console.log("Klaida: Vardas turi būti bent 3 simbolių ilgio.");
} else if (pavarde.length < 5) {
    console.log("Klaida: Pavardė turi būti bent 5 simbolių ilgio.");
} else {

    let vardasFormatted = vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase();
    let pavardeFormatted = pavarde.toUpperCase();

    let gimimoMetai = asmensKodas.slice(0, 2);
    let simtmeciu;

    if (gimimoMetai >= '00' && gimimoMetai <= '21') {
        simtmeciu = gimimoMetai <= '20' ? '20' : '21';
    } else {
        simtmeciu = '19';
    }

    console.log("Vardas: " + vardasFormatted);
    console.log("Pavardė: " + pavardeFormatted);
    console.log("Gimimo metai: " + simtmeciu + gimimoMetai + "-" + asmensKodas.slice(2, 4) + "-" + asmensKodas.slice(4, 6));

    let gimimoVietaKodas = asmensKodas.charAt(2);
    switch (gimimoVietaKodas) {
        case '1':
        case '2':
            console.log("Gimimo vieta: Lietuva");
            break;
        case '3':
            console.log("Gimimo vieta: Užsienis");
            break;
        default:
            console.log("Gimimo vieta: Nežinoma");
    }

    if (asmensKodas.length !== 11 || !/^\d+$/.test(asmensKodas)) {
        console.log("Klaida: Asmens kodas netinkamas. Turi būti 11 skaitmenų.");
    }
}