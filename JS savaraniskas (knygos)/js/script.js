let knygos = [
    { pavadinimas: "Web Design with HTML, CSS, JavaScript and jQuery Set", isbn: "IT-9781118907443", metai: 2014, puslapiai: 1152, kiekis: 12, kaina: 77.99, kategorija: "Informacinės technologijos", link: "https://www.knygos.lt/lt/knygos/web-design-with-html--css--javascript-and-jquery-set/" },
    { pavadinimas: "Kopa", isbn: "F-9786094276170", metai: 2024, puslapiai: 724, kiekis: 20, kaina: 22.59, kategorija: "Fantastika", link: "https://www.knygos.lt/lt/knygos/kopa-filmo-virseliu/" },
    { pavadinimas: "451° Farenheito", isbn: "DF-9789955137085", metai: 2017, puslapiai: 184, kiekis: 8, kaina: 24.99, kategorija: "Distopinė fantastika", link: "https://www.knygos.lt/lt/knygos/451--farenheito/" },
    { pavadinimas: "Enderio žaidimas", isbn: "SF-9789955754008", metai: 2007, puslapiai: 280, kiekis: 15, kaina: 24.99, kategorija: "Mokslinė fantastika", link: "https://www.knygos.lt/lt/knygos/enderio-zaidimas/" },
    { pavadinimas: "Žmogžudystė Rytų eksprese", isbn: "D-9786094845840", metai: 2023, puslapiai: 288, kiekis: 10, kaina: 21.15, kategorija: "Detektyvas", link: "https://www.knygos.lt/lt/knygos/zmogzudyste-rytu-eksprese-2023/" },
    { pavadinimas: "Puikybė ir prietarai", isbn: "R-9786094840890", metai: 2020, puslapiai: 496, kiekis: 14, kaina: 33.99, kategorija: "Romantika", link: "https://www.knygos.lt/lt/knygos/puikybe-ir-prietarai--2019-/" },
    { pavadinimas: "Mąstymas, greitas ir lėtas", isbn: "P-9786094372834", metai: 2016, puslapiai: 640, kiekis: 7, kaina: 17.59, kategorija: "Psichologija", link: "https://www.knygos.lt/lt/knygos/mastymas-greitas-ir-letas/" },
    { pavadinimas: "Dekameronas", isbn: "C-9789986165255", metai: 2010, puslapiai: 632, kiekis: 18, kaina: 36.99, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/dekameronas/" },
    { pavadinimas: "Informacinės elgsenos tyrimas", isbn: "IT-9786090710319", metai: 2024, puslapiai: 212, kiekis: 10, kaina: 18.39, kategorija: "Informacinės technologijos", link: "https://www.knygos.lt/lt/knygos/informacines-elgsenos-tyrimas--ivadas/" },
    { pavadinimas: "Trijų kūnų problema", isbn: "F-9786094274367", metai: 2020, puslapiai: 360, kiekis: 18, kaina: 14.05, kategorija: "Fantastika", link: "https://www.knygos.lt/lt/knygos/triju-kunu-problema/" },
    { pavadinimas: "Keliautojo autostopu gidas po galaktiką", isbn: "C-9786094272660", metai: 2016, puslapiai: 200, kiekis: 25, kaina: 10.29, kategorija: "Komedija", link: "https://www.knygos.lt/lt/elektronines-knygos/keliautojo-autostopu-vadovas-po-galaktika/" },
    { pavadinimas: "Intelektikos pagrindai", isbn: "IT-9786090218075", metai: 2022, puslapiai: 296, kiekis: 9, kaina: 40.99, kategorija: "Informacinės technologijos", link: "https://www.knygos.lt/lt/knygos/intelektikos-pagrindai--vadovelis/" },
    { pavadinimas: "Laiko mašina", isbn: "F-9786094272547", metai: 2017, puslapiai: 256, kiekis: 22, kaina: 18.99, kategorija: "Fantastika", link: "https://www.knygos.lt/lt/knygos/laiko-masina--daktaro-moro-sala-oobm/" },
    { pavadinimas: "1984-ieji", isbn: "DF-9786094902055", metai: 2023, puslapiai: 256, kiekis: 11, kaina: 10.59, kategorija: "Distopinė fantastika", link: "https://www.knygos.lt/lt/knygos/1984-ieji-2023/" },
    { pavadinimas: "Ar androidai svajoja apie elektrines avis?", isbn: "SF-9786094274107", metai: 2019, puslapiai: 224, kiekis: 17, kaina: 12.29, kategorija: "Mokslinė fantastika", link: "https://www.knygos.lt/lt/knygos/ar-androidai-svajoja-apie-elektrines-avis-/" },
    { pavadinimas: "Baskervilių šuo", isbn: "D-9786094841392", metai: 2020, puslapiai: 176, kiekis: 13, kaina: 2.19, kategorija: "Detektyvas", link: "https://www.knygos.lt/lt/knygos/baskerviliu-suo--2018-/" },
    { pavadinimas: "Meilė choleros metu", isbn: "R-9786090123973", metai: 2016, puslapiai: 456, kiekis: 12, kaina: 48.99, kategorija: "Romantika", link: "https://www.knygos.lt/lt/knygos/meile-choleros-metu--2016-/" },
    { pavadinimas: "Žmogus ieško prasmės", isbn: "P-9789955295099", metai: 2023, puslapiai: 192, kiekis: 8, kaina: 24.99, kategorija: "Psichologija", link: "https://www.knygos.lt/lt/knygos/zmogus-iesko-prasmes-2023/" },
    { pavadinimas: "Anekdotai apie Chucką Norrisą", isbn: "C-9789916995082", metai: 2024, puslapiai: 160, kiekis: 20, kaina: 9.39, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/anekdotai-apie-chucka-norrisa/" },
    { pavadinimas: "Refactoring", isbn: "IT-9780134757599", metai: 2019, puslapiai: 448, kiekis: 14, kaina: 69.89, kategorija: "Informacinės technologijos", link: "https://www.knygos.lt/lt/knygos/refactoring-tvh9/" },
    { pavadinimas: "Puikus naujas pasaulis", isbn: "F-9789986398356", metai: 2024, puslapiai: 264, kiekis: 21, kaina: 12.99, kategorija: "Fantastika", link: "https://www.knygos.lt/lt/knygos/puikus-naujas-pasaulis-2-as-leidimas-/" },
    { pavadinimas: "22-oji išlyga", isbn: "C-9786094441578", metai: 2015, puslapiai: 560, kiekis: 19, kaina: 27.39, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/22-oji-islyga-2015/" },
    { pavadinimas: "Skerdykla Nr. 5", isbn: "C-9789955640196", metai: 2006, puslapiai: 182, kiekis: 20, kaina: 10.59, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/skerdykla-nr--5-nu3f/" },
    { pavadinimas: "Bridžita Džouns. Dienoraštis", isbn: "C-9786090116357", metai: 2014, puslapiai: 272, kiekis: 19, kaina: 12.99, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/bridzita-dzouns-dienorastis/" },
    { pavadinimas: "Kompiuterių architektūra. Virtualios architektūros", isbn: "IT-9786090207697", metai: 2012, puslapiai: 68, kiekis: 14, kaina: 49.39, kategorija: "Informacinės technologijos", link: "https://www.knygos.lt/lt/knygos/kompiuteriu-architektura--virtualios-architekturos-1l3kc/" },
    { pavadinimas: "Marsietis", isbn: "SF-9786094870750", metai: 2020, puslapiai: 416, kiekis: 17, kaina: 14.19, kategorija: "Mokslinė fantastika", link: "https://www.knygos.lt/lt/knygos/marsietis/" },
    { pavadinimas: "Vėjo nublokšti", isbn: "R-9786099607764", metai: 2019, puslapiai: 960, kiekis: 13, kaina: 42.99, kategorija: "Romantika", link: "https://www.knygos.lt/lt/knygos/vejo-nubloksti/" },
    { pavadinimas: "Pinigų psichologija: amžinos pamokos apie turtą, godumą ir laimę", isbn: "P-9786099516837", metai: 2022, puslapiai: 264, kiekis: 9, kaina: 12.69, kategorija: "Psichologija", link: "https://www.knygos.lt/lt/knygos/pinigu-psichologija--amzinos-pamokos-apie-turta--goduma-ir-laime/" },
    { pavadinimas: "Hobitas, arba Ten ir atgal", isbn: "F-9786090142486", metai: 2024, puslapiai: 296, kiekis: 16, kaina: 15.89, kategorija: "Fantastika", link: "https://www.knygos.lt/lt/knygos/hobitas--2020-/" },
    { pavadinimas: "Projektas „Rožė“", isbn: "C-9786090110294", metai: 2013, puslapiai: 256, kiekis: 23, kaina: 8.18, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/projektas-roze-f2o/" },
    { pavadinimas: "Artificial Intelligence: A Modern Approach, Global Edition", isbn: "IT-9781292401133", metai: 2021, puslapiai: 1166, kiekis: 15, kaina: 113.49, kategorija: "Informacinės technologijos", link: "https://www.knygos.lt/lt/knygos/artificial-intelligence--a-modern-approach--global-edition-1ll4g/" },
    { pavadinimas: "Sostų Karai: Sostų žaidimas. Ledo ir ugnies giesmė.", isbn: "F-9786090105375", metai: 2020, puslapiai: 640, kiekis: 20, kaina: 19.99, kategorija: "Fantastika", link: "https://www.knygos.lt/lt/knygos/sostu-zaidimas-ciklo-ledo-ir-ugnies-daina-1-knyga/" },
    { pavadinimas: "Tarnaitės pasakojimas", isbn: "DF-9789955236269", metai: 2019, puslapiai: 334, kiekis: 7, kaina: 12.79, kategorija: "Distopinė fantastika", link: "https://www.knygos.lt/lt/knygos/tarnaites-pasakojimas/" },
    { pavadinimas: "Neuromantas", isbn: "SF-9786094275500", metai: 2023, puslapiai: 318, kiekis: 16, kaina: 17.29, kategorija: "Mokslinė fantastika", link: "https://www.knygos.lt/lt/knygos/neuromantas/" },
    { pavadinimas: "Prisukamas apelsinas", isbn: "D-9786094443640", metai: 2021, puslapiai: 192, kiekis: 14, kaina: 10.59, kategorija: "Detektyvas", link: "https://www.knygos.lt/lt/knygos/prisukamas-apelsinas--2021-/" },
    { pavadinimas: "Užrašų Knygelė", isbn: "R-9786098184143", metai: 2017, puslapiai: 240, kiekis: 21, kaina: 17.99, kategorija: "Romantika", link: "https://www.knygos.lt/lt/knygos/uzrasu-knygele/" },
    { pavadinimas: "Srautas. Optimali išgyvenimo psichologija", isbn: "P-9786099569147", metai: 2021, puslapiai: 318, kiekis: 11, kaina: 14.43, kategorija: "Psichologija", link: "https://www.knygos.lt/lt/knygos/srautas-optimali-isgyvenimo-psichologija/" },
    { pavadinimas: "Gyveno kartą Uvė", isbn: "C-9786090112977", metai: 2021, puslapiai: 328, kiekis: 26, kaina: 14.29, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/gyveno-karta-uve-hjr/" },
    { pavadinimas: "Clean Code", isbn: "IT-9780132350884", metai: 2009, puslapiai: 464, kiekis: 13, kaina: 62.89, kategorija: "Informacinės technologijos", link: "https://www.knygos.lt/lt/knygos/clean-code/" },
    { pavadinimas: "Oazė: žaidimas prasideda", isbn: "F-9786090130810", metai: 2018, puslapiai: 464, kiekis: 18, kaina: 17.79, kategorija: "Fantastika", link: "https://www.knygos.lt/lt/knygos/oaze--zaidimas-prasideda/" },
    { pavadinimas: "Šachta", isbn: "DF-9786090121801", metai: 2021, puslapiai: 544, kiekis: 5, kaina: 24.99, kategorija: "Distopinė fantastika", link: "https://www.knygos.lt/lt/knygos/sachta/" },
    { pavadinimas: "Erdvėlaivių kariai", isbn: "SF-9789955754114", metai: 2009, puslapiai: 248, kiekis: 15, kaina: 6.49, kategorija: "Mokslinė fantastika", link: "https://www.knygos.lt/lt/knygos/erdvelaiviu-kariai/" },
    { pavadinimas: "Mergina su drakono tatuiruote", isbn: "D-9786094036682", metai: 2014, puslapiai: 624, kiekis: 18, kaina: 22.59, kategorija: "Detektyvas", link: "https://www.knygos.lt/lt/knygos/mergina-su-drakono-tatuiruote-minksti-virseliai/" },
    { pavadinimas: "Aš prieš tave", isbn: "R-9789955135029", metai: 2016, puslapiai: 432, kiekis: 19, kaina: 18.99, kategorija: "Romantika", link: "https://www.knygos.lt/lt/knygos/as-pries-tave/" },
    { pavadinimas: "Mirksnis. Gebėjimas mąstyti nemąstant", isbn: "P-9789955790099", metai: 2008, puslapiai: 192, kiekis: 10, kaina: 15.39, kategorija: "Psichologija", link: "https://www.knygos.lt/lt/knygos/mirksnis--gebejimas-mastyti-nemastant-8cs24/" },
    { pavadinimas: "Katės lopšys", isbn: "C-9786094275463", metai: 2023, puslapiai: 344, kiekis: 24, kaina: 13.99, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/kates-lopsys-2023/" },
    { pavadinimas: "The Pragmatic Programmer: journey to mastery", isbn: "IT-9780135957059", metai: 2019, puslapiai: 352, kiekis: 12, kaina: 61.49, kategorija: "Informacinės technologijos", link: "https://www.knygos.lt/lt/knygos/the-pragmatic-programmer--journey-to-mastery--20th-anniversary-edition--2-e-vhtt/" },
    { pavadinimas: "Auksinis kompasas. Jo tamsiosios jėgos", isbn: "F-9786094416699", metai: 2020, puslapiai: 408, kiekis: 17, kaina: 14.14, kategorija: "Fantastika", link: "https://www.knygos.lt/lt/knygos/auksinis-kompasas--jo-tamsiosios-jegos--1-/" },
    { pavadinimas: "Ratas", isbn: "DF-9786094661495", metai: 2016, puslapiai: 456, kiekis: 6, kaina: 6.99, kategorija: "Distopinė fantastika", link: "https://www.knygos.lt/lt/knygos/ratas/" },
    { pavadinimas: "Frankenšteinas", isbn: "SF-9786094842566", metai: 2021, puslapiai: 336, kiekis: 14, kaina: 36.99, kategorija: "Mokslinė fantastika", link: "https://www.knygos.lt/lt/knygos/frankensteinas--gotikinio-siaubo-romanas/" },
    { pavadinimas: "Sniego senis", isbn: "D-9789955238928", metai: 2021, puslapiai: 472, kiekis: 19, kaina: 14.39, kategorija: "Detektyvas", link: "https://www.knygos.lt/lt/knygos/sniego-senis-/" },
    { pavadinimas: "Džeinė Eir", isbn: "R-9786090123928", metai: 2016, puslapiai: 592, kiekis: 22, kaina: 17.79, kategorija: "Romantika", link: "https://www.knygos.lt/lt/knygos/dzeine-eir--2016-/" },
    { pavadinimas: "Tyla. Introvertų galia pasaulyje, kuris nesiliauja kalbėjęs", isbn: "P-9786098105001", metai: 2018, puslapiai: 412, kiekis: 11, kaina: 38.19, kategorija: "Psichologija", link: "https://www.knygos.lt/lt/knygos/tyla-introvertu-galia-pasaulyje-kuris-nesiliauja-kalbejes/" },
    { pavadinimas: "Džonas pabaigoje miršta", isbn: "C-9789955137108", metai: 2017, puslapiai: 544, kiekis: 28, kaina: 7, kategorija: "Komedija", link: "https://www.knygos.lt/lt/knygos/dzonas-pabaigoje-mirsta/" },
];

let filteredKnygos = [...knygos];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function rodytiKnygas(knygosList = filteredKnygos, shouldShuffle = true) {
    const knyguSarasas = document.getElementById('knyguSarasas');
    knyguSarasas.innerHTML = "";

    let displayedBooks = shouldShuffle ? shuffleArray([...knygosList]) : [...knygosList];

    displayedBooks.forEach((knyga, index) => {
        let knygosKorta = document.createElement('div');
        knygosKorta.className = 'knygos-korta';
        knygosKorta.style.opacity = '0';
        knygosKorta.style.transform = 'scale(0.9)';
        knygosKorta.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

        let naujienuZyme = knyga.metai === 2024 ? "<span class='new-label'>Naujienos</span>" : "";

        let imageSrc = `images/books/${knyga.isbn}.jpg`;
        let defaultImageSrc = 'images/books/default.jpg';

        knygosKorta.innerHTML = `
            <div class="knygos-vaizdas-wrapper">
                <img src="${imageSrc}" alt="${knyga.pavadinimas}" class="knygos-vaizdas" onerror="this.src='${defaultImageSrc}'; this.onerror=null;">
            </div>
            <div class="knygos-info">
                <h3>${knyga.pavadinimas} ${naujienuZyme}</h3>
                <p>ISBN: ${knyga.isbn}</p>
                <p>Leidimo metai: ${knyga.metai}</p>
                <p>Puslapių: ${knyga.puslapiai}</p>
                <p>Kiekis: ${knyga.kiekis}</p>
                <p>Kaina: ${knyga.kaina.toFixed(2)} €</p>
            </div>
        `;

        // Add click event listener to redirect to the book's link
        knygosKorta.addEventListener('click', function () {
            if (knyga.link) {
                window.location.href = knyga.link;
            }
        });

        knyguSarasas.appendChild(knygosKorta);

        setTimeout(() => {
            knygosKorta.style.opacity = '1';
            knygosKorta.style.transform = 'scale(1)';
            knygosKorta.addEventListener('transitionend', function (e) {
                if (e.propertyName === 'transform') {
                    knygosKorta.classList.add('show');
                }
            });
        }, index * 100);
    });
}

function filtruotiKnygas() {
    const kategorija = document.getElementById('kategorijosFiltras').value.toLowerCase();
    const pavadinimas = document.getElementById('pavadinimoPaieska').value.toLowerCase();
    const minPuslapiai = parseInt(document.getElementById('minPuslapiai').value) || 0;
    const maxPuslapiai = parseInt(document.getElementById('maxPuslapiai').value) || Infinity;

    filteredKnygos = knygos.filter(knyga => {
        const knygosPavadinimas = knyga.pavadinimas.toLowerCase();
        const knygosKategorija = knyga.kategorija.toLowerCase();

        const categoryMatch = (kategorija === '' ||
            (kategorija === 'fantastika' && knygosKategorija === 'fantastika') ||
            (kategorija !== 'fantastika' && knygosKategorija.includes(kategorija)));


        return (
            categoryMatch &&
            (pavadinimas === '' || knygosPavadinimas.includes(pavadinimas)) &&
            knyga.puslapiai >= minPuslapiai &&
            knyga.puslapiai <= maxPuslapiai
        );
    });

    const knyguSarasas = document.getElementById('knyguSarasas');
    const noResults = document.getElementById('no-results');

    if (filteredKnygos.length === 0) {
        knyguSarasas.innerHTML = "";
        noResults.style.display = 'block';

        const funMessages = [
            "Oho! Tu suradai knygų slėptuvę, kurios net nėra!",
            "Ar tu ieškai knygų, kurių net aš nežinau?",
            "Nėra knygų, bet gal nori gauti ananasą internetu?",
            "Sveikinu, tu radai nieko! Tu išrinktas metų ieškotoju!",
            "Mums atrodo, kad tavo knygų skonis yra... unikalus.",
            "Knygų nėra, bet mes turim šitą nuostabų tuščią puslapį!"
        ];

        const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];

        noResults.innerHTML = `
            <p style="text-align: center; font-size: 1.5em; color: #eeeeee margin-top: 20px;">
                ${randomMessage}
            </p>
        `;
    } else {
        noResults.style.display = 'none';
        rodytiKnygas();
    }
}

function resetFilters() {
    document.getElementById('kategorijosFiltras').value = '';
    document.getElementById('pavadinimoPaieska').value = '';
    document.getElementById('minPuslapiai').value = '';
    document.getElementById('maxPuslapiai').value = '';

    if (typeof knygos !== 'undefined') {
        filteredKnygos = [...knygos];
    } else {
        filteredKnygos = [];
    }
    rodytiKnygas(filteredKnygos, true);

    window.location.reload();
}

function rusiuotiKnygas(kriterijus, ascending = true) {
    let sortFunction;
    if (kriterijus === 'pavadinimas') {
        sortFunction = (a, b) => ascending ? a.pavadinimas.localeCompare(b.pavadinimas) : b.pavadinimas.localeCompare(a.pavadinimas);
    } else if (kriterijus === 'kaina') {
        sortFunction = (a, b) => ascending ? a.kaina - b.kaina : b.kaina - a.kaina;
    } else {
        return;
    }
    filteredKnygos.sort(sortFunction);
    rodytiKnygas(filteredKnygos, false);
}

function rusiuoti() {
    const kriterijus = document.getElementById('rusiavimasPagal').value;
    const ascending = document.getElementById('rusiavimasKryptis').value === 'ascending';
    rusiuotiKnygas(kriterijus, ascending);
}

function rastiPigiausiaKnyga() {
    const pigiausiaKnyga = filteredKnygos.reduce((min, book) => book.kaina < min.kaina ? book : min, filteredKnygos[0]);
    const resultElement = document.getElementById('kainosRezultatas');
    resultElement.textContent = `Pigiausia knyga: ${pigiausiaKnyga.pavadinimas}, Kaina: ${pigiausiaKnyga.kaina.toFixed(2)} €`;
    resultElement.classList.add('show-result');
}

function rastiBrangiausiaKnyga() {
    const brangiausiaKnyga = filteredKnygos.reduce((max, book) => book.kaina > max.kaina ? book : max, filteredKnygos[0]);
    const resultElement = document.getElementById('kainosRezultatas');
    resultElement.textContent = `Brangiausia knyga: ${brangiausiaKnyga.pavadinimas}, Kaina: ${brangiausiaKnyga.kaina.toFixed(2)} €`;
    resultElement.classList.add('show-result');
}

function apskaiciuotiInventoriausVerte() {
    let inventoryTotals = {};
    let totalValue = 0;

    knygos.forEach(knyga => {
        const bookValue = knyga.kaina * knyga.kiekis;

        if (!inventoryTotals[knyga.kategorija]) {
            inventoryTotals[knyga.kategorija] = 0;
        }
        inventoryTotals[knyga.kategorija] += bookValue;

        totalValue += bookValue;
    });

    let tableHTML = "<table><tr><th>Kategorija</th><th>Vertė</th></tr>";
    for (let [category, value] of Object.entries(inventoryTotals)) {
        tableHTML += `<tr><td>${category}</td><td>${value.toFixed(2)} €</td></tr>`;
    }
    tableHTML += `<tr><td><strong>Viso</strong></td><td><strong>${totalValue.toFixed(2)} €</strong></td></tr>`;
    tableHTML += "</table>";

    document.getElementById('inventoriausVerte').innerHTML = tableHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    rodytiKnygas();
    document.getElementById('resetFilters').addEventListener('click', resetFilters);
    document.getElementById('skaiciuotiInventoriausVerte').addEventListener('click', apskaiciuotiInventoriausVerte);
});