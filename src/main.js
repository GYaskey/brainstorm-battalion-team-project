document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('backdrop');
  const openButton = document.getElementById('openButton');
  const closeButton = document.getElementById('closeButton');
  const menuLinks = document.querySelectorAll('.nav-header-item a');

  function openMenu() {
    backdrop.classList.add('is-open');
    backdrop.classList.remove('is-closed');
    document.querySelector('.menu_header').classList.add('is-open');
    document.querySelector('.menu_header').classList.remove('is-closed');
  }

  function closeMenu() {
    backdrop.classList.add('is-closed');
    backdrop.classList.remove('is-open');
    document.querySelector('.menu_header').classList.add('is-closed');
    document.querySelector('.menu_header').classList.remove('is-open');
  }

  openButton.addEventListener('click', openMenu);

  closeButton.addEventListener('click', closeMenu);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    });
  });
});
