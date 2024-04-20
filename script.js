const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    if (menu.style.left === "-250px") {
        menu.style.left = "0";
    } else {
        menu.style.left = "-250px";
    }
});
