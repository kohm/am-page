function revealContent() {
  var element = document.getElementsByClassName('main');
  element[0].classList.remove('hidden');
}

window.addEventListener('load', function () {
  revealContent();
});