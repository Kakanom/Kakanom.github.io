document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const popup = document.querySelector('.popup');
    const popupImg = document.querySelector('.popup-img');
    const closeBtn = document.querySelector('.popup .close');
    const prevBtn = document.querySelector('.popup .prev');
    const nextBtn = document.querySelector('.popup .next');

    let currentPopupIndex = 0;

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => openPopup(index));
    });

    function openPopup(index) {
        currentPopupIndex = index;
        popupImg.src = galleryImages[index].src;
        popup.style.display = 'block';
        checkArrows();
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    function nextPopup() {
        currentPopupIndex = (currentPopupIndex + 1) % galleryImages.length;
        popupImg.src = galleryImages[currentPopupIndex].src;
        checkArrows();
    }

    function prevPopup() {
        currentPopupIndex = (currentPopupIndex - 1 + galleryImages.length) % galleryImages.length;
        popupImg.src = galleryImages[currentPopupIndex].src;
        checkArrows();
    }

    function checkArrows() {
        if (currentPopupIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }
        if (currentPopupIndex === galleryImages.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closePopup();
        } else if (event.key === 'ArrowLeft') {
            prevPopup();
        } else if (event.key === 'ArrowRight') {
            nextPopup();
        }
    });

    closeBtn.addEventListener('click', closePopup);
    prevBtn.addEventListener('click', prevPopup);
    nextBtn.addEventListener('click', nextPopup);
});