const link = document.querySelector('#email');

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            link.classList.add('copied');
            setTimeout(() => {
                link.classList.remove('copied');
            }, 2000); // Reset after 2 seconds
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
        });
}

link.addEventListener('click', () => {
    copyToClipboard(link.textContent);
});

link.addEventListener('mouseenter', () => {
    if (link.classList.contains('copied')) {
        link.classList.remove('copied');
    }
});

// Define the array of color combinations
const colorCombinations = [
    { bg: '#ECECEC', color: '#243439' },
    { bg: '#243439', color: '#BBBBBB' },
    { bg: '#06C3FF', color: '#243439' },
    { bg: '#DBD5C8', color: '#FF0D21' }
];

// Generate a random index
const randomIndex = Math.floor(Math.random() * colorCombinations.length);

// Get the selected color combination
const selectedColors = colorCombinations[randomIndex];

// Update CSS variables with the selected colors
document.documentElement.style.setProperty('--duty-bg', selectedColors.bg);
document.documentElement.style.setProperty('--duty-text', selectedColors.color);

// butter.js
butter.init({ wrapperId: 'butter', cancelOnTouch: true });

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    console.log('Window Scroll Top:', scrollTop);
});