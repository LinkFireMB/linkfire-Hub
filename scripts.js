document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const allCards = document.querySelectorAll('.card');
    const footer = document.querySelector('footer');
    const backToTopButton = document.getElementById('back-to-top');
    const lastUpdatedElement = document.getElementById('last-updated');
    const randomizerBtn = document.getElementById('randomizer-btn');
    const siteName = document.getElementById('site-name');
    const siteLink = document.getElementById('site-link');

    const sites = [
        {
            name: "GamesReview-UA",
            url: "https://linkfiremb.github.io/siteproject/"
        },
        {
            name: "Thost",
            url: "https://linkfiremb.github.io/thost-site/"
        },
        {
            name: "Subnautica",
            url: "https://linkfiremb.github.io/subnautica-alterra/"
        },
        {
            name: "AutoSell",
            url: "https://linkfiremb.github.io/AutoSell-Project/"
        },
        {
            name: "SCP Foundation",
            url: "https://linkfiremb.github.io/SCP-Foundation/index.html"
        }
    ];

    function toggleTheme() {
        const isDarkMode = body.classList.toggle('dark-mode');
        allCards.forEach(card => card.classList.toggle('dark-mode'));
        footer.classList.toggle('dark-mode');
        themeToggleButton.classList.toggle('dark-mode');
        themeToggleButton.innerHTML = isDarkMode ? '☀️' : '🌙';
    }

    function setLastUpdatedDate() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString('uk-UA', {
            weekday: 'long', 
            year: 'numeric',
            month: 'long',   
            day: 'numeric',  
            hour: '2-digit', 
            minute: '2-digit', 
        });
        lastUpdatedElement.textContent = formattedDate;
    }


    themeToggleButton.addEventListener('click', toggleTheme);


    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 200 ? 'flex' : 'none';
    });


    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    randomizerBtn.addEventListener('click', () => {
        const randomSite = sites[Math.floor(Math.random() * sites.length)];
        siteName.textContent = randomSite.name;
        siteLink.href = randomSite.url;
        siteLink.textContent = "Перейти на сайт";
    });


    setLastUpdatedDate();
});

