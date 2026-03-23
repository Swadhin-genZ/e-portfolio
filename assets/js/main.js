/* ===== SHOW & CLOSE MENU ===== */
    const navMenu   = document.getElementById('nav_menu');
    const navToggle = document.getElementById('nav_toggle');
    const navClose  = document.getElementById('nav_close');

    if(navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
    if(navClose)  navClose.addEventListener('click',  () => navMenu.classList.remove('show-menu'));

    /* ===== REMOVE MOBILE MENU ON LINK CLICK ===== */
    document.querySelectorAll('.nav_link').forEach(n =>
      n.addEventListener('click', () => navMenu.classList.remove('show-menu'))
    );

    /* ===== TYPED.JS ===== */
    new Typed('#home_typed', {
      strings: ['Web Developer', 'Software Engineer', 'Freelancer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
      cursorChar: "_",
    });

    /* ===== HEADER SHADOW ON SCROLL ===== */
    window.addEventListener('scroll', () => {
      document.getElementById('header').classList.toggle('scrolled', window.scrollY > 50);
      document.getElementById('scrollup').classList.toggle('show-scroll', window.scrollY > 300);
    });

    /* ===== ACTIVE NAV LINK ON SCROLL ===== */
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      sections.forEach(sec => {
        const h = sec.offsetHeight, top = sec.offsetTop - 100;
        const id = sec.getAttribute('id');
        const link = document.querySelector(`.nav_link[href="#${id}"]`);
        if(link) link.classList.toggle('active-link', scrollY > top && scrollY <= top + h);
      });
    });

    /* ===== REVEAL ON SCROLL ===== */
    const revealEls = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if(e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => revealObs.observe(el));

    /* ===== SKILL BARS ===== */
    const skillsGrid = document.getElementById('skillsGrid');
    const barObs = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting) {
        document.querySelectorAll('.skill_fill').forEach((b, i) => {
          setTimeout(() => b.classList.add('animate'), i * 100);
        });
        barObs.disconnect();
      }
    }, { threshold: 0.2 });
    if(skillsGrid) barObs.observe(skillsGrid);

    /* ===== CONTACT FORM ===== */
    document.getElementById('sendBtn').addEventListener('click', function() {
      this.innerHTML = '<i class="ri-check-line"></i> Sent!';
      this.style.background = 'hsl(140,60%,45%)';
      setTimeout(() => {
        this.innerHTML = '<i class="ri-send-plane-line"></i> Send Message';
        this.style.background = '';
      }, 2800);
    });