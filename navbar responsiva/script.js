const menu = document.querySelector('.navbar ul');
const btn = document.getElementById('dropdown-btn');

function toggleMenu() {
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}