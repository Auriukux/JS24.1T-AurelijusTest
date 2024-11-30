document.addEventListener('DOMContentLoaded', function () {
    let modal = document.querySelector('.modal');
    let modalImg = document.getElementById('expandedImg');
    let captionText = document.getElementById('caption');
    let closeBtn = document.querySelector('.close');
    let showBtn = document.getElementById('showBtn');
    let shuffleBtn = document.getElementById('shuffleBtn');
    let gallery = document.querySelector('.gallery');
    let images = document.querySelectorAll('.gallery img');

    images.forEach(img => img.style.display = 'none');
    shuffleBtn.style.display = 'none';

    function showAndShuffleImages() {
        let shuffledImages = Array.from(images).sort(() => Math.random() - 0.5);
        gallery.innerHTML = '';
        shuffledImages.forEach(img => {
            img.style.display = 'block';
            gallery.appendChild(img);
        });
        shuffleBtn.style.display = 'block';
        showBtn.style.display = 'none';
    }

    showBtn.onclick = function () {
        if (gallery.children.length === 0 || Array.from(gallery.children).every(img => img.style.display === 'none')) {
            showAndShuffleImages();
        }
    };

    shuffleBtn.onclick = function () {
        let tempImages = Array.from(gallery.children);
        tempImages.sort(() => Math.random() - 0.5);
        gallery.innerHTML = '';
        tempImages.forEach(img => gallery.appendChild(img));
    };

    images.forEach(img => {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    showBtn.onclick = showAndShuffleImages;
});