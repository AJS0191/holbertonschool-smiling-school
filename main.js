document.addEventListener("DOMContentLoaded", function() {
  const menuBtn = document.querySelector('.menu-btn');
  const navMenu = document.querySelector('.nav-links');
  let menuOpen = false;
  if(menuBtn == null) {
    console.log(document)
  }
  menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open')
      navMenu.classList.add('appear')
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open')
      navMenu.classList.remove('appear')
      menuOpen = false;
    }
  });
});
