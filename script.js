document.addEventListener('DOMContentLoaded', () => {

  /* ── REMOVE PAGE INTRO AFTER IT RUNS ── */
  setTimeout(() => {
    const introEl = document.getElementById('page-intro');
    if (introEl) introEl.style.display = 'none';
  }, 3000); 

  /* ── STARFIELD & PARTICLE LOGIC ── */
  const starfield = document.getElementById('starfield');
  let stars = [];
  
  function createStarfield() {
      const starCount = 300;
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < starCount; i++) {
          const starEl = document.createElement('div');
          starEl.className = 'star';
          const size = Math.random() * 2 + 1;
          starEl.style.width = `${size}px`;
          starEl.style.height = `${size}px`;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          starEl.style.top = `${top}%`;
          starEl.style.left = `${left}%`;
          const duration = Math.random() * 8 + 3;
          starEl.style.animationDuration = `${duration}s`;
          starEl.style.animationDelay = `${Math.random() * 5}s`;
          const originalOpacity = 0.2 + Math.random() * 0.8;
          starEl.style.opacity = `${originalOpacity}`;
          fragment.appendChild(starEl);
          stars.push({
              element: starEl,
              px: left, 
              py: top,  
              isFading: false
          });
      }
      starfield.appendChild(fragment);
  }

  function createRipple(x, y) {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1500);
  }

  function createParticle(x, y) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      const startX = x + (Math.random() - 0.5) * 20;
      const startY = y + (Math.random() - 0.5) * 20;
      particle.style.left = `${startX}px`;
      particle.style.top = `${startY}px`;
      document.body.appendChild(particle);
      
      const duration = 1500 + Math.random() * 1000;
      const endX = (Math.random() - 0.5) * 200;
      const endY = (Math.random() - 0.5) * 200;
      particle.animate([
          { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          { transform: `translate(${endX}px, ${endY}px) scale(0)`, opacity: 0 }
      ], { duration: duration, easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' });
      setTimeout(() => particle.remove(), duration);
  }
  
  createStarfield();

  /* ── CUSTOM CURSOR (desktop only) ── */
  const isTouch = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isTouch) {
    const dot  = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    const cursorLight = document.getElementById('cursorLight');
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    document.addEventListener('mousemove', e => { 
      mx = e.clientX; 
      my = e.clientY; 
      
      if (cursorLight) {
          cursorLight.style.left = `${e.clientX}px`;
          cursorLight.style.top = `${e.clientY}px`;
      }
      
      const touchRadius = 50;
      
      stars.forEach(star => {
          if (star.isFading) return;
          const absX = (star.px / 100) * window.innerWidth;
          const absY = (star.py / 100) * window.innerHeight;
          const dx = absX - e.clientX;
          const dy = absY - e.clientY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < touchRadius) {
              star.isFading = true;
              star.element.classList.add('faded');
              for (let i = 0; i < 3; i++) {
                  createParticle(e.clientX, e.clientY);
              }
              setTimeout(() => {
                  star.element.classList.remove('faded');
                  star.isFading = false;
              }, 2000);
          }
      });
    });
    
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));

    document.addEventListener('click', (e) => {
        createRipple(e.clientX, e.clientY);
        for (let i = 0; i < 20; i++) {
            createParticle(e.clientX, e.clientY);
        }
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });

    document.querySelectorAll('a, button, [data-video-src], input, textarea, .c-card').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    (function loop() {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(loop);
    })();
  }

  /* ── TYPING EFFECT ── */
  const typingEl = document.getElementById('typing-effect');
  const words = ['Motion Graphics', 'Color Grading', 'Audio Editing', 'Rotoscoping', 'SFX', 'MASKING'];
  let wi = 0, ci = 0, deleting = false;
  function type() {
    const w = words[wi];
    typingEl.textContent = deleting ? w.slice(0, ci - 1) : w.slice(0, ci + 1);
    deleting ? ci-- : ci++;
    let delay = deleting ? 60 : 125;
    if (!deleting && ci === w.length) { deleting = true; delay = 1800; }
    else if (deleting && ci === 0)   { deleting = false; wi = (wi + 1) % words.length; }
    setTimeout(type, delay);
  }
  type();

  /* ── NAV SCROLL STYLE ── */
  const mainNav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    mainNav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* ── HAMBURGER ── */
  const ham    = document.getElementById('nav-ham');
  const drawer = document.getElementById('mobile-drawer');
  ham.addEventListener('click', () => {
    const isOpen = ham.classList.toggle('open');
    drawer.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    ham.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }));

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* ── ACTIVE NAV LINK ── */
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ── INTERSECTION OBSERVER for reveals ── */
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revObs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => revObs.observe(el));

  /* ── SKILL BARS ── */
  const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.style.width = e.target.dataset.width; skillObs.unobserve(e.target); }
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('.skill-fill').forEach(b => skillObs.observe(b));

  /* ── TESTIMONIAL CARDS ── */
  const testiObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); testiObs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.testi-card').forEach(c => testiObs.observe(c));

  /* ── VIDEO MODAL ── */
  const modal  = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  function closeModal() { modal.classList.remove('active'); setTimeout(() => iframe.src = '', 400); }
  document.querySelectorAll('[data-video-src]').forEach(el => {
    el.addEventListener('click', () => {
      iframe.src = el.dataset.videoSrc + '?autoplay=1';
      modal.classList.add('active');
    });
  });
  document.getElementById('modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── ORIGINAL CAROUSEL LOGIC WITH UNIVERSAL MOVEMENT ── */
  const scrollContainerGroup = document.querySelector('.scroll-container-group');
  if (scrollContainerGroup) {
      const scrollContainer = scrollContainerGroup.querySelector('.portfolio-scroll-container');
      const portfolioRow = scrollContainerGroup.querySelector('.portfolio-row');
      const leftBtn = scrollContainerGroup.querySelector('#scroll-left-btn');
      const rightBtn = scrollContainerGroup.querySelector('#scroll-right-btn');
      let isScrolling;
      let isProgrammaticScroll = false;

      const originalCards = Array.from(portfolioRow.children);
      const cloneCount = originalCards.length;

      // Duplicate elements for infinite loop
      originalCards.forEach(card => {
          const clone = card.cloneNode(true);
          portfolioRow.appendChild(clone);
      });
      originalCards.slice().reverse().forEach(card => {
          const clone = card.cloneNode(true);
          portfolioRow.prepend(clone);
      });

      const updateCenterCard = () => {
          const containerCenter = scrollContainer.getBoundingClientRect().left + scrollContainer.offsetWidth / 2;
          let minDistance = Infinity;
          let centerCard = null;

          Array.from(portfolioRow.children).forEach(card => {
              const cardRect = card.getBoundingClientRect();
              const cardCenter = cardRect.left + cardRect.width / 2;
              const distance = Math.abs(containerCenter - cardCenter);

              if (distance < minDistance) {
                  minDistance = distance;
                  centerCard = card;
              }
              card.classList.remove('is-center');
          });

          if (centerCard) {
              centerCard.classList.add('is-center');
          }
      };

      const setInitialPosition = () => {
          const firstOriginalCard = portfolioRow.children[cloneCount];
          if (!firstOriginalCard) return;
          const initialScroll = firstOriginalCard.offsetLeft - (scrollContainer.offsetWidth / 2) + (firstOriginalCard.offsetWidth / 2);
          scrollContainer.scrollLeft = initialScroll;
          setTimeout(updateCenterCard, 50);
      };

      const scrollToCard = (direction) => {
          const currentCenter = portfolioRow.querySelector('.is-center') || portfolioRow.children[cloneCount];
          let targetCard = direction === 'next' 
              ? currentCenter.nextElementSibling 
              : currentCenter.previousElementSibling;

          if (targetCard) {
              isProgrammaticScroll = true;
              const scrollPos = targetCard.offsetLeft - (scrollContainer.offsetWidth / 2) + (targetCard.offsetWidth / 2);
              scrollContainer.scrollTo({
                  left: scrollPos,
                  behavior: 'smooth'
              });
              setTimeout(() => {
                  isProgrammaticScroll = false;
                  updateCenterCard();
              }, 550);
          }
      };

      leftBtn.addEventListener('click', () => scrollToCard('prev'));
      rightBtn.addEventListener('click', () => scrollToCard('next'));

      scrollContainer.addEventListener('scroll', () => {
          if (!isProgrammaticScroll) {
              updateCenterCard();
          }
          window.clearTimeout(isScrolling);
          isScrolling = setTimeout(() => {
              const currentCenter = portfolioRow.querySelector('.is-center');
              if (!currentCenter) return;

              const allCards = Array.from(portfolioRow.children);
              const centerIndex = allCards.indexOf(currentCenter);

              if (centerIndex >= cloneCount * 2) {
                  const newCenterIndex = centerIndex - cloneCount;
                  const newScrollLeft = allCards[newCenterIndex].offsetLeft - (scrollContainer.offsetWidth / 2) + (allCards[newCenterIndex].offsetWidth / 2);
                  scrollContainer.scrollLeft = newScrollLeft;
              }
              else if (centerIndex < cloneCount) {
                  const newCenterIndex = centerIndex + cloneCount;
                  const newScrollLeft = allCards[newCenterIndex].offsetLeft - (scrollContainer.offsetWidth / 2) + (allCards[newCenterIndex].offsetWidth / 2);
                  scrollContainer.scrollLeft = newScrollLeft;
              }
          }, 150);
      }, { passive: true });

      setInitialPosition();
      window.addEventListener('resize', setInitialPosition);
  }

  /* ── CONTACT FORM ── */
  const form    = document.getElementById('contact-form');
  const submitB = document.getElementById('submit-btn');
  const btnTxt  = document.getElementById('btn-text');
  const spinner = document.getElementById('spinner');
  const msg     = document.getElementById('form-message');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    btnTxt.textContent = 'Sending...';
    spinner.style.display = 'block';
    submitB.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        msg.textContent = "Message sent — I'll be in touch soon.";
        msg.className = 'form-msg success';
        form.reset();
      } else {
        msg.textContent = 'Something went wrong. Please try again.';
        msg.className = 'form-msg error';
      }
    } catch (_) {
      msg.textContent = 'Network error. Please try again.';
      msg.className = 'form-msg error';
    } finally {
      msg.style.display = 'block';
      btnTxt.textContent = 'Send Message';
      spinner.style.display = 'none';
      submitB.disabled = false;
      setTimeout(() => { msg.style.display = 'none'; }, 6000);
    }
  });

});
