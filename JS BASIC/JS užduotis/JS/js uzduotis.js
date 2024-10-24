
const atsargos = [
    {
        "kategorijos": "Informacinės technologijos",
        "knygos": [
            { "title": "Programavimas linksmai", "autorius": "Jonas Skeivys", "ISBN": "IT-12345", "leidybos_metai": 2023, "puslapiu": 250, "kiekis": 12, "kaina": 25 },
            { "title": "Webo technologijos", "autorius": "Neal Stephenson", "ISBN": "IT-12346", "leidybos_metai": 2022, "puslapiu": 300, "kiekis": 7, "kaina": 30 },
            { "title": "Algoritmai ir duomenų struktūros", "autorius": "Raimondas Čiegis", "ISBN": "IT-12347", "leidybos_metai": 2023, "puslapiu": 400, "kiekis": 5, "kaina": 40 },
            { "title": "Kibernetinio saugumo pagrindai", "autorius": "Audrius Lopata", "ISBN": "IT-12348", "leidybos_metai": 2021, "puslapiu": 350, "kiekis": 10, "kaina": 35 },
            { "title": "Dirbtinis intelektas", "autorius": "Max Tegmark", "ISBN": "IT-12349", "leidybos_metai": 2023, "puslapiu": 500, "kiekis": 3, "kaina": 50 }
        ]
    },
    {
        "kategorijos": "Fantastika",
        "knygos": [
            { "title": "Kopos", "autorius": "Frank Herbert", "ISBN": "F-00001", "leidybos_metai": 1965, "puslapiu": 412, "kiekis": 20, "kaina": 20 },
            { "title": "Neuromantas", "autorius": "William Gibson", "ISBN": "F-00002", "leidybos_metai": 1984, "puslapiu": 271, "kiekis": 15, "kaina": 18 },
            { "title": "Marsietis", "autorius": "Andy Weir", "ISBN": "F-00003", "leidybos_metai": 2011, "puslapiu": 369, "kiekis": 10, "kaina": 22 },
            { "title": "1984", "autorius": "George Orwell", "ISBN": "F-00004", "leidybos_metai": 1949, "puslapiu": 328, "kiekis": 18, "kaina": 14 },
            { "title": "Drąsi nauja pasaulis", "autorius": "Aldous Huxley", "ISBN": "F-00005", "leidybos_metai": 1932, "puslapiu": 288, "kiekis": 14, "kaina": 12 }
        ]
    },
    {
        "kategorijos": "Istorinė fantastika",
        "knygos": [
            { "title": "Knygų vagilė", "autorius": "Markus Zusak", "ISBN": "HF-00001", "leidybos_metai": 2005, "puslapiu": 552, "kiekis": 8, "kaina": 23 },
            { "title": "Visa šviesa, kurios nematome", "autorius": "Anthony Doerr", "ISBN": "HF-00002", "leidybos_metai": 2014, "puslapiu": 531, "kiekis": 6, "kaina": 27 },
            { "title": "Lakštingala", "autorius": "Kristin Hannah", "ISBN": "HF-00003", "leidybos_metai": 2015, "puslapiu": 440, "kiekis": 9, "kaina": 24 },
            { "title": "Žemės stulpai", "autorius": "Ken Follett", "ISBN": "HF-00004", "leidybos_metai": 1989, "puslapiu": 973, "kiekis": 4, "kaina": 30 },
            { "title": "Vilkų salė", "autorius": "Hilary Mantel", "ISBN": "HF-00005", "leidybos_metai": 2009, "puslapiu": 604, "kiekis": 7, "kaina": 26 }
        ]
    },
    {
        "kategorijos": "Mokslinė fantastika",
        "knygos": [
            { "title": "Enderio žaidimas", "autorius": "Orson Scott Card", "ISBN": "SF-00001", "leidybos_metai": 1985, "puslapiu": 324, "kiekis": 15, "kaina": 21 },
            { "title": "Fondas", "autorius": "Isaac Asimov", "ISBN": "SF-00002", "leidybos_metai": 1951, "puslapiu": 255, "kiekis": 11, "kaina": 19 },
            { "title": "Pirmasis žaidėjas", "autorius": "Ernest Cline", "ISBN": "SF-00003", "leidybos_metai": 2011, "puslapiu": 374, "kiekis": 13, "kaina": 22 },
            { "title": "Autostopu per galaktiką", "autorius": "Douglas Adams", "ISBN": "SF-00004", "leidybos_metai": 1979, "puslapiu": 215, "kiekis": 14, "kaina": 18 },
            { "title": "Sniego katastrofa", "autorius": "Henrik Strieberg", "ISBN": "SF-00005", "leidybos_metai": 1992, "puslapiu": 470, "kiekis": 9, "kaina": 25 }
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
                knyga.leidimo_metai = "Nauja knyga";
            } else {
                knyga.leidimo_metai = knyga.leidybos_metai.toString();
            }
            knyga.bendraKaina = knyga.kaina * knyga.kiekis;
            kategorijosVertė += knyga.bendraKaina;

            let knygosStatusas = knyga.leidimo_metai;

            console.log(`- ${knyga.title} (${knyga.ISBN}) - ${knygosStatusas} - Puslapiai: ${knyga.puslapiu}, Kiekis: ${knyga.kiekis}, Kaina: ${knyga.kaina} EUR, Bendra Knygos Kaina: ${knyga.bendraKaina} EUR`);
        }

        console.log(`\nBendra vertė ${kategorija.kategorijos}: ${kategorijosVertė} EUR`);
        bendraVertė += kategorijosVertė;
        console.log("---------------------------------------------------");
    }
    console.log(`Bendra atsargų vertė: ${bendraVertė} EUR`);
}

apskaiciuotiAtsargas(atsargos);

console.log("---------------------------------------------------");


// Extra task:

console.log("\nExtra task:");



function filterBooksBy(books, category = null, title = null, minPages = null, maxPages = null) {
    return books.flatMap(kat => {
        return kat.knygos.filter(knyga =>
            (category === null || kat.kategorijos === category) &&
            (title === null || knyga.title.toLowerCase().includes(title.toLowerCase())) &&
            (minPages === null || knyga.puslapiu >= minPages) &&
            (maxPages === null || knyga.puslapiu <= maxPages)
        ).map(knyga => ({
            kategorija: kat.kategorijos,
            pavadinimas: knyga.title,
            puslapiu: knyga.puslapiu
        }));
    });
}

const filteredBooks = filterBooksBy(atsargos);
console.log("Filtruotos knygos pagal kategoriją, pavadinimą ir puslapių:");
console.log(filteredBooks);




function findMinMaxPrice(books) {
    const prices = books.flatMap(kat => kat.knygos.map(k => k.kaina));
    return {
        minPrice: Math.min(...prices),
        maxPrice: Math.max(...prices)
    };
}

const priceRange = findMinMaxPrice(atsargos);
console.log(`\nMažiausia knyga kaina: ${priceRange.minPrice} EUR, Didžiausia knyga kaina: ${priceRange.maxPrice} EUR`);




function sortBooks(books, sortBy = 'title', order = 'asc') {
    return [...books].sort((a, b) => {
        let valueA, valueB;

        if (sortBy === 'title') {
            valueA = a.title.toLowerCase();
            valueB = b.title.toLowerCase();
        } else if (sortBy === 'price') {
            valueA = a.kaina;
            valueB = b.kaina;
        } else if (sortBy === 'author') {
            valueA = (a.autorius || '').toLowerCase();
            valueB = (b.autorius || '').toLowerCase();
        }

        if (order === 'desc') {
            return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
        } else {
            return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        }
    });
}

function sortBooksByAuthor(books, order = 'asc') {
    return sortBooks(books, 'author', order);
}

function sortBooksByPrice(books, order = 'asc') {
    return sortBooks(books, 'price', order);
}

function sortBooksByTitle(books, order = 'asc') {
    return sortBooks(books, 'title', order);
}

function printBooksauthor(bookList, title) {
    console.log(`\n${title}:`);
    bookList.forEach(book => {
        console.log(`- Autorius: ${book.autorius || 'N/A'}`);
    });
}

function printBooksprice(bookList, title) {
    console.log(`\n${title}:`);
    bookList.forEach(book => {
        console.log(`- Kaina: ${book.kaina}`);
    });
}

function printBookstitle(bookList, title) {
    console.log(`\n${title}:`);
    bookList.forEach(book => {
        console.log(`- Pavadinimas: ${book.title}`);
    });
}

// Jūsų knygų duomenys ir rūšiavimas turėtų būti čia:
const allBooks = atsargos.flatMap(kat => kat.knygos);
const sortedBooksByTitle = sortBooksByTitle(allBooks);
const sortedBooksByPriceDesc = sortBooksByPrice(allBooks, 'desc');
const sortedBooksByAuthor = sortBooksByAuthor(allBooks);

// Spausdinimas
printBooksauthor(sortedBooksByAuthor, "Knygos surūšiuotos pagal autorius didėjančia tvarka");
printBooksprice(sortedBooksByPriceDesc, "Knygos surūšiuotos pagal kainą mažėjimo tvarka");
printBookstitle(sortedBooksByTitle, "Knygos surūšiuotos pagal pavadinimą");
