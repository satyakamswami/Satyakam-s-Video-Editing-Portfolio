:root{
  --bg:#000;--bg2:#0b0b0c;--card:#161617;--line:rgba(255,255,255,.1);
  --text:#f5f5f7;--muted:#86868b;--accent:#2997ff;
  --font:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Inter","Helvetica Neue",Arial,sans-serif;
  --ease:cubic-bezier(.16,1,.3,1);
  --pad:clamp(1.25rem,5vw,4rem);
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:64px;-webkit-text-size-adjust:100%}
body{font-family:var(--font);background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;line-height:1.5;overflow-x:hidden}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px}

/* NAV */
#main-nav{position:fixed;inset:0 0 auto 0;height:52px;z-index:100;display:flex;align-items:center;padding:0 var(--pad);background:rgba(0,0,0,.6);backdrop-filter:saturate(180%) blur(20px);-webkit-backdrop-filter:saturate(180%) blur(20px);border-bottom:1px solid transparent;transition:border-color .4s}
#main-nav.scrolled{border-color:var(--line)}
.nav-inner{width:100%;max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{font-weight:600;font-size:.95rem;letter-spacing:.02em}
.nav-links{display:flex;gap:2.25rem;list-style:none}
.nav-links a{font-size:.8rem;color:rgba(245,245,247,.72);transition:color .3s}
.nav-links a:hover,.nav-links a.active{color:#fff}
.nav-ham{display:none;width:32px;height:32px;position:relative;z-index:120}
.nav-ham span{position:absolute;left:7px;width:18px;height:1.5px;background:#fff;transition:transform .4s var(--ease)}
.nav-ham span:nth-child(1){top:12px}.nav-ham span:nth-child(2){top:19px}
.nav-ham.open span:nth-child(1){transform:translateY(3.5px) rotate(45deg)}
.nav-ham.open span:nth-child(2){transform:translateY(-3.5px) rotate(-45deg)}
#mobile-drawer{position:fixed;inset:0;z-index:110;background:rgba(0,0,0,.96);backdrop-filter:blur(30px);display:flex;flex-direction:column;justify-content:center;padding:0 var(--pad);gap:1.1rem;opacity:0;visibility:hidden;transition:opacity .4s,visibility 0s .4s}
#mobile-drawer.open{opacity:1;visibility:visible;transition:opacity .4s}
#mobile-drawer a{font-size:clamp(2rem,8vw,2.8rem);font-weight:600;letter-spacing:-.02em;transform:translateY(14px);opacity:0;transition:transform .6s var(--ease),opacity .6s var(--ease)}
#mobile-drawer.open a{transform:none;opacity:1}
#mobile-drawer.open a:nth-child(2){transition-delay:.05s}#mobile-drawer.open a:nth-child(3){transition-delay:.1s}#mobile-drawer.open a:nth-child(4){transition-delay:.15s}#mobile-drawer.open a:nth-child(5){transition-delay:.2s}
@media(max-width:768px){.nav-links{display:none}.nav-ham{display:block}}

/* HERO */
#home{min-height:100svh;display:flex;align-items:center;justify-content:center;text-align:center;padding:96px var(--pad) 64px;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(41,151,255,.14),transparent 70%),var(--bg)}
.hero-content{max-width:1100px}
.hero-eyebrow{font-size:clamp(1rem,1.8vw,1.35rem);font-weight:500;color:var(--muted);margin-bottom:1rem;opacity:0;animation:rise 1.1s .1s var(--ease) forwards}
.hero-name{font-size:clamp(3.4rem,13vw,10.5rem);font-weight:700;letter-spacing:-.05em;line-height:.95;opacity:0;animation:rise 1.2s .25s var(--ease) forwards}
.hero-name span{display:inline-block;background:linear-gradient(180deg,#fff 30%,#a1a1a6);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero-name .soft{background:linear-gradient(180deg,#6e6e73,#2a2a2d)}
@media(max-width:700px){.hero-name span{display:block}}
.hero-tagline{margin-top:2rem;font-size:clamp(1.05rem,2.2vw,1.6rem);color:rgba(245,245,247,.8);font-weight:400;opacity:0;animation:rise 1.2s .45s var(--ease) forwards}
#typing-effect{color:#fff;font-weight:600}
.cursor-blink{color:var(--accent);animation:blink .8s step-end infinite}
.hero-cta-group{margin-top:2.5rem;display:flex;gap:.9rem;justify-content:center;flex-wrap:wrap;opacity:0;animation:rise 1.2s .6s var(--ease) forwards}
@keyframes rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@keyframes blink{50%{opacity:0}}

/* BUTTONS */
.btn{display:inline-flex;align-items:center;justify-content:center;font-size:1.02rem;font-weight:500;padding:.8rem 1.6rem;border-radius:980px;transition:transform .3s var(--ease),background .3s,color .3s,border-color .3s}
.btn:active{transform:scale(.97)}
.btn-primary{background:var(--accent);color:#fff}.btn-primary:hover{background:#4aa8ff}
.btn-ghost{color:var(--accent);border:1px solid rgba(41,151,255,.5)}.btn-ghost:hover{background:rgba(41,151,255,.12)}

/* SECTIONS */
.section{padding:clamp(5rem,11vw,9rem) var(--pad)}
.section.alt{background:var(--bg2)}
.section-inner{max-width:1200px;margin:0 auto}
.section-head{margin-bottom:clamp(2.5rem,5vw,4rem)}
.section-title{font-size:clamp(2.4rem,6.5vw,5rem);font-weight:700;letter-spacing:-.045em;line-height:1.05}
.section-sub{margin-top:1rem;font-size:clamp(1.05rem,1.8vw,1.35rem);color:var(--muted);max-width:30em;line-height:1.4}
.reveal{opacity:0;transform:translateY(30px);transition:opacity 1s var(--ease),transform 1s var(--ease)}
.reveal.in{opacity:1;transform:none}

/* PLAY BUTTON */
.play-btn{width:68px;height:68px;border-radius:50%;display:grid;place-items:center;flex-shrink:0;background:rgba(255,255,255,.16);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);color:#fff;transition:transform .5s var(--ease),background .4s}
.play-btn svg{margin-left:3px}
.play-btn.sm{position:absolute;right:12px;bottom:12px;width:36px;height:36px}
.play-btn.sm svg{width:14px;height:14px;margin-left:2px}

/* FEATURED */
.featured-card{position:relative;aspect-ratio:16/9;border-radius:clamp(18px,2.6vw,32px);overflow:hidden;cursor:pointer;background:var(--card);margin-bottom:clamp(3.5rem,7vw,6rem)}
.featured-card img{width:100%;height:100%;object-fit:cover;transition:transform 1.4s var(--ease)}
.featured-card:hover img{transform:scale(1.035)}
.featured-card:hover .play-btn{transform:scale(1.1);background:rgba(255,255,255,.26)}
.featured-overlay{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;padding:clamp(1.25rem,3.5vw,3rem);background:linear-gradient(to top,rgba(0,0,0,.72),transparent 55%)}
.featured-title{font-size:clamp(1.6rem,4vw,3rem);font-weight:700;letter-spacing:-.035em;line-height:1.1}
.featured-desc{margin-top:.35rem;color:rgba(245,245,247,.75);font-size:clamp(.9rem,1.3vw,1.05rem)}
@media(max-width:480px){.play-btn{width:52px;height:52px}}

/* CAROUSEL */
.carousel-title{font-size:clamp(1.4rem,2.6vw,2rem);font-weight:600;letter-spacing:-.03em;margin-bottom:1.5rem}
.carousel{position:relative}
.carousel-track{display:flex;gap:1.25rem;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:.25rem var(--pad);margin:0 calc(var(--pad) * -1);scroll-padding:0 var(--pad)}
.carousel-track::-webkit-scrollbar{display:none}
.c-card{flex:0 0 clamp(270px,38vw,520px);scroll-snap-align:start;cursor:pointer}
.c-thumb{position:relative;aspect-ratio:16/9;border-radius:clamp(14px,1.8vw,22px);overflow:hidden;background:var(--card)}
.c-thumb img{width:100%;height:100%;object-fit:cover;transition:transform 1s var(--ease)}
.c-card:hover .c-thumb img{transform:scale(1.05)}
.c-card:hover .play-btn.sm{background:rgba(255,255,255,.3)}
.c-card-title{margin-top:.9rem;font-size:1.05rem;font-weight:600;letter-spacing:-.01em}
.c-controls{display:flex;justify-content:flex-end;gap:.6rem;margin-top:1.75rem}
.c-arrow{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.1);transition:background .3s,opacity .3s,transform .3s var(--ease)}
.c-arrow:hover{background:rgba(255,255,255,.18)}.c-arrow:active{transform:scale(.92)}
.c-arrow:disabled{opacity:.3;cursor:default}
.c-arrow svg{width:20px;height:20px}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:clamp(2.5rem,7vw,7rem);margin-top:clamp(2.5rem,5vw,4rem);align-items:start}
@media(max-width:900px){.about-grid{grid-template-columns:1fr}}
.about-text{font-size:clamp(1.15rem,2vw,1.6rem);line-height:1.45;font-weight:500;letter-spacing:-.015em;color:rgba(245,245,247,.88)}
.skills-list{margin-top:2.5rem;display:grid;gap:1.6rem}
.skill-header{display:flex;justify-content:space-between;font-size:.95rem;font-weight:500;margin-bottom:.65rem}
.skill-pct{color:var(--muted);font-variant-numeric:tabular-nums}
.skill-track{height:6px;border-radius:6px;background:rgba(255,255,255,.1);overflow:hidden}
.skill-fill{height:100%;width:0;border-radius:6px;background:linear-gradient(90deg,#fff,var(--accent));transition:width 1.8s var(--ease)}
.about-stats{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.stat-box{background:var(--card);border-radius:24px;padding:clamp(1.5rem,3vw,2.25rem)}
.stat-num{font-size:clamp(3rem,6vw,5rem);font-weight:700;letter-spacing:-.05em;line-height:1}
.stat-label{margin-top:.6rem;color:var(--muted);font-size:.95rem}
.tools-row{margin-top:1rem;background:var(--card);border-radius:24px;padding:1.5rem 1.75rem;display:flex;align-items:center;gap:1.75rem;flex-wrap:wrap}
.tools-label{color:var(--muted);font-size:.95rem;font-weight:500}
.tools-row img{height:40px;object-fit:contain;border-radius:8px}

/* TESTIMONIALS */
.testi-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
@media(max-width:860px){.testi-grid{grid-template-columns:1fr}}
.testi-card{background:var(--card);border-radius:28px;padding:clamp(1.5rem,3vw,2.25rem);display:flex;flex-direction:column}
.testi-header{display:flex;justify-content:space-between;gap:1rem;margin-bottom:1.25rem}
.testi-client{font-size:1.1rem;font-weight:600;letter-spacing:-.01em}
.testi-type{color:var(--muted);font-size:.9rem;margin-top:.15rem}
.testi-meta{text-align:right;white-space:nowrap}
.testi-rating{color:#f5f5f7;letter-spacing:2px;font-size:.9rem}.testi-rating .off{color:#3a3a3c}
.testi-score{color:var(--muted);font-size:.85rem;margin-top:.1rem}
.testi-quote{font-size:clamp(1.1rem,1.7vw,1.35rem);font-weight:500;line-height:1.4;letter-spacing:-.015em;margin-bottom:1.5rem}
.testi-screenshot{width:100%;margin-top:auto;border-radius:14px;border:1px solid var(--line)}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(2.5rem,7vw,7rem);margin-top:clamp(2.5rem,5vw,4rem)}
@media(max-width:900px){.contact-grid{grid-template-columns:1fr}}
.contact-info-item{padding:1.5rem 0;border-top:1px solid var(--line)}
.contact-info-label{color:var(--muted);font-size:.9rem;margin-bottom:.25rem}
.contact-info-value{font-size:clamp(1.3rem,2.4vw,1.8rem);font-weight:600;letter-spacing:-.025em}
a.contact-info-value{color:var(--accent)}a.contact-info-value:hover{text-decoration:underline}
.contact-blurb{margin-top:1.5rem;color:var(--muted);font-size:1.15rem;line-height:1.45;max-width:26em}
.contact-form{display:flex;flex-direction:column}
.form-label{font-size:.85rem;font-weight:500;color:var(--muted);margin:1.1rem 0 .5rem}.form-label:first-child{margin-top:0}
.form-input{width:100%;background:var(--card);border:1px solid transparent;border-radius:14px;padding:.95rem 1.1rem;font:inherit;font-size:1.05rem;color:#fff;resize:vertical;transition:border-color .3s,background .3s}
.form-input::placeholder{color:#58585d}
.form-input:focus{outline:none;border-color:var(--accent);background:#1c1c1e}
.btn-submit{margin-top:1.75rem;align-self:flex-start}
.btn-submit:disabled{opacity:.5;cursor:not-allowed}
.form-msg{display:none;margin-top:1rem;font-size:.95rem}
.form-msg.success{color:#30d158}.form-msg.error{color:#ff453a}

/* FOOTER */
footer{padding:2.5rem var(--pad) calc(2rem + env(safe-area-inset-bottom));background:var(--bg);border-top:1px solid var(--line)}
.footer-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.25rem}
.footer-brand{font-weight:600;font-size:1.05rem}
.footer-brand small{display:block;color:var(--muted);font-weight:400;font-size:.85rem;margin-top:.15rem}
.footer-socials{display:flex;gap:1.5rem;font-size:.9rem;color:var(--muted)}
.footer-socials a{transition:color .3s}.footer-socials a:hover{color:#fff}
.footer-copy{max-width:1200px;margin:2rem auto 0;padding-top:1.5rem;border-top:1px solid var(--line);color:var(--muted);font-size:.8rem}

/* VIDEO MODAL */
#video-modal{position:fixed;inset:0;z-index:300;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.82);backdrop-filter:blur(40px) saturate(150%);-webkit-backdrop-filter:blur(40px) saturate(150%);opacity:0;visibility:hidden;transition:opacity .5s var(--ease),visibility 0s .5s}
#video-modal.active{opacity:1;visibility:visible;transition:opacity .5s var(--ease)}
.modal-content{position:relative;width:min(92vw,1280px,calc((100svh - 120px) * 16 / 9));aspect-ratio:16/9;will-change:transform}
.modal-content iframe{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:clamp(12px,1.6vw,22px);background:#000;box-shadow:0 40px 120px rgba(0,0,0,.7)}
.modal-close{position:absolute;top:-48px;right:0;font-size:.95rem;font-weight:500;padding:.4rem 1rem;border-radius:980px;background:rgba(255,255,255,.14);transition:background .3s}
.modal-close:hover{background:rgba(255,255,255,.26)}

::-webkit-scrollbar{width:8px}::-webkit-scrollbar-thumb{background:#2c2c2e;border-radius:8px}::-webkit-scrollbar-track{background:transparent}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-delay:0s!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}
