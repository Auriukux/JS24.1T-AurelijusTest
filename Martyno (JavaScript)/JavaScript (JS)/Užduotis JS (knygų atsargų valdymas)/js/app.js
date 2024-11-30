
const knygųAtsargos = [
    {
        "kategorijos": "Informacinės technologijos",
        "knygos": [
            { "pavadinimas": "Programavimas linksmai", "ISBN": "IT-12345", "leidybos_metai": 2023, "puslapiu": 250, "kiekis": 12, "kaina": 25 },
            { "pavadinimas": "Webo technologijos", "ISBN": "IT-12346", "leidybos_metai": 2022, "puslapiu": 300, "kiekis": 7, "kaina": 30 },
            { "pavadinimas": "Algoritmai ir duomenų struktūros", "ISBN": "IT-12347", "leidybos_metai": 2023, "puslapiu": 400, "kiekis": 5, "kaina": 40 },
            { "pavadinimas": "Kibernetinio saugumo pagrindai", "ISBN": "IT-12348", "leidybos_metai": 2021, "puslapiu": 350, "kiekis": 10, "kaina": 35 },
            { "pavadinimas": "Dirbtinis intelektas", "ISBN": "IT-12349", "leidybos_metai": 2023, "puslapiu": 500, "kiekis": 3, "kaina": 50 }
        ]
    },
    {
        "kategorijos": "Fantastika",
        "knygos": [
            { "pavadinimas": "Kopos", "ISBN": "F-00001", "leidybos_metai": 1965, "puslapiu": 412, "kiekis": 20, "kaina": 20 },
            { "pavadinimas": "Neuromantas", "ISBN": "F-00002", "leidybos_metai": 1984, "puslapiu": 271, "kiekis": 15, "kaina": 18 },
            { "pavadinimas": "Marsietis", "ISBN": "F-00003", "leidybos_metai": 2011, "puslapiu": 369, "kiekis": 10, "kaina": 22 },
            { "pavadinimas": "1984", "ISBN": "F-00004", "leidybos_metai": 1949, "puslapiu": 328, "kiekis": 18, "kaina": 14 },
            { "pavadinimas": "Drąsi nauja pasaulis", "ISBN": "F-00005", "leidybos_metai": 1932, "puslapiu": 288, "kiekis": 14, "kaina": 12 }
        ]
    },
    {
        "kategorijos": "Istorinė fantastika",
        "knygos": [
            { "pavadinimas": "Knygų vagilė", "ISBN": "HF-00001", "leidybos_metai": 2005, "puslapiu": 552, "kiekis": 8, "kaina": 23 },
            { "pavadinimas": "Visa šviesa, kurios nematome", "ISBN": "HF-00002", "leidybos_metai": 2014, "puslapiu": 531, "kiekis": 6, "kaina": 27 },
            { "pavadinimas": "Lakštingala", "ISBN": "HF-00003", "leidybos_metai": 2015, "puslapiu": 440, "kiekis": 9, "kaina": 24 },
            { "pavadinimas": "Žemės stulpai", "ISBN": "HF-00004", "leidybos_metai": 1989, "puslapiu": 973, "kiekis": 4, "kaina": 30 },
            { "pavadinimas": "Vilkų salė", "ISBN": "HF-00005", "leidybos_metai": 2009, "puslapiu": 604, "kiekis": 7, "kaina": 26 }
        ]
    },
    {
        "kategorijos": "Mokslinė fantastika",
        "knygos": [
            { "pavadinimas": "Enderio žaidimas", "ISBN": "SF-00001", "leidybos_metai": 1985, "puslapiu": 324, "kiekis": 15, "kaina": 21 },
            { "pavadinimas": "Fondas", "ISBN": "SF-00002", "leidybos_metai": 1951, "puslapiu": 255, "kiekis": 11, "kaina": 19 },
            { "pavadinimas": "Pirmasis žaidėjas", "ISBN": "SF-00003", "leidybos_metai": 2011, "puslapiu": 374, "kiekis": 13, "kaina": 22 },
            { "pavadinimas": "Autostopu per galaktiką", "ISBN": "SF-00004", "leidybos_metai": 1979, "puslapiu": 215, "kiekis": 14, "kaina": 18 },
            { "pavadinimas": "Sniego katastrofa", "ISBN": "SF-00005", "leidybos_metai": 1992, "puslapiu": 470, "kiekis": 9, "kaina": 25 }
        ]
    },
];


const dabartiniaiMetai = new Date().getFullYear();

// Filtruoti knygas pagal duotą kriterijų
function filtruotiKnygas(knygųSąrašas, kriterijus, reikšmė) {
    return knygųSąrašas.flatMap(kategorija =>
        kategorija.knygos.filter(knyga =>
            knyga[kriterijus] === reikšmė || (kriterijus === 'pavadinimas' && knyga.pavadinimas.toLowerCase().includes(reikšmė.toLowerCase()))
        )
    );
}

// Rasti knygas su minimalią arba maksimalią kainą
function rastiMinMaxKainą(tipas) {
    const operatorius = tipas === 'min' ? Math.min : Math.max;
    const visosKainos = knygųAtsargos.flatMap(kategorija => kategorija.knygos.map(knyga => knyga.kaina));
    const kaina = operatorius(...visosKainos);
    return knygųAtsargos.flatMap(kategorija =>
        kategorija.knygos.filter(knyga => knyga.kaina === kaina)
    );
}

// Surūšiuoti knygas pagal nurodytą kriterijų
function rūšiuotiKnygas(kriterijus, didėjančiai = true) {
    const rūšiavimoKryptis = didėjančiai ? 1 : -1;
    return knygųAtsargos.map(kategorija => ({
        ...kategorija,
        knygos: [...kategorija.knygos].sort((a, b) =>
            (a[kriterijus] < b[kriterijus]) ? -1 * rūšiavimoKryptis : (a[kriterijus] > b[kriterijus]) ? rūšiavimoKryptis : 0
        )
    }));
}

function valdytiAtsargas() {
    let visaAtsargųVertė = 0;
    for (let kategorija of knygųAtsargos) {
        let kategorijosVertė = 0;
        console.log(`Kategorija: ${kategorija.kategorijos}`);
        for (let knyga of kategorija.knygos) {
            knyga.bendraKaina = knyga.kaina * knyga.kiekis;
            knyga.yraNauja = knyga.leidybos_metai === dabartiniaiMetai ? "Nauja knyga" : "";
            console.log(`- ${knyga.pavadinimas} (${knyga.ISBN}) - ${knyga.yraNauja || knyga.leidybos_metai} - Kaina: ${knyga.bendraKaina} EUR`);
            kategorijosVertė += knyga.bendraKaina;
        }
        visaAtsargųVertė += kategorijosVertė;
        console.log(`Bendra vertė ${kategorija.kategorijos}: ${kategorijosVertė} EUR`);
        console.log("---------------------------------------------------");
    }
    console.log(`\nBendra atsargų vertė: ${visaAtsargųVertė} EUR`);
}

// Vykdome funkcijas
valdytiAtsargas();

// Filtruoti knygas pagal duotą kriterijų
const filtruotosPagalKategoriją = filtruotiKnygas(knygųAtsargos, 'kategorijos', 'Informacinės technologijos');
const filtruotosPagalPavadinimą = filtruotiKnygas(knygųAtsargos, 'pavadinimas', 'Programavimas'); // Ieškos knygų, kurių pavadinime yra "Programavimas"
const filtruotosPagalPuslapius = filtruotiKnygas(knygųAtsargos, 'puslapiu', 650);

console.log("Knygos pagal kategoriją:", filtruotosPagalKategoriją);
console.log("Knygos pagal pavadinimą:", filtruotosPagalPavadinimą);
console.log("Knygos pagal puslapių skaičių:", filtruotosPagalPuslapius);
