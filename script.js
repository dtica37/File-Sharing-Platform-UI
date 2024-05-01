const sidebar = document.querySelector('.sidebar');
const tableBody = document.querySelector('.main table tbody');
const menuBtn = document.getElementById('menu-btn');
const leftSection = document.querySelector('.left-section');

let isMenuOpen = false;

const deactivateSidebarItems = () => {
    sidebar.querySelectorAll('.item.active').forEach(item => {
        item.classList.remove('active');
    });
};

const deselectTableRows = () => {
    tableBody.querySelectorAll('tr.selected').forEach(row => {
        row.classList.remove('selected');
    });
};

sidebar.addEventListener('click', event => {
    const clickedItem = event.target.closest('.item');
    if (clickedItem) {
        deactivateSidebarItems();
        clickedItem.classList.add('active');
    }
});

tableBody.addEventListener('click', event => {
    const clickedRow = event.target.closest('tr');
    if (clickedRow) {
        deselectTableRows();
        clickedRow.classList.add('selected');
    }
});

menuBtn.addEventListener('click', () => {
    const newPosition = isMenuOpen ? '-160px' : '0';
    leftSection.style.left = newPosition;
    isMenuOpen = !isMenuOpen;
});
