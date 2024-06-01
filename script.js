document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme == 'dark')  {
        document.body.classList.add('night-mode');
        themeIcon.src = 'moon.svg';
    } 
    else {
        document.body.classList.add('light-mode');
        themeIcon.src = 'sun.svg'; 
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        document.body.classList.toggle('light-mode');

        let theme = 'light';
        if (document.body.classList.contains('night-mode')) {
            themeIcon.src = 'moon.svg';
            localStorage.setItem('theme', 'night');
        }
        else {
            themeIcon.src = 'sun.svg';
            localStorage.setItem('theme', 'light');
        }
    });
});