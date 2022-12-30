const toggleNav = document.querySelector('header svg');

toggleNav.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});