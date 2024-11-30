document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    for (let i = 1; i <= 12; i++) {
        let div = document.createElement('div');
        div.textContent = i;
        div.className = 'grid-item';
        div.addEventListener('click', function () {
            this.style.backgroundColor = getRandomColor();
        });
        grid.appendChild(div);
    }
});