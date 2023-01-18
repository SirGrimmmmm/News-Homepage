let off = document.querySelector('#offcanvas');
let bg = off.querySelector('.background');
let btnClose = off.querySelector('.btn-close_img');
let menuBtn = document.querySelector('.navigation_menu');

function bgFunc(e) {
  if (e.target == bg) {
    off.classList.remove('open')
  }
}

menuBtn.addEventListener('click', function () {
  if (!off.classList.contains('open')) {
    off.classList.add('open');
  }
  document.addEventListener('click', bgFunc)
})

btnClose.addEventListener('click', function () {
  off.classList.remove('open')
  document.removeEventListener('click', bgFunc);
})