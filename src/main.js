const menu = document.getElementById('backdrop');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
    backdrop.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
});