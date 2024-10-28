// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toHome = document.querySelector('.btn-to-home');
  const about = document.querySelector('#about');
  const fixedabout = about.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }

  if (window.scrollY > fixedabout) {
    toHome.classList.remove('hidden');
  } else {
    toHome.classList.add('hidden');
  }
};

// DarkMode
const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

checkbox.addEventListener('click', () => {
  checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');
});

// Contact Form
const btnKrim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const pesan = document.querySelector('.pesanTerkirim');
const pesanT = document.querySelector('.pesanTidakTerkirim');
const tblHapus = document.querySelectorAll('.tblHapus');

// Script Form Contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbxfQnnYbCGMNPSjUmH87whBBEnuWQ9_EVacbghgHvdC92iucYM3YqG3b0m5RLdo5lg/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //ketika tombol summbit diklik
  btnLoading.classList.toggle('hidden');
  btnKrim.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle('hidden');
      btnKrim.classList.toggle('hidden');
      pesan.classList.remove('hidden');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => {
      pesanT.classList.remove('hidden');
      setTimeout(() => btnKrim.classList.toggle('hidden'), 3000);
      console.error('Error!', error.message);
    });
});

// Ketika tombol x di tekan
tblHapus.forEach((tbl) => {
  tbl.addEventListener('click', () => {
    pesan.classList.add('hidden');
    pesanT.classList.add('hidden');
  });
});
