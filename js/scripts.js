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
    
  // Função para buscar repositórios do GitHub
    function fetchGitHubRepos() {
    const githubUsername = "camsste";
    const githubToken = "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";

    fetch(`https://api.github.com/users/${githubUsername}/repos`, {
        headers: {
            Authorization: `token ${githubToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // Manipule os dados recebidos da API do GitHub aqui
        console.log(data); // Exemplo de saída dos dados no console
    })
    .catch(error => {
        console.error('Erro ao acessar API do GitHub:', error);
    });
}

    // Chame a função para buscar repositórios do GitHub assim que o PWA for carregado
    fetchGitHubRepos();
