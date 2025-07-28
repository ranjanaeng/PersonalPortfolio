function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
  }
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