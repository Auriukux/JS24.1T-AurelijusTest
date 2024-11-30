document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();

        if (title && author) {
            const bookDiv = document.createElement('div');
            bookDiv.className = 'book';
            bookDiv.innerHTML = `
                <h3>${title}</h3>
                <p>Autorius: ${author}</p>
                <button onclick="toggleReadStatus(this)">Neperskaityta</button>
            `;
            bookList.appendChild(bookDiv);
            console.log('Knyga pridėta:', title, ' Autorius:', author);

            form.reset();
        } else {
            console.warn('Neįvestas knygos pavadinimas arba autorius.');
        }
    });

    window.toggleReadStatus = function (button) {
        if (button && button.parentElement) {
            const bookElement = button.parentElement;
            const status = button.textContent === 'Neperskaityta' ? 'Perskaityta' : 'Neperskaityta';
            console.log('Knygos statusas pakeistas:', bookElement.querySelector('h3').textContent, 'į', status);
            button.textContent = status;
            bookElement.classList.toggle('read');
        } else {
            console.error('Klaida keičiant knygos statusą: mygtukas arba tėvinis elementas nerastas.');
        }
    };
});