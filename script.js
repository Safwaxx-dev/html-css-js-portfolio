const overlay = document.getElementById('overlay');
const sideBarButton = document.getElementById('sideBarButton');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

// Show overlay and sidebar
sideBarButton.addEventListener("click", () => {
    overlay.style.display = "block";
    sideMenu.style.right = "0px";
});

// Hide overlay and sidebar when close button is clicked
closeBtn.addEventListener('click', () => {
    overlay.style.display = "none";
    sideMenu.style.right = "-175px"; // Hides the sidebar
});

// Hide overlay and sidebar when Home is clicked
const home = document.getElementById('tohome');
home.addEventListener('click', () => {
    overlay.style.display = "none";
    sideMenu.style.right = "-175px"; // Use right property instead of display
});
// Hide overlay and sidebar when about is clicked
const about = document.getElementById('about');
about.addEventListener('click', () => {
    overlay.style.display = "none";
    sideMenu.style.right = "-175px"; // Use right property instead of display
});
// Hide overlay and sidebar when experience is clicked
const experienc = document.getElementById('experienc');
experienc.addEventListener('click', () => {
    overlay.style.display = "none";
    sideMenu.style.right = "-175px"; // Use right property instead of display
});
// Hide overlay and sidebar when Contact is clicked
const contactme = document.getElementById('contactme');
contactme.addEventListener('click', () => {
    overlay.style.display = "none";
    sideMenu.style.right = "-175px"; // Use right property instead of display
});

// Also hide sidebar when clicking anywhere on the overlay
overlay.addEventListener('click', () => {
    overlay.style.display = "none";
    sideMenu.style.right = "-175px"; // Hides the sidebar
});
