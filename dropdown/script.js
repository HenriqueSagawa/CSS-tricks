const dropdownBtn = document.getElementById('btn');
const dropdownMenu = document.getElementById('dropdown');
const toggleArrow = document.getElementById('arrow');

const toggleDropdown = function () {
    dropdownMenu.classList.toggle('show');
    toggleArrow.classList.toggle('arrow');
}

dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
});