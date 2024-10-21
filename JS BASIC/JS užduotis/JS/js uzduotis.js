
const atsargos = [
    {
        "kategorijos": "Informacinės technologijos",
        "knygos": [
            { "title": "Programavimas linksmai", "ISBN": "IT-12345", "leidybos_metai": 2023, "puslapiu": 250, "kiekis": 12, "kaina": 25 },
            { "title": "Webo technologijos", "ISBN": "IT-12346", "leidybos_metai": 2022, "puslapiu": 300, "kiekis": 7, "kaina": 30 },
            { "title": "Algoritmai ir duomenų struktūros", "ISBN": "IT-12347", "leidybos_metai": 2023, "puslapiu": 400, "kiekis": 5, "kaina": 40 },
            { "title": "Kibernetinio saugumo pagrindai", "ISBN": "IT-12348", "leidybos_metai": 2021, "puslapiu": 350, "kiekis": 10, "kaina": 35 },
            { "title": "Dirbtinis intelektas", "ISBN": "IT-12349", "leidybos_metai": 2023, "puslapiu": 500, "kiekis": 3, "kaina": 50 }
        ]
    },
    {
        "kategorijos": "Fantastika",
        "knygos": [
            { "title": "Kopos", "ISBN": "F-00001", "leidybos_metai": 1965, "puslapiu": 412, "kiekis": 20, "kaina": 20 },
            { "title": "Neuromantas", "ISBN": "F-00002", "leidybos_metai": 1984, "puslapiu": 271, "kiekis": 15, "kaina": 18 },
            { "title": "Marsietis", "ISBN": "F-00003", "leidybos_metai": 2011, "puslapiu": 369, "kiekis": 10, "kaina": 22 },
            { "title": "1984", "ISBN": "F-00004", "leidybos_metai": 1949, "puslapiu": 328, "kiekis": 18, "kaina": 14 },
            { "title": "Drąsi nauja pasaulis", "ISBN": "F-00005", "leidybos_metai": 1932, "puslapiu": 288, "kiekis": 14, "kaina": 12 }
        ]
    },
    {
        "kategorijos": "Istorinė fantastika",
        "knygos": [
            { "title": "Knygų vagilė", "ISBN": "HF-00001", "leidybos_metai": 2005, "puslapiu": 552, "kiekis": 8, "kaina": 23 },
            { "title": "Visa šviesa, kurios nematome", "ISBN": "HF-00002", "leidybos_metai": 2014, "puslapiu": 531, "kiekis": 6, "kaina": 27 },
            { "title": "Lakštingala", "ISBN": "HF-00003", "leidybos_metai": 2015, "puslapiu": 440, "kiekis": 9, "kaina": 24 },
            { "title": "Žemės stulpai", "ISBN": "HF-00004", "leidybos_metai": 1989, "puslapiu": 973, "kiekis": 4, "kaina": 30 },
            { "title": "Vilkų salė", "ISBN": "HF-00005", "leidybos_metai": 2009, "puslapiu": 604, "kiekis": 7, "kaina": 26 }
        ]
    },
    {
        "kategorijos": "Mokslinė fantastika",
        "knygos": [
            { "title": "Enderio žaidimas", "ISBN": "SF-00001", "leidybos_metai": 1985, "puslapiu": 324, "kiekis": 15, "kaina": 21 },
            { "title": "Fondas", "ISBN": "SF-00002", "leidybos_metai": 1951, "puslapiu": 255, "kiekis": 11, "kaina": 19 },
            { "title": "Pirmasis žaidėjas", "ISBN": "SF-00003", "leidybos_metai": 2011, "puslapiu": 374, "kiekis": 13, "kaina": 22 },
            { "title": "Autostopu per galaktiką", "ISBN": "SF-00004", "leidybos_metai": 1979, "puslapiu": 215, "kiekis": 14, "kaina": 18 },
            { "title": "Sniego katastrofa", "ISBN": "SF-00005", "leidybos_metai": 1992, "puslapiu": 470, "kiekis": 9, "kaina": 25 }
        ]
    },
];


const dabartiniaiMetai = new Date().getFullYear();

function apskaiciuotiAtsargas(atsargos) {
    let bendraVertė = 0;
    for (let kategorija of atsargos) {
        let kategorijosVertė = 0;
        console.log(`Kategorija: ${kategorija.kategorijos}`);

        for (let knyga of kategorija.knygos) {
            if (knyga.leidybos_metai === dabartiniaiMetai) {
                knyga.yraNauja = "Nauja knyga";
            } else {
                knyga.yraNauja = "";
            }
            knyga.bendraKaina = knyga.kaina * knyga.kiekis;
            kategorijosVertė += knyga.bendraKaina;

            let knygosStatusas;
            if (knyga.yraNauja) {
                knygosStatusas = knyga.yraNauja;
            } else {
                knygosStatusas = knyga.leidybos_metai;
            }
            console.log(`- ${knyga.title} (${knyga.ISBN}) - ${knygosStatusas} - Kaina: ${knyga.bendraKaina} EUR`);
        }

        console.log(`Bendra vertė ${kategorija.kategorijos}: ${kategorijosVertė} EUR`);
        bendraVertė += kategorijosVertė;
        console.log("---------------------------------------------------");
    }
    console.log(`\nBendra atsargų vertė: ${bendraVertė} EUR`);
}

apskaiciuotiAtsargas(atsargos);