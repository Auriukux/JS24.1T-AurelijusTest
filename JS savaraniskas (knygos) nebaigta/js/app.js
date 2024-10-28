let knygos = [
    { pavadinimas: "Programavimas linksmai", isbn: "IT-12345", metai: 2024, puslapiai: 250, kiekis: 12, kaina: 25, kategorija: "Informacinės technologijos" },
    { pavadinimas: "Kopos", isbn: "F-12345", metai: 1965, puslapiai: 412, kiekis: 20, kaina: 20, kategorija: "Fantastika" },
    { pavadinimas: "Knygų vagilė", isbn: "HF-12345", metai: 2005, puslapiai: 552, kiekis: 8, kaina: 23, kategorija: "Istorinė fantastika" },
    { pavadinimas: "Enderio žaidimas", isbn: "SF-12345", metai: 1985, puslapiai: 324, kiekis: 15, kaina: 21, kategorija: "Mokslinė fantastika" },
    { pavadinimas: "Detektyvo šešėlyje", isbn: "D-12345", metai: 2010, puslapiai: 398, kiekis: 10, kaina: 18, kategorija: "Detektyvas" },
    { pavadinimas: "Meilė per atstumą", isbn: "R-12345", metai: 2018, puslapiai: 310, kiekis: 14, kaina: 15, kategorija: "Romantika" },
    { pavadinimas: "Protas ir emocijos", isbn: "P-12345", metai: 2022, puslapiai: 280, kiekis: 7, kaina: 28, kategorija: "Psichologija" },
    { pavadinimas: "Šypsenos terapija", isbn: "C-12345", metai: 2020, puslapiai: 240, kiekis: 18, kaina: 16, kategorija: "Komedija" },
    { pavadinimas: "Kibernetikos paslaptys", isbn: "IT-54321", metai: 2023, puslapiai: 300, kiekis: 10, kaina: 27, kategorija: "Informacinės technologijos" },
    { pavadinimas: "Galaktikos imperija", isbn: "F-54321", metai: 1970, puslapiai: 450, kiekis: 18, kaina: 22, kategorija: "Fantastika" },
    { pavadinimas: "Juokų knyga", isbn: "C-54321", metai: 2015, puslapiai: 150, kiekis: 25, kaina: 12, kategorija: "Komedija" },
    { pavadinimas: "Kibernetinė ateitis", isbn: "IT-54321", metai: 2023, puslapiai: 310, kiekis: 9, kaina: 26, kategorija: "Informacinės technologijos" },
    { pavadinimas: "Galaktikos užkariautojai", isbn: "F-54322", metai: 1972, puslapiai: 420, kiekis: 22, kaina: 19, kategorija: "Fantastika" },
    { pavadinimas: "Karo laikų meilė", isbn: "HF-54321", metai: 1945, puslapiai: 500, kiekis: 11, kaina: 24, kategorija: "Istorinė fantastika" },
    { pavadinimas: "Žvaigždžių mokslininkai", isbn: "SF-54321", metai: 2001, puslapiai: 350, kiekis: 17, kaina: 20, kategorija: "Mokslinė fantastika" },
    { pavadinimas: "Šerloko atgimimas", isbn: "D-54322", metai: 2012, puslapiai: 375, kiekis: 13, kaina: 17, kategorija: "Detektyvas" },
    { pavadinimas: "Ledi ir vagis", isbn: "R-54321", metai: 2016, puslapiai: 305, kiekis: 12, kaina: 16, kategorija: "Romantika" },
    { pavadinimas: "Sąmonės slėpiniai", isbn: "P-54321", metai: 2021, puslapiai: 290, kiekis: 8, kaina: 29, kategorija: "Psichologija" },
    { pavadinimas: "Komiko dienoraštis", isbn: "C-54322", metai: 2019, puslapiai: 200, kiekis: 20, kaina: 15, kategorija: "Komedija" },
    { pavadinimas: "Algoritmų magija", isbn: "IT-54323", metai: 2022, puslapiai: 280, kiekis: 14, kaina: 30, kategorija: "Informacinės technologijos" },
    { pavadinimas: "Uždraustos planetos", isbn: "F-54323", metai: 1975, puslapiai: 440, kiekis: 21, kaina: 21, kategorija: "Fantastika" },
    { pavadinimas: "Juoko alchemija", isbn: "C-54323", metai: 2002, puslapiai: 250, kiekis: 19, kaina: 14, kategorija: "Komedija" },
    { pavadinimas: "Komiko dienoraštis", isbn: "C-54322", metai: 2019, puslapiai: 200, kiekis: 20, kaina: 15, kategorija: "Komedija" },
    { pavadinimas: "Juoko alchemija", isbn: "C-54323", metai: 2002, puslapiai: 250, kiekis: 19, kaina: 14, kategorija: "Komedija" },
    { pavadinimas: "Algoritmų magija", isbn: "IT-54323", metai: 2022, puslapiai: 280, kiekis: 14, kaina: 30, kategorija: "Informacinės technologijos" },
    { pavadinimas: "Pasaulio pabaigos link", isbn: "SF-54324", metai: 1999, puslapiai: 350, kiekis: 17, kaina: 20, kategorija: "Mokslinė fantastika" },
    { pavadinimas: "Tyla prieš audrą", isbn: "R-54322", metai: 2017, puslapiai: 295, kiekis: 13, kaina: 15.5, kategorija: "Romantika" },
    { pavadinimas: "Emocijų žemėlapis", isbn: "P-54322", metai: 2023, puslapiai: 270, kiekis: 9, kaina: 27, kategorija: "Psichologija" },
    { pavadinimas: "Atgal į ateitį", isbn: "F-54324", metai: 1987, puslapiai: 380, kiekis: 16, kaina: 18, kategorija: "Fantastika" },
    { pavadinimas: "Išgirsti juoką", isbn: "C-54324", metai: 2016, puslapiai: 230, kiekis: 23, kaina: 17, kategorija: "Komedija" },
    { pavadinimas: "Kvantinė fizika pradedantiesiems", isbn: "IT-54324", metai: 2021, puslapiai: 220, kiekis: 15, kaina: 28, kategorija: "Informacinės technologijos" },
    { pavadinimas: "Teleportacijos paslaptys", isbn: "F-54325", metai: 2005, puslapiai: 380, kiekis: 20, kaina: 23, kategorija: "Fantastika" },
    { pavadinimas: "Renesanso alchemikai", isbn: "HF-54322", metai: 1500, puslapiai: 450, kiekis: 7, kaina: 35, kategorija: "Istorinė fantastika" },
    { pavadinimas: "Žvaigždžių inžinerija", isbn: "SF-54325", metai: 2100, puslapiai: 360, kiekis: 16, kaina: 22, kategorija: "Mokslinė fantastika" },
    { pavadinimas: "Mįslingasis detektyvas", isbn: "D-54323", metai: 2020, puslapiai: 360, kiekis: 14, kaina: 19, kategorija: "Detektyvas" },
    { pavadinimas: "Pirmoji meilė", isbn: "R-54323", metai: 2000, puslapiai: 330, kiekis: 21, kaina: 14, kategorija: "Romantika" },
    { pavadinimas: "Emocijų valdymas", isbn: "P-54323", metai: 2024, puslapiai: 300, kiekis: 11, kaina: 30, kategorija: "Psichologija" },
    { pavadinimas: "Humoristas išdykauja", isbn: "C-54325", metai: 2008, puslapiai: 180, kiekis: 26, kaina: 13, kategorija: "Komedija" },
    { pavadinimas: "Blockchain revoliucija", isbn: "IT-54325", metai: 2023, puslapiai: 320, kiekis: 13, kaina: 29, kategorija: "Informacinės technologijos" },
    { pavadinimas: "Galaktikos pakraštyje", isbn: "F-54326", metai: 1980, puslapiai: 400, kiekis: 18, kaina: 22.5, kategorija: "Fantastika" },
    { pavadinimas: "Viduramžių magija", isbn: "HF-54323", metai: 1250, puslapiai: 500, kiekis: 5, kaina: 40, kategorija: "Istorinė fantastika" },
    { pavadinimas: "Ateivių technologijos", isbn: "SF-54326", metai: 2025, puslapiai: 375, kiekis: 15, kaina: 21, kategorija: "Mokslinė fantastika" },
    { pavadinimas: "Žmogžudystė bibliotekoje", isbn: "D-54324", metai: 2015, puslapiai: 340, kiekis: 18, kaina: 18.5, kategorija: "Detektyvas" },
    { pavadinimas: "Meilės istorijos iš praeities", isbn: "R-54324", metai: 1950, puslapiai: 320, kiekis: 19, kaina: 15, kategorija: "Romantika" },
    { pavadinimas: "Sapnų analizė", isbn: "P-54324", metai: 2019, puslapiai: 310, kiekis: 10, kaina: 28.5, kategorija: "Psichologija" },
    { pavadinimas: "Juokingi pokalbiai", isbn: "C-54326", metai: 2011, puslapiai: 200, kiekis: 24, kaina: 12, kategorija: "Komedija" },
    { pavadinimas: "Programavimo ateitis", isbn: "IT-54330", metai: 2027, puslapiai: 290, kiekis: 12, kaina: 31, kategorija: "Informacinės technologijos" },
    { pavadinimas: "Požeminis pasaulis", isbn: "F-54330", metai: 1995, puslapiai: 420, kiekis: 17, kaina: 24, kategorija: "Fantastika" },
    { pavadinimas: "Vikingų legendos atgimsta", isbn: "HF-54330", metai: 800, puslapiai: 600, kiekis: 6, kaina: 38, kategorija: "Istorinė fantastika" },
    { pavadinimas: "Kelionė į juodąją skylę", isbn: "SF-54330", metai: 2030, puslapiai: 380, kiekis: 14, kaina: 23.5, kategorija: "Mokslinė fantastika" },
    { pavadinimas: "Paskutinis liudininkas", isbn: "D-54330", metai: 2007, puslapiai: 350, kiekis: 19, kaina: 17, kategorija: "Detektyvas" },
    { pavadinimas: "Meilė be ribų", isbn: "R-54330", metai: 2024, puslapiai: 335, kiekis: 22, kaina: 16, kategorija: "Romantika" },
    { pavadinimas: "Psichologijos revoliucija", isbn: "P-54330", metai: 2026, puslapiai: 320, kiekis: 11, kaina: 32, kategorija: "Psichologija" },
    { pavadinimas: "Laimės kodas", isbn: "C-54330", metai: 2014, puslapiai: 250, kiekis: 28, kaina: 13.5, kategorija: "Komedija" },
];

let filteredKnygos = [...knygos];

function rodytiKnygas(knygosList = filteredKnygos) {
    const knyguSarasas = document.getElementById('knyguSarasas');
    knyguSarasas.innerHTML = "";
    knygosList.forEach((knyga, index) => {
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

        return (
            (kategorija === '' || knygosKategorija.includes(kategorija)) &&
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
            <p style="text-align: center; font-size: 1.5em; color: #333333; margin-top: 20px;">
                ${randomMessage}
            </p>
        `;
    } else {
        noResults.style.display = 'none';
        rodytiKnygas();
    }
}

function atstatytiFiltrai() {
    document.getElementById('kategorijosFiltras').value = '';
    document.getElementById('pavadinimoPaieska').value = '';
    document.getElementById('minPuslapiai').value = '';
    document.getElementById('maxPuslapiai').value = '';

    filteredKnygos = [...knygos];
    rodytiKnygas();
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
    rodytiKnygas();
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
    document.getElementById('resetFilters').addEventListener('click', atstatytiFiltrai);
    document.getElementById('skaiciuotiInventoriausVerte').addEventListener('click', apskaiciuotiInventoriausVerte);
});