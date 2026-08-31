const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');

menuToggle.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('.navbar nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.navbar nav a');

window.addEventListener('scroll', () => {
  let current = 'beranda';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

function downloadCV(event) {
  event.preventDefault();
  alert('Tempatkan file CV kamu dengan nama "CV-Andrian.pdf" di folder website, lalu ubah fungsi ini menjadi link langsung ke file tersebut.');
}
