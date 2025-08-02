
  
  document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.getElementById('backToTop');
    window.onscroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      backToTop.style.display = scrollY > 300 ? 'block' : 'none';

      document.querySelectorAll('section').forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < window.innerHeight - 50) {
          sec.classList.add('visible');
        }
      });
    };

// Hamburger menu toggle
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

//hamMenu.addEventListener("click", () => {
  //hamMenu.classList.toggle("active");
  //offScreenMenu.classList.toggle("active");
//});

if (hamMenu && offScreenMenu) {
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked (mobile)
  offScreenMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        hamMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
      }
    });
  });

  // Always close menu if resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamMenu.classList.remove("active");
      offScreenMenu.classList.remove("active");
    }
  });
}
  });