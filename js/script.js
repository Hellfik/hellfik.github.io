const btnHam = document.getElementById('menu-hamburger');
const spans = document.querySelectorAll('#menu-hamburger span');
const menuToggle = document.getElementById('toggled-menu');
const pageWidth = document.documentElement.clientWidth;
const loadScreen = document.getElementById('loadingScreen');
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

function displayWindowSize() {
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;

    if (w > 769) {
        spans[0].style.transform = "translateY(0px) rotate(0)";
        spans[1].style.opacity = 1;
        spans[2].style.transform = "translateY(0px) rotate(0)";
        menuToggle.style.left = '-100%';
        isToggled = false;
    }
    console.log(isToggled);
}
// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);

// Calling the function for the first time
displayWindowSize();

window.addEventListener('load', function() {
    loadScreen.style.display = "none";
})