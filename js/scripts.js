document.addEventListener('DOMContentLoaded', () => {

    // Cache de seletores
    const mainNav = document.querySelector('#mainNav');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Navbar shrink function
    let isNavbarShrunk = false;
    const navbarShrink = () => {
        if (!mainNav) return;
        const shouldShrink = window.scrollY !== 0;
        if (shouldShrink !== isNavbarShrunk) {
            isNavbarShrunk = shouldShrink;
            mainNav.classList.toggle('navbar-shrink', shouldShrink);
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
    responsiveNavItems.forEach(responsiveNavItem => {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});