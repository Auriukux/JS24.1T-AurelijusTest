document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addBookForm');
    const bookList = document.getElementById('bookList');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        addBook();
    });

    function addBook() {
        const title = document.getElementById('bookTitle').value.trim();
        const author = document.getElementById('bookAuthor').value.trim();

        if (title && author) {
            if (bookList.classList.contains('hidden')) {
                bookList.classList.remove('hidden');
                const listTitle = document.createElement('h2');
                listTitle.textContent = 'Knygų sąrašas';
                bookList.appendChild(listTitle);
            }

            const bookElement = document.createElement('div');
            bookElement.className = 'book-item';
            bookElement.innerHTML = `
                <span>${title} - ${author}</span>
                <button class="status-btn book-unread">Neperskaityta</button>
            `;

            const statusButton = bookElement.querySelector('.status-btn');
            statusButton.addEventListener('click', function () {
                this.classList.toggle('book-read');
                this.classList.toggle('book-unread');
                this.textContent = this.classList.contains('book-read') ? 'Perskaityta' : 'Neperskaityta';
            });

            bookList.appendChild(bookElement);
            form.reset();
        }
    }
});