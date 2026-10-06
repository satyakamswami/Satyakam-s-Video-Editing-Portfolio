
    :root {
      --c-ink:    #0a0a0a;
      --c-ink2:   #111111;
      --c-ink3:   #1a1a1a;
      --c-grey1:  #2a2a2a;
      --c-grey2:  #444444;
      --c-grey3:  #888888;
      --c-grey4:  #bbbbbb;
      --c-silver: #d4d4d4;
      --c-white:  #f0ede8;
      --c-pure:   #ffffff;
      --accent-primary: #0ea5e9;
      --font-display: 'Cormorant Garamond', Georgia, serif;
      --font-mono:    'DM Mono', monospace;
      --font-cond:    'Barlow Condensed', sans-serif;
      --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-in-expo:  cubic-bezier(0.7, 0, 0.84, 0);
      --ease-circ:     cubic-bezier(0.37, 0, 0.63, 1);
    }

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; overflow-x: hidden; }
    body {
      font-family: var(--font-cond);
      background: var(--c-ink);
      color: var(--c-white);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }
    
    @media (hover: hover) and (pointer: fine) {
      body { cursor: none; }
    }

    /* ── NOISE TEXTURE ── */
    body::before {
      content: '';
      position: fixed; inset: 0; z-index: 9990;
      pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.025;
    }

    /* ── INTERACTIVE STARFIELD & EFFECTS ── */
    #starfield {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        z-index: 0; pointer-events: none;
    }
    .star {
        position: absolute; background: white; border-radius: 50%;
        animation: twinkle 5s infinite;
        transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .star.faded {
        opacity: 0 !important;
        transform: scale(0);
        animation-play-state: paused;
        transition: opacity 0s, transform 0s;
    }
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; } 50% { opacity: 1; }
    }
    
    .cursor-light {
        position: fixed; width: 800px; height: 800px;
        background: radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 60%);
        border-radius: 50%; pointer-events: none;
        z-index: 1;
        transform: translate(-50%, -50%);
        transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    
    .ripple {
        position: fixed; border: 1px solid var(--accent-primary);
        border-radius: 50%; pointer-events: none; z-index: 9996;
        transform: translate(-50%, -50%);
        animation: ripple-effect 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        box-shadow: 0 0 20px rgba(14, 165, 233, 0.3) inset, 0 0 20px rgba(14, 165, 233, 0.3);
    }
    @keyframes ripple-effect {
        from { width: 0; height: 0; opacity: 1; }
        to { width: 500px; height: 500px; opacity: 0; }
    }
    .particle {
        position: fixed; background: #fff; border-radius: 50%;
        pointer-events: none; z-index: 9997;
        box-shadow: 0 0 10px var(--accent-primary);
    }

    /* ── CUSTOM CURSOR (desktop only) ── */
    #cursor-dot, #cursor-ring { display: none; }
    @media (hover: hover) and (pointer: fine) {
      #cursor-dot {
        display: block; position: fixed; width: 7px; height: 7px;
        background: var(--c-pure); border-radius: 50%; pointer-events: none; z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.25s var(--ease-out-expo), height 0.25s var(--ease-out-expo), opacity 0.3s;
        will-change: left, top;
      }
      #cursor-ring {
        display: block; position: fixed; width: 36px; height: 36px;
        border: 1px solid rgba(255,255,255,0.35); border-radius: 50%; pointer-events: none; z-index: 9998;
        transform: translate(-50%, -50%);
        transition: width 0.35s var(--ease-out-expo), height 0.35s var(--ease-out-expo), background 0.35s, border-color 0.3s, opacity 0.3s;
        will-change: left, top;
      }
      body.cursor-hover #cursor-dot { width: 4px; height: 4px; }
      body.cursor-hover #cursor-ring { width: 56px; height: 56px; background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.6); }
      body.cursor-click #cursor-ring { width: 18px; height: 18px; }
    }

    /* ── PAGE INTRO ── */
    #page-intro {
      position: fixed; inset: 0; z-index: 10000; background: var(--c-ink);
      display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 0.75rem;
      animation: introOut 0.7s 2s var(--ease-in-expo) forwards; pointer-events: none;
    }
    .intro-line { overflow: hidden; line-height: 1.1; }
    .intro-line span {
      display: block; font-family: var(--font-cond); font-weight: 800; letter-spacing: 0.15em; color: var(--c-white);
      transform: translateY(110%); animation: introSlide 0.85s var(--ease-out-expo) forwards;
    }
    .intro-line:nth-child(1) span { font-size: clamp(2.5rem, 9vw, 7rem); }
    .intro-line:nth-child(2) span { animation-delay: 0.12s; color: var(--c-grey3); font-size: clamp(0.7rem, 1.8vw, 1rem); font-weight: 400; letter-spacing: 0.45em; }
    @keyframes introSlide { to { transform: translateY(0); } }
    @keyframes introOut   { to { transform: translateY(-100%); opacity: 0; } }

    /* ── NAV ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000; height: 64px; display: flex; align-items: center;
      padding: 0 clamp(1.25rem, 5vw, 4rem); background: rgba(10,10,10,0.55);
      backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); border-bottom: 1px solid rgba(255,255,255,0.06); transition: background 0.4s;
    }
    nav.scrolled { background: rgba(10,10,10,0.92); }
    .nav-inner { width: 100%; max-width: 1600px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
    .nav-logo { text-decoration: none; display: flex; align-items: center; transition: transform 0.3s; }
    .nav-logo:hover { transform: scale(1.05); }
    .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
    .nav-links a {
      font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.14em;
      color: var(--c-grey4); text-decoration: none; text-transform: uppercase; transition: color 0.3s; position: relative; padding-bottom: 2px;
    }
    .nav-links a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: var(--c-pure); transition: width 0.4s var(--ease-out-expo); }
    .nav-links a:hover, .nav-links a.active { color: var(--c-pure); }
    .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

    .nav-ham { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; z-index: 1001; }
    .nav-ham span { display: block; width: 22px; height: 1px; background: var(--c-pure); transition: all 0.35s var(--ease-out-expo); transform-origin: center; }
    .nav-ham.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    .nav-ham.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .nav-ham.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-ham { display: flex; }
    }

    /* ── MOBILE DRAWER ── */
    #mobile-drawer {
      position: fixed; inset: 0; z-index: 900; background: var(--c-ink); display: flex; align-items: center; justify-content: center;
      flex-direction: column; gap: 2rem; transform: translateX(100%); transition: transform 0.55s var(--ease-out-expo); pointer-events: none;
    }
    #mobile-drawer.open { transform: translateX(0); pointer-events: all; }
    #mobile-drawer a {
      font-family: var(--font-cond); font-size: clamp(2.2rem, 9vw, 3.5rem); font-weight: 800; letter-spacing: 0.05em;
      color: var(--c-white); text-decoration: none; text-transform: uppercase; opacity: 0; transform: translateX(40px);
      transition: opacity 0.45s var(--ease-out-expo), transform 0.45s var(--ease-out-expo), color 0.3s;
    }
    #mobile-drawer.open a { opacity: 1; transform: translateX(0); }
    #mobile-drawer.open a:nth-child(1) { transition-delay: 0.08s; }
    #mobile-drawer.open a:nth-child(2) { transition-delay: 0.13s; }
    #mobile-drawer.open a:nth-child(3) { transition-delay: 0.18s; }
    #mobile-drawer.open a:nth-child(4) { transition-delay: 0.23s; }
    #mobile-drawer.open a:nth-child(5) { transition-delay: 0.28s; }
    #mobile-drawer.open a:nth-child(6) { transition-delay: 0.33s; }
    #mobile-drawer a:hover { color: var(--c-grey3); }

    /* ── HERO ── */
    #home {
      min-height: 100svh; position: relative; display: flex; align-items: flex-end;
      padding: 80px clamp(1.25rem, 5vw, 4rem) clamp(5rem, 9vw, 9rem); overflow: hidden;
      background: var(--c-ink);
      z-index: 2;
    }

    .hero-content { position: relative; z-index: 2; max-width: 1600px; width: 100%; margin: 0 auto; }
   .hero-name { font-family: var(--font-cond); font-size: clamp(4.5rem, 15vw, 16rem); font-weight: 900; line-height: 0.88; letter-spacing: -0.02em; text-transform: uppercase; }
    .hero-name-line { overflow: hidden; }
    .hero-name-line span { display: block; transform: translateY(110%); animation: slideUp 1s var(--ease-out-expo) forwards; }
    .hero-name-line:nth-child(1) span { animation-delay: 0.4s; color: var(--c-pure); }
    .hero-name-line:nth-child(2) span { animation-delay: 0.52s; color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.45); }
    @keyframes slideUp { to { transform: translateY(0); } }

    .hero-bottom { margin-top: 2.5rem; display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 2rem; }
    .hero-tagline { font-family: var(--font-display); font-size: clamp(0.9rem, 2vw, 1.6rem); font-style: italic; font-weight: 300; color: var(--c-silver); line-height: 1.5; white-space: nowrap; }
    .hero-tagline #typing-effect { color: var(--c-white); font-style: normal; }
    .cursor-blink { color: var(--c-grey3); animation: blink 0.75s step-end infinite; }
    @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
    .hero-cta-group { display: flex; gap: 1rem; flex-wrap: wrap; }

    @media (max-width: 640px) {
      #home {
        align-items: center;
        padding-top: 100px;
        padding-bottom: 40px;
      }
      .hero-bottom { flex-direction: column; align-items: flex-start; }
      .hero-cta-group { width: 100%; }
      .btn-primary, .btn-ghost { width: 100%; }
    }

    /* ── BUTTONS ── */
    .btn-primary, .btn-ghost {
      display: inline-flex; align-items: center; justify-content: center; font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.18em;
      text-transform: uppercase; text-decoration: none; padding: 0.95rem 2.2rem; position: relative; overflow: hidden; cursor: pointer; border: none; transition: color 0.4s; white-space: nowrap;
    }
    .btn-primary { background: var(--c-pure); color: var(--c-ink); clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
    .btn-primary::before { content: ''; position: absolute; inset: 0; background: var(--c-silver); transform: scaleX(0); transform-origin: right; transition: transform 0.5s var(--ease-out-expo); }
    .btn-primary:hover::before { transform: scaleX(1); }
    .btn-primary span { position: relative; z-index: 1; }

    .btn-ghost { background: transparent; color: var(--c-white); border: 1px solid rgba(255,255,255,0.35); clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px)); }
    .btn-ghost::before { content: ''; position: absolute; inset: 0; background: var(--c-white); transform: scaleX(0); transform-origin: right; transition: transform 0.5s var(--ease-out-expo); }
    .btn-ghost:hover { color: var(--c-ink); }
    .btn-ghost:hover::before { transform: scaleX(1); }
    .btn-ghost span { position: relative; z-index: 1; }

    /* ── SECTIONS ── */
    .section { position: relative; padding: clamp(5rem, 9vw, 10rem) clamp(1.25rem, 5vw, 4rem); z-index: 2;}
    .section-inner { max-width: 1600px; margin: 0 auto; }
    .section-label { font-family: var(--font-mono); font-size: 0.67rem; letter-spacing: 0.38em; color: var(--c-grey3); text-transform: uppercase; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 1rem; }
    .section-label::before { content: ''; display: block; width: 28px; height: 1px; background: var(--c-grey3); }
    .section-title { font-family: var(--font-cond); font-size: clamp(3rem, 9vw, 8.5rem); font-weight: 900; line-height: 0.9; text-transform: uppercase; letter-spacing: -0.02em; color: var(--c-pure); }
    .section-title-ghost { color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.18); }

    .reveal { opacity: 0; transform: translateY(38px); transition: opacity 0.85s var(--ease-out-expo), transform 0.85s var(--ease-out-expo); }
    .reveal.in { opacity: 1; transform: translateY(0); }
    .reveal-left { opacity: 0; transform: translateX(-45px); transition: opacity 0.85s var(--ease-out-expo), transform 0.85s var(--ease-out-expo); }
    .reveal-left.in { opacity: 1; transform: translateX(0); }
    .reveal-right { opacity: 0; transform: translateX(45px); transition: opacity 0.85s var(--ease-out-expo), transform 0.85s var(--ease-out-expo); }
    .reveal-right.in { opacity: 1; transform: translateX(0); }

    /* ── PORTFOLIO ── */
    #portfolio { background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(5px); }
    .portfolio-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: clamp(2.5rem, 5vw, 5rem); flex-wrap: wrap; gap: 1.5rem; }
    .portfolio-sub { font-family: var(--font-display); font-style: italic; font-size: clamp(0.95rem, 1.6vw, 1.2rem); color: var(--c-grey3); max-width: 340px; line-height: 1.65; }

    .featured-card { position: relative; cursor: pointer; overflow: hidden; border-radius: 2px; aspect-ratio: 16/9; margin-bottom: clamp(3.5rem, 6vw, 6rem); border: 1px solid rgba(255,255,255,0.07); }
    .featured-card img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(35%) contrast(1.05); transition: transform 0.9s var(--ease-out-expo), filter 0.7s; }
    .featured-card:hover img { transform: scale(1.045); filter: grayscale(0%) contrast(1.08); }
    .featured-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.08) 50%, transparent 100%); display: flex; align-items: flex-end; padding: clamp(1.25rem, 4vw, 3rem); }
    .featured-meta { flex: 1; }
    .featured-title { font-family: var(--font-cond); font-size: clamp(1.6rem, 4.5vw, 3.5rem); font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em; color: var(--c-pure); line-height: 1; }
    .featured-desc { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.12em; color: var(--c-grey3); margin-top: 0.6rem; }
    .featured-play { width: 64px; height: 64px; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--c-pure); margin-left: 1.5rem; transition: transform 0.4s var(--ease-out-expo), background 0.4s, border-color 0.4s; }
    .featured-card:hover .featured-play { transform: scale(1.15); background: rgba(255,255,255,0.14); border-color: var(--c-pure); }
    @media (max-width: 480px) { .featured-play { width: 48px; height: 48px; } }

    /* ── ORIGINAL CAROUSEL LOGIC ── */
    .carousel-section-title { font-family: var(--font-cond); font-size: 1rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: var(--c-grey3); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem; }
    .carousel-section-title::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.07); }

    .scroll-container-group { position: relative; }
    .portfolio-scroll-container { overflow: hidden; -webkit-overflow-scrolling: touch; scrollbar-width: none; width: 100%; }
    .portfolio-scroll-container::-webkit-scrollbar { display: none; }
    .portfolio-row { display: flex; flex-wrap: nowrap; gap: 1.5rem; align-items: center; padding: 2.5rem 0; width: max-content; }
    
    .c-card {
        flex: 0 0 auto; width: clamp(280px, 40vw, 640px); aspect-ratio: 16/9; position: relative; border-radius: 4px; overflow: hidden;
        cursor: pointer; border: 1px solid rgba(255,255,255,0.05); filter: grayscale(50%) brightness(0.65); transform: scale(0.85);
        opacity: 0.6; transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1); background: var(--c-ink);
    }
    .c-card.is-center {
        transform: scale(1.05); opacity: 1; filter: grayscale(0%) brightness(1); z-index: 20;
        border-color: rgba(255,255,255,0.22); box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.7);
    }
    .c-card img { width: 100%; height: 100%; object-fit: cover; }
    .c-card-overlay {
        position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%);
        opacity: 0; transition: opacity 0.4s; display: flex; align-items: flex-end; padding: 1.25rem;
    }
    .c-card.is-center .c-card-overlay { opacity: 1; }
    .c-card-title {
        font-family: var(--font-cond); font-weight: 700; font-size: 1.15rem; letter-spacing: 0.06em; text-transform: uppercase;
        color: var(--c-pure); transform: translateY(15px); transition: transform 0.4s var(--ease-out-expo) 0.05s;
    }
    .c-card.is-center .c-card-title { transform: translateY(0); }

    .c-arrow {
        position: absolute; top: 50%; transform: translateY(-50%); z-index: 30;
        width: 54px; height: 54px; border-radius: 50%;
        background: radial-gradient(circle, rgba(15,23,42,0.9), rgba(15,23,42,0.7)); backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;
        color: #d4d4d4; cursor: pointer; transition: all 0.3s;
    }
    .c-arrow.c-prev { left: 1rem; }
    .c-arrow.c-next { right: 1rem; }
    .c-arrow:hover { background: var(--c-pure); border-color: var(--c-pure); transform: translateY(-50%) scale(1.1); color: var(--c-ink); }
    .c-arrow svg { width: 22px; height: 22px; pointer-events: none; }

    @media (max-width: 640px) {
      .c-card { width: 85vw; } .c-arrow { width: 44px; height: 44px; } .c-arrow.c-prev { left: 0.5rem; } .c-arrow.c-next { right: 0.5rem; }
    }

    /* ── ABOUT ── */
    #about { background: rgba(17, 17, 17, 0.7); backdrop-filter: blur(5px); }
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 7vw, 7rem); align-items: start; margin-top: 3.5rem; }
    @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }
    .about-text { font-family: var(--font-display); font-size: clamp(1rem, 1.8vw, 1.3rem); font-weight: 300; line-height: 1.8; color: var(--c-silver); margin-top: 2.5rem; }

    .skills-list { margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1.75rem; }
    .skill-header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
    .skill-name { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.14em; color: var(--c-silver); text-transform: uppercase; }
    .skill-pct  { font-family: var(--font-mono); font-size: 0.68rem; color: var(--c-grey3); }
    .skill-track { height: 1px; background: rgba(255,255,255,0.1); position: relative; }
    .skill-fill { position: absolute; top: 0; left: 0; height: 1px; background: var(--c-pure); width: 0; transition: width 1.5s var(--ease-out-expo); }
    .skill-fill::after { content: ''; position: absolute; right: 0; top: 50%; width: 5px; height: 5px; background: var(--c-pure); transform: translate(50%, -50%) rotate(45deg); }

    .about-right { display: flex; flex-direction: column; gap: 1px; }
    .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.08); }
    .stat-box { background: rgba(17, 17, 17, 0.95); padding: 2.25rem 1.75rem; display: flex; flex-direction: column; justify-content: flex-end; }
    .stat-num { font-family: var(--font-cond); font-size: clamp(2.8rem, 5.5vw, 4.5rem); font-weight: 900; line-height: 1; color: var(--c-pure); letter-spacing: -0.02em; }
    .stat-label { font-family: var(--font-mono); font-size: 0.67rem; letter-spacing: 0.2em; color: var(--c-grey3); text-transform: uppercase; margin-top: 0.4rem; }
    .tools-row { background: rgba(17, 17, 17, 0.95); border: 1px solid rgba(255,255,255,0.08); border-top: none; padding: 1.75rem; display: flex; align-items: center; gap: 1.75rem; flex-wrap: wrap; }
    .tools-label { font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.25em; color: var(--c-grey2); text-transform: uppercase; }
    .tools-row img { height: 40px; object-fit: contain; transition: transform 0.35s; }
    .tools-row img:hover { transform: scale(1.1); }

    /* ── TESTIMONIALS ── */
    #testimonials { background: transparent; }
    .testi-subtitle { font-family: var(--font-display); font-style: italic; font-size: clamp(0.95rem, 1.6vw, 1.2rem); color: var(--c-grey3); margin-top: 1rem; }
    .testi-grid { margin-top: 4rem; }
    .testi-row { display: flex; align-items: flex-start; border-top: 1px solid rgba(255,255,255,0.07); padding: 3.5rem 0; }
    .testi-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.07); }
    .testi-row.right { flex-direction: row-reverse; }

    .testi-card {
      flex: 0 0 min(540px, 100%); opacity: 0;
      background: rgba(15, 23, 42, 0.15); backdrop-filter: blur(3px); border: 1px solid rgba(255,255,255,0.15);
      padding: 2.25rem; border-radius: 12px;
      transition: opacity 0.85s var(--ease-out-expo), transform 0.85s var(--ease-out-expo), box-shadow 0.4s, border-color 0.4s, background 0.4s;
    }
    .testi-row.left .testi-card { transform: translateX(-100px); }
    .testi-row.right .testi-card { transform: translateX(100px); }
    .testi-row.left .testi-card.in, .testi-row.right .testi-card.in { opacity: 1; transform: translateX(0); }
    .testi-row.left .testi-card.in:hover, .testi-row.right .testi-card.in:hover { 
      transform: translateY(-8px); box-shadow: 0 12px 25px rgba(0, 0, 0, 0.6); border-color: rgba(255,255,255,0.4); background: rgba(15, 23, 42, 0.3);
    }

    .testi-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.1rem; }
    .testi-client { font-family: var(--font-cond); font-size: 1.15rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--c-pure); }
    .testi-type { font-family: var(--font-mono); font-size: 0.63rem; letter-spacing: 0.18em; color: var(--c-grey3); text-transform: uppercase; margin-top: 0.25rem; }
    .testi-rating { display: flex; gap: 3px; }
    .testi-rating span { font-size: 0.88rem; color: var(--c-grey2); }
    .testi-rating .filled { color: var(--c-silver); }
    .testi-score { font-family: var(--font-mono); font-size: 0.68rem; color: var(--c-grey3); margin-top: 0.25rem; text-align: right; }
    .testi-quote { font-family: var(--font-display); font-style: italic; font-size: clamp(0.95rem, 1.5vw, 1.15rem); font-weight: 300; color: var(--c-silver); line-height: 1.7; margin-bottom: 1.4rem; }
    .testi-screenshot { width: 100%; border-radius: 4px; border: 1px solid rgba(255,255,255,0.08); display: block; transition: filter 0.4s; }
    .testi-spacer { flex: 1; min-width: 2rem; }

    @media (max-width: 768px) { .testi-row, .testi-row.right { flex-direction: column; } .testi-card { flex: none; width: 100%; } .testi-spacer { display: none; } }

    /* ── CONTACT ── */
    #contact { background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(5px); padding-bottom: clamp(5rem, 10vw, 10rem); }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3.5rem, 7vw, 7rem); align-items: start; margin-top: 4rem; }
    @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
    .contact-info-item { padding: 2.25rem 0; border-top: 1px solid rgba(255,255,255,0.09); }
    .contact-info-label { font-family: var(--font-mono); font-size: 0.63rem; letter-spacing: 0.3em; color: var(--c-grey3); text-transform: uppercase; margin-bottom: 0.6rem; }
    .contact-info-value { font-family: var(--font-cond); font-size: clamp(1.1rem, 2.2vw, 1.6rem); font-weight: 600; letter-spacing: 0.02em; color: var(--c-pure); text-decoration: none; transition: color 0.3s; display: inline-block; }
    a.contact-info-value:hover { color: var(--c-grey3); }
    .contact-blurb { font-family: var(--font-display); font-size: clamp(0.95rem, 1.5vw, 1.15rem); font-style: italic; font-weight: 300; color: var(--c-grey3); line-height: 1.75; margin-top: 2.5rem; }

    .contact-form { display: flex; flex-direction: column; }
    .form-field { position: relative; border-top: 1px solid rgba(255,255,255,0.1); padding: 1.6rem 0; }
    .form-field:last-of-type { border-bottom: 1px solid rgba(255,255,255,0.1); }
    .form-label { font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.28em; color: var(--c-grey3); text-transform: uppercase; display: block; margin-bottom: 0.6rem; }
    .form-input, .form-textarea { width: 100%; background: transparent; border: none; outline: none; font-family: var(--font-cond); font-size: 1.05rem; font-weight: 400; letter-spacing: 0.02em; color: var(--c-pure); caret-color: var(--c-pure); resize: none; }
    .form-input::placeholder, .form-textarea::placeholder { color: rgba(255,255,255,0.2); }
    .form-field::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 0; height: 1px; background: var(--c-pure); transition: width 0.5s var(--ease-out-expo); }
    .form-field:focus-within::after { width: 100%; }

    .form-submit { margin-top: 2.25rem; }
    .btn-submit { display: inline-flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; background: transparent; border: 1px solid rgba(255,255,255,0.3); color: var(--c-white); padding: 1rem 2.2rem; cursor: pointer; position: relative; overflow: hidden; transition: color 0.4s; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); }
    .btn-submit::before { content: ''; position: absolute; inset: 0; background: var(--c-pure); transform: scaleX(0); transform-origin: right; transition: transform 0.5s var(--ease-out-expo); }
    .btn-submit:hover { color: var(--c-ink); }
    .btn-submit:hover::before { transform: scaleX(1); }
    .btn-submit > * { position: relative; z-index: 1; }
    .btn-submit:disabled { opacity: 0.45; cursor: not-allowed; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .spin { animation: spin 0.85s linear infinite; }
    .form-msg { margin-top: 1rem; display: none; font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.1em; }
    .form-msg.success { color: var(--c-grey4); }
    .form-msg.error   { color: #999; }

    /* ── FOOTER ── */
    footer { border-top: 1px solid rgba(255,255,255,0.07); padding: clamp(2.5rem, 4.5vw, 4.5rem) clamp(1.25rem, 5vw, 4rem); padding-bottom: calc(clamp(2.5rem, 4.5vw, 4.5rem) + env(safe-area-inset-bottom)); background: var(--c-ink); position: relative; z-index: 2;}
    @media (max-width: 768px) { footer { padding-bottom: 80px; } }
    .footer-inner { max-width: 1600px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
    .footer-brand { font-family: var(--font-cond); font-size: 1.4rem; font-weight: 900; letter-spacing: 0.15em; text-transform: uppercase; color: var(--c-pure); }
    .footer-brand small { display: block; font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.25em; color: var(--c-grey3); font-weight: 400; margin-top: 0.2rem; }
    .footer-socials { display: flex; gap: 1.25rem; }
    .footer-socials a { color: var(--c-grey3); transition: color 0.3s; display: flex; }
    .footer-socials a:hover { color: var(--c-pure); }
    .footer-copy { font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.15em; color: var(--c-grey2); width: 100%; text-align: center; margin-top: 1.75rem; padding-top: 1.75rem; border-top: 1px solid rgba(255,255,255,0.05); }

    /* ── MOBILE BOTTOM NAV ── */
    #mobile-bottom-nav { display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 400; background: rgba(10,10,10,0.92); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-top: 1px solid rgba(255,255,255,0.08); height: 60px; }
    @media (max-width: 768px) { #mobile-bottom-nav { display: flex; } }
    .mobile-nav-inner { display: flex; width: 100%; height: 100%; }
    .m-nav-link { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-decoration: none; color: var(--c-grey3); gap: 3px; font-family: var(--font-mono); font-size: 0.48rem; letter-spacing: 0.1em; text-transform: uppercase; transition: color 0.3s; }
    .m-nav-link:active, .m-nav-link.active { color: var(--c-pure); }
    .m-nav-link svg { width: 17px; height: 17px; }

    /* ── VIDEO MODAL ── */
    #video-modal { position: fixed; inset: 0; z-index: 8000; background: rgba(0,0,0,0.93); backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: opacity 0.4s, visibility 0s 0.4s; }
    #video-modal.active { opacity: 1; visibility: visible; transition: opacity 0.4s; }
    .modal-content { position: relative; width: min(88vw, 1300px); aspect-ratio: 16/9; transform: scale(0.91); transition: transform 0.5s var(--ease-out-expo); }
    #video-modal.active .modal-content { transform: scale(1); }
    .modal-content iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; border-radius: 2px; }
    .modal-close { position: absolute; top: -44px; right: 0; font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.2em; color: var(--c-grey3); cursor: pointer; text-transform: uppercase; display: flex; align-items: center; gap: 0.5rem; transition: color 0.3s; user-select: none; }
    .modal-close:hover { color: var(--c-pure); }

    ::-webkit-scrollbar { width: 2px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--c-grey1); }
    @media (max-width: 768px) { .section:last-of-type { padding-bottom: 5rem; } }
