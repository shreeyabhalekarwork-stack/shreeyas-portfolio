import { useEffect, useState } from 'react'
import './App.css'
import profilePhoto from './assets/profile.jpg'

/* ------------------------------------------------------------------ */
/*  Edit your details here                                             */
/* ------------------------------------------------------------------ */
const PROFILE = {
  first: 'SHREEYA',
  last: 'BHALEKAR',
  role: 'graphic designer',
  pronouns: 'she/her',
  tag: 'UI / UX',
  photo: profilePhoto,
  email: 'hello@example.com', // TODO: replace with your email
  linkedin:
    'https://www.linkedin.com/in/shreeya-bhalekar-507a85335?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  behance: 'https://www.behance.net/shreeyabhalekar1',
}

const UIUX_PROJECTS = [
  {
    title: 'Book Club App',
    kind: 'Mobile app · UI/UX',
    blurb: 'A cosy space for readers to discover books, join clubs and track what they read together.',
    url: 'https://www.figma.com/design/RoP6mXb0JC76NHmd9iD3DI/BOOK-CLUB-APP?node-id=0-1&p=f&t=o53YoAhL7Lc395Ad-0',
  },
  {
    title: 'UnboxStore',
    kind: 'E-commerce · UI/UX',
    blurb: 'A shopping experience designed around easy browsing, clear product pages and a smooth checkout.',
    url: 'https://www.figma.com/design/0XT4PpE2N58FtgQ3PHJDnS/Untitled?t=2GpvldlLiMZpJXCe-0',
  },
  {
    title: 'Books Website',
    kind: 'Website · UI design',
    blurb: 'A website UI for book lovers — discovering titles, exploring genres and reading details at a glance.',
    url: 'https://www.figma.com/design/sPxbJ3Rz4GSxKuyv5eRppW/Untitled?node-id=0-1&p=f&t=2GpvldlLiMZpJXCe-0',
  },
  {
    title: 'Final Year Project',
    kind: 'Case study · UI/UX',
    blurb: 'Semester-final UI/UX project — research, information architecture and a full prototype.',
    url: 'https://www.figma.com/design/XAG5YXmHEZ6VTTQUW3Hjss/UIUX-final-ty-sem2-project?node-id=0-1&p=f&t=tSi2dffemD2LeoMT-0',
  },
  {
    title: 'PMPL Bus',
    kind: 'Transit app · UI/UX',
    blurb: 'Redesigning the PMPL bus experience — finding routes, checking timings and planning trips with ease.',
    url: 'https://www.figma.com/design/YqbJslgTQjykS6IEwigqrx/Untitled?t=hOyjeHlaIuxUVxmg-0',
  },
]

const FAQS = [
  {
    q: 'What kind of work do you do?',
    a: 'Brand campaigns, social media creatives, posters, packaging-style ads and UI/UX design for apps and websites.',
  },
  {
    q: 'What tools do you use?',
    a: 'Figma for UI/UX and prototyping, plus Photoshop, Illustrator and Canva for graphic and campaign work.',
  },
  {
    q: 'Are you open to freelance or internships?',
    a: 'Yes! I love collaborating on new ideas. Send me a message with a little about your project.',
  },
  {
    q: 'How do we start working together?',
    a: 'Drop me an email with your brief, timeline and references — I’ll get back with ideas and next steps.',
  },
]

/* Load every image in the circle-moving-work folder automatically */
const workModules = import.meta.glob('./assets/circle-moving-work/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})
const WORKS = Object.keys(workModules)
  .sort()
  .map((k) => workModules[k])

/* ------------------------------------------------------------------ */

function Sparkle({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <path d="M100 0 C104 70 130 96 200 100 C130 104 104 130 100 200 C96 130 70 104 0 100 C70 96 96 70 100 0 Z" />
    </svg>
  )
}

function Burst({ className }) {
  const rays = Array.from({ length: 36 }, (_, i) => {
    const a = (i / 36) * Math.PI * 2
    const len = i % 2 ? 70 : 95
    return (
      <line
        key={i}
        x1={100 + Math.cos(a) * 14}
        y1={100 + Math.sin(a) * 14}
        x2={100 + Math.cos(a) * len}
        y2={100 + Math.sin(a) * len}
      />
    )
  })
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      {rays}
    </svg>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Home', '#home'],
    ['Introduction', '#intro'],
    ['Works', '#works'],
    ['FAQs', '#faqs'],
  ]
  return (
    <header className="nav">
      <a href="#home" className="pill-logo">DESIGNER</a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? '✕' : '☰'}
      </button>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-frame" id="home">
      <Nav />
      <div className="hero">
        <div className="hero-title">
          <h1>
            <span className="row1">
              <span className="heavy">HEY,</span>{' '}
              <span className="select">
                <span className="serif">IT’S</span>
              </span>
            </span>
            <span className="row2 select select-full">
              <i className="h h1" />
              <i className="h h2" />
              <span className="serif">{PROFILE.first}</span>
            </span>
          </h1>
          <p className="hero-sub">
            A graphic &amp; UI/UX designer crafting bold campaigns and <span className="accent">thoughtful</span> digital
            experiences.
          </p>
        </div>

        <div className="hero-photo">
          <div className="photo-back" />
          <div className="photo-card">
            {PROFILE.photo ? (
              <img src={PROFILE.photo} alt={`${PROFILE.first} ${PROFILE.last}`} />
            ) : (
              <div className="photo-placeholder">
                <span>SB</span>
              </div>
            )}
          </div>
        </div>

        <p className="hero-note">
          From festive jewellery campaigns to food posters and app interfaces, I turn ideas into visuals that people
          stop and look at. Based in <span className="accent">India</span>, designing for brands, students and
          dreamers alike.
        </p>
      </div>
    </section>
  )
}

function Marquee() {
  const item = '·˚ DESIGNER ♡ ,'
  const items = Array.from({ length: 14 }, () => item)
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.concat(items).map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}

function Intro() {
  return (
    <section className="intro" id="intro">
      <Burst className="burst" />
      <div className="intro-grid">
        <div className="id-card">
          <div className="id-photo">
            {PROFILE.photo ? (
              <img src={PROFILE.photo} alt="" />
            ) : (
              <img src={WORKS[1] ?? WORKS[0]} alt="" />
            )}
          </div>
          <span className="chip chip-right">{PROFILE.tag}</span>
          <span className="chip chip-left">{PROFILE.role}!</span>
          <div className="id-name">
            {PROFILE.first} {PROFILE.last}
            <small>{PROFILE.pronouns}</small>
          </div>
          <svg className="id-arrow" viewBox="0 0 80 40" aria-hidden="true">
            <path d="M4 6 C 14 34, 50 38, 74 18" />
            <path d="M64 14 L75 17 L70 28" />
          </svg>
        </div>
        <p className="intro-text">
          Hi, I’m Shreeya Bhalekar — a designer who loves mixing strong typography, colour and storytelling. I create
          social media campaigns, posters and brand creatives, and design user-friendly apps in Figma. Every project
          starts with understanding people: what they need, what they feel, and what will make them smile. I’m always
          curious, always sketching, and always ready for the next creative challenge.
        </p>
      </div>

      <div className="tagline">
        <Sparkle className="sparkle sparkle-left" />
        <h2>
          Making the best
          <br />
          <span className="underlined">works</span> out there!
        </h2>
        <p>
          I help clients design their dreams,
          <br />
          and then I make those dreams come true.
        </p>
        <a className="hire" href={`mailto:${PROFILE.email}`}>
          HIRE ME
          <svg viewBox="0 0 160 60" aria-hidden="true">
            <path d="M150 22 C 140 4, 40 2, 14 18 C -6 32, 30 56, 90 54 C 140 52, 160 36, 140 16" />
          </svg>
        </a>
      </div>
      <hr className="rule" />
    </section>
  )
}

function WorkWheel({ onOpen }) {
  const n = WORKS.length
  return (
    <div className="wheel-stage">
      <div className="wheel" style={{ '--n': n }}>
        {WORKS.map((src, i) => (
          <button
            key={src}
            className="wheel-card"
            style={{ '--a': `${(360 / n) * i}deg` }}
            onClick={() => onOpen(i)}
            aria-label={`Open work ${i + 1}`}
          >
            <img src={src} alt={`Graphic design work ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}

function Lightbox({ index, onClose, onStep }) {
  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onStep(1)
      if (e.key === 'ArrowLeft') onStep(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, onClose, onStep])

  if (index === null) return null
  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lb-btn lb-prev" onClick={(e) => (e.stopPropagation(), onStep(-1))} aria-label="Previous">
        ‹
      </button>
      <img src={WORKS[index]} alt={`Work ${index + 1}`} onClick={(e) => e.stopPropagation()} />
      <button className="lb-btn lb-next" onClick={(e) => (e.stopPropagation(), onStep(1))} aria-label="Next">
        ›
      </button>
      <button className="lb-close" onClick={onClose} aria-label="Close">
        ✕
      </button>
      <span className="lb-count">
        {index + 1} / {WORKS.length}
      </span>
    </div>
  )
}

function Works() {
  const [open, setOpen] = useState(null)
  const step = (d) => setOpen((i) => (i + d + WORKS.length) % WORKS.length)

  return (
    <section className="works" id="works">
      <WorkWheel onOpen={setOpen} />
      <div className="works-head">
        <svg className="wave" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 40 V20 Q 25 0 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20 T 450 20 T 500 20 T 550 20 T 600 20 T 650 20 T 700 20 T 750 20 T 800 20 T 850 20 T 900 20 T 950 20 T 1000 20 T 1050 20 T 1100 20 T 1150 20 T 1200 20 V40 Z" />
        </svg>
        <h2 className="works-title">MY WORKS</h2>
        <div className="works-cols">
          <p>
            Brand campaigns built for festive seasons, new launches and big moments — designed to feel premium and
            stop the scroll.
          </p>
          <p>
            Posters and social creatives for food, lifestyle and beverage brands, mixing illustration with bold type.
          </p>
          <p>
            Social-impact and concept ads that tell a story in a single frame, from headline to call-to-action.
          </p>
          <p>
            And then there’s UI/UX — apps and interfaces designed in Figma, from research and flows to polished
            prototypes.
          </p>
        </div>
      </div>

      <div className="gallery">
        {WORKS.map((src, i) => (
          <button key={src} className="g-item" onClick={() => setOpen(i)} aria-label={`Open work ${i + 1}`}>
            <img src={src} alt={`Graphic design work ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      <div className="uiux">
        <div className="uiux-head">
          <span className="pill-logo small">UI / UX</span>
          <h3>Case studies &amp; prototypes</h3>
          <p>Click any project to open the full design in Figma.</p>
        </div>
        <div className="uiux-grid">
          {UIUX_PROJECTS.map((p, i) => (
            <a key={p.url} className="uiux-card" href={p.url} target="_blank" rel="noreferrer">
              <div className="uiux-art" data-variant={i % 5}>
                <div className="mock-phone">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="uiux-num">0{i + 1}</span>
              </div>
              <div className="uiux-body">
                <small>{p.kind}</small>
                <h4>{p.title}</h4>
                <p>{p.blurb}</p>
                <span className="uiux-link">View in Figma ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Lightbox index={open} onClose={() => setOpen(null)} onStep={step} />
    </section>
  )
}

function Faqs() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faqs" id="faqs">
      <h2>
        <span className="heavy">GOT</span> <span className="serif">questions?</span>
      </h2>
      <div className="faq-list">
        {FAQS.map((f, i) => (
          <div key={f.q} className={`faq ${open === i ? 'open' : ''}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span>{f.q}</span>
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </button>
            <div className="faq-a">
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <Sparkle className="sparkle sparkle-foot" />
      <h2>
        Let’s make something <span className="serif">beautiful</span>.
      </h2>
      <a className="footer-mail" href={`mailto:${PROFILE.email}`}>
        {PROFILE.email}
      </a>
      <div className="socials">
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={PROFILE.behance} target="_blank" rel="noreferrer">
          Behance
        </a>
      </div>
      <p className="copy">
        © {new Date().getFullYear()} {PROFILE.first} {PROFILE.last} · Designed with ♡
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <div className="top-band" />
      <Hero />
      <Marquee />
      <Intro />
      <Works />
      <Faqs />
      <Footer />
    </>
  )
}
