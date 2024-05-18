window.addEventListener('scroll', function() {
    const header = document.querySelector(".header");
    const firstScreenHeight = window.innerHeight;
    const secondScreenOffset = firstScreenHeight * 1.5;
    const headerHeight = header.offsetHeight;
    
    if (window.scrollY < firstScreenHeight) {
        header.classList.remove('active');
        document.body.style.paddingTop = '0';
    } else {
        header.classList.add('active');
        document.body.style.paddingTop = headerHeight;
    }
});