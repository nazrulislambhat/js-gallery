let imageSelector = document.querySelectorAll('#image');
for (let i = 0; i < imageSelector.length; i++) {
  imageSelector[i].addEventListener('click', zoomImage);
}
function zoomImage() {
  if (document.documentElement.requestFullscreen) {
    this.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    this.mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    this.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    this.msRequestFullscreen();
  }
}
