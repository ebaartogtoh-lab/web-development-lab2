// Dark mode товчлуурын үйлдэл
const themeBtn = document.getElementById('theme-toggle-btn');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.textContent = 'Dark';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.textContent = 'Light';
    }
});

// Stagger effect динамикаар олгох
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.style.setProperty('--delay', `${index * 0.2}s`);
});