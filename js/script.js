const btnHam = document.getElementById('menu-hamburger');
const spans = document.querySelectorAll('#menu-hamburger span');
const menuToggle = document.getElementById('toggled-menu');
let isToggled = false;

btnHam.addEventListener('click', function() {
    isToggled = !isToggled;
    if (isToggled) {
        spans[0].style.transform = "translateY(14px) rotate(45deg)";
        spans[1].style.opacity = 0;
        spans[2].style.transform = "translateY(-14px) rotate(-45deg)";
        menuToggle.style.left = '0';
    } else {
        spans[0].style.transform = "translateY(0px) rotate(0)";
        spans[1].style.opacity = 1;
        spans[2].style.transform = "translateY(0px) rotate(0)";
        menuToggle.style.left = '-100%';
    }
});