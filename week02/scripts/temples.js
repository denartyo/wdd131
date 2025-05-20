// Update footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
    hamburger.textContent = '\u2630'; // Hamburger icon ☰
  } else {
    navMenu.style.display = 'flex';
    hamburger.textContent = '\u2715'; // Close icon ✕
  }
});
