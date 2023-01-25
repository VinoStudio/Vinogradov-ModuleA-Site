let button = document.querySelector('.popup_button');
button.addEventListener('click', showPopup);
function showPopup() {
  document.querySelector('.popup').classList.toggle('visible');
  console.log('showPopup работает')
}
