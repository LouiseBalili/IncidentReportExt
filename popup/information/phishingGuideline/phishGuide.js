document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('main#carousel');
    const items = document.querySelectorAll('div.item');
    let isDragging = false;
    let startX = 0;
    let currentPosition = 1;
    const totalItems = items.length;

    carousel.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.pageX;
        carousel.style.cursor = 'grabbing';
    });
    
    carousel.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        const diff = e.pageX - startX;
        if (diff > 100 && currentPosition > 1) {
            currentPosition--;
            updateCarousel();
            startX = e.pageX;
        } else if (diff < -100 && currentPosition < totalItems) {
            currentPosition++;
            updateCarousel();
            startX = e.pageX;
        }
    });

    carousel.addEventListener('mouseup', function () {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseleave', function () {
        isDragging = false;
        carousel.style.cursor = 'grab';
    });

    function updateCarousel() {
        items.forEach((item, index) => {
            item.style.setProperty('--position', currentPosition );
            item.style.setProperty('--offset', index + 1 );
        });
    }

    updateCarousel();
});