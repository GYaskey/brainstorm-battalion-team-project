const menu = document.getElementById('menu');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
    menu.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('is-open');
});