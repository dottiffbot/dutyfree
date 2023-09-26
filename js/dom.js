import LocomotiveScroll from 'locomotive-scroll';
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
    copyToClipboard("dutyfreedesigncoop@gmail.com");
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

export const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    initPosition: { x: 0, y: 0 },
    // Add other options and callbacks as needed
    lerp: 0.05,
    smoothMobile: true
});

document.addEventListener('DOMContentLoaded', function () {
    scroller.update();
});

const anchorLinks = document.querySelectorAll('nav a');

anchorLinks.forEach((anchorLink) => {
    let hashval = anchorLink.getAttribute('href');
    let target = document.querySelector(hashval);

    anchorLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        scroller.scrollTo(target);
    });
});