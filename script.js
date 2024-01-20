window.addEventListener('scroll', () => {
    const navMenu = document.getElementById('navMenu');
    if (window.scrollY > 50) {
        navMenu.style.background = 'linear-gradient(90deg, rgba(9,121,11,1) 0%, rgba(0,71,6,1) 100%)';
    } else {
        navMenu.style.background = 'linear-gradient(90deg, rgba(0,71,6,1) 0%, rgba(9,121,11,1) 100%)';
    }
});

