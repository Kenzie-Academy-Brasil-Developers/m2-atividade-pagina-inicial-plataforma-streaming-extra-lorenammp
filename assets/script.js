const menu = document.getElementById('menuList');
const navBtn = document.getElementById('nav-link-btn');

navBtn.addEventListener('click', (event) => {
    menu.classList.toggle('show');
});

const header = document.getElementById('headerMenu');

window.addEventListener('scroll', (e) => {
    if(window.scrollY > 50) {
        header.classList.add('black-bg');
    }

    if(window.scrollY < 50) {
        header.classList.remove('black-bg');
    }
})