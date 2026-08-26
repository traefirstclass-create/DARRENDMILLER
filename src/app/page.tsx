import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import CompCard from "@/components/CompCard";
import ReelCard from "@/components/ReelCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import ScrollEffects from "@/components/ScrollEffects";
import {
  credits,
  galleryImages,
  imdbUrl,
  reelVideos,
  repInfo,
  socialLinks,
  unionStatus,
} from "@/lib/content";

const marqueeItems = [
  "Kountry Wayne Digital Sketches",
  "Darren",
  "Atlanta, GA",
  "Facebook · Instagram",
  "Available For Booking",
];

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <RevealOnScroll />

      <header id="siteHeader">
        <nav>
          <a href="#top" className="wordmark">
            <span className="monogram">DDM</span>
            <span className="wordmark-text">Darren Dequan Miller</span>
          </a>
          <ul className="navlinks">
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#reel">Reel</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#book">Book</a>
            </li>
          </ul>
          <a href="#book" className="btn-crimson-pill btn-tactile">
            Book Dequan
          </a>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-disc" />
          <div className="hero-disc-sheen" />
          <div className="hero-grid">
            <div>
              <p className="kicker" style={{ color: "var(--crimson)", marginBottom: 24 }}>
                On Screen As &quot;Darren&quot; — Kountry Wayne Digital Sketches
              </p>
              <h1>
                Darren
                <br />
                Dequan
                <br />
                Miller
              </h1>
              <p className="lede">
                Actor and entertainer out of Atlanta, GA. Recurring principal on
                Kountry Wayne&apos;s digital sketch series — commanding presence,
                sharp comic timing, camera-ready range.
              </p>
              <div className="genre-strip">
                <span className="genre-tag">Action</span>
                <span className="genre-tag">Drama</span>
                <span className="genre-tag">Comedy</span>
                <span className="genre-tag">Digital Original</span>
              </div>
              <div className="cta-row">
                <a href="#work" className="btn-solid-red btn-tactile">
                  See Him In Action
                </a>
                <a href="#book" className="btn-outline-ink btn-tactile">
                  Book Dequan
                </a>
              </div>
            </div>
            <CompCard />
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i}>
                {item} <span className="dot2">●</span>
              </span>
            ))}
          </div>
        </div>

        {/* FEATURED WORK */}
        <section id="work" className="wrap">
          <p className="kicker fade-in" style={{ color: "var(--crimson)", marginBottom: 16 }}>
            Signature Role
          </p>
          <div className="spotlight fade-in">
            <div className="photo-tile">
              <Image
                src="/images/spotlight-darren.jpg"
                alt="Darren Dequan Miller as Darren in Kountry Wayne's digital sketch series"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <span className="tag">Spotlight</span>
            </div>
            <div style={{ position: "relative" }}>
              <h3>Darren</h3>
              <p className="proj">Kountry Wayne — Digital Sketch Series</p>
              <p className="desc2">
                Recurring principal character in Kountry Wayne&apos;s original
                sketch catalog — one of the most-watched Black digital comedy
                formats in the country, with individual releases regularly
                reaching millions of views.
              </p>
              <div className="stat-chips">
                <div className="stat-chip">
                  <span className="l">Platform</span>
                  <span className="v">Facebook</span>
                </div>
                <div className="stat-chip">
                  <span className="l">Role</span>
                  <span className="v">Recurring / Principal</span>
                </div>
                <div className="stat-chip">
                  <span className="l">Format</span>
                  <span className="v">Digital Sketch</span>
                </div>
              </div>
            </div>
          </div>

          <h4 className="credits-title fade-in">Credits</h4>
          <div className="fade-in">
            {credits.map((credit, i) => (
              <div className="credit-row" key={i}>
                <div className="credit-left">
                  <span className="credit-year">{credit.year}</span>
                  <p className="credit-role">
                    {credit.role} <span className="proj2">— {credit.project}</span>
                    {credit.billedAs && (
                      <span className="proj2"> (billed as {credit.billedAs})</span>
                    )}
                  </p>
                </div>
                <span className="credit-type">
                  {credit.type}
                  {credit.note && ` · ${credit.note}`}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* REEL */}
        <section id="reel" className="reel-section">
          <div className="wrap">
            <p className="kicker fade-in" style={{ color: "#FF3347", marginBottom: 16 }}>
              Screening Room
            </p>
            <h2 className="section-title fade-in" style={{ color: "#fff" }}>
              On camera, on demand.
            </h2>
            <div className="reel-grid">
              {reelVideos.map((video, i) => (
                <ReelCard video={video} key={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="wrap">
          <p className="kicker fade-in" style={{ color: "var(--crimson)", marginBottom: 16 }}>
            Profile
          </p>
          <div className="about-grid">
            <div className="fade-in">
              <div className="photo-tile">
                <Image
                  src="/images/profile-about.jpg"
                  alt="Darren Dequan Miller portrait"
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                />
                <span className="tag">Profile</span>
              </div>
              <div className="about-meta">
                <span className="l2">Based</span>
                <span className="r2">Atlanta, GA</span>
                <span className="l2">Age</span>
                <span className="r2">32</span>
                <span className="l2">Known For</span>
                <span className="r2">Darren — Kountry Wayne</span>
                <span className="l2">IMDb</span>
                <span className="r2">
                  <a
                    href={imdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    View Profile ↗
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h2 className="section-title fade-in">
                Charisma is not a performance. For Dequan, it&apos;s a resting
                state.
              </h2>
              <div className="about-body">
                <p className="fade-in">
                  Darren Dequan Miller is an actor and entertainer out of
                  Atlanta, Georgia, best recognized for his recurring role as
                  Darren in Kountry Wayne&apos;s digital sketch universe — one
                  of the most-watched original comedy channels on Facebook and
                  Instagram, reaching millions of viewers per release.
                </p>
                <p className="fade-in">
                  What separates Dequan from a typical sketch-comedy player is
                  range: comic timing sharp enough to carry a punchline alone,
                  and enough dramatic control to hold a quiet beat when a scene
                  calls for it. He works fast, takes direction well, and treats
                  a thirty-second skit with the same discipline as a feature
                  scene.
                </p>
                <p className="fade-in">
                  Off camera, he&apos;s building toward feature film, episodic
                  television, and brand campaign work — bringing an
                  established, engaged digital audience with him into every
                  room.
                </p>
                <p className="fade-in" style={{ fontStyle: "italic" }}>
                  &quot;Darren Miller is a dedicated and versatile actor whose
                  work is grounded in authenticity, emotional depth, and lived
                  experience. A native of Atlanta, Georgia, Darren brings a
                  powerful personal story to his performances — shaped by
                  overcoming early challenges and channeling that resilience
                  into compelling, character-driven work…&quot;{" "}
                  <a
                    href={imdbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontStyle: "normal", textDecoration: "underline" }}
                  >
                    Read full bio on IMDb ↗
                  </a>
                </p>
              </div>
              <blockquote className="pull fade-in">
                &quot;Give me the scene once, and I&apos;ll give you three ways
                to play it.&quot;
              </blockquote>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="resume-section">
          <div className="wrap">
            <p className="kicker fade-in" style={{ color: "var(--crimson)" }}>
              Spec Sheet
            </p>
            <div className="resume-head">
              <h2 className="section-title fade-in" style={{ margin: "16px 0 0" }}>
                The full readout.
              </h2>
              <a href="#" className="btn-download2 btn-tactile fade-in">
                Download Full Resume (PDF)
              </a>
            </div>
            <div className="resume-grid">
              <div className="resume-card fade-in">
                <div className="dial-row">
                  <svg width="120" height="66" viewBox="0 0 120 66">
                    <path
                      d="M 12 60 A 48 48 0 0 1 108 60"
                      fill="none"
                      stroke="#E4E6EA"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 40.9 21.5 A 48 48 0 0 1 88.9 30.8"
                      fill="none"
                      stroke="#E01128"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    <circle cx="40.9" cy="21.5" r="6" fill="#17181B" />
                    <circle cx="88.9" cy="30.8" r="6" fill="#17181B" />
                  </svg>
                  <div>
                    <p className="dial-label">Playable Age</p>
                    <p className="dial-value">25–38</p>
                  </div>
                </div>
                <dl className="vitals-list">
                  <dt className="l3">Height</dt>
                  <dd className="v3">5&apos; 11&quot;</dd>
                  <dt className="l3">Build</dt>
                  <dd className="v3">Athletic</dd>
                  <dt className="l3">Hair</dt>
                  <dd className="v3">Black</dd>
                  <dt className="l3">Eyes</dt>
                  <dd className="v3">Brown</dd>
                  <dt className="l3">Location</dt>
                  <dd className="v3">Atlanta, GA</dd>
                  <dt className="l3">Languages</dt>
                  <dd className="v3">English</dd>
                  <dt className="l3">Union Status</dt>
                  <dd className="v3">{unionStatus}</dd>
                </dl>
              </div>
              <div className="resume-card fade-in">
                <p className="skills-kicker">Special Skills</p>
                <ul className="skills-list">
                  <li>Comedic Improv</li>
                  <li>Sketch Comedy</li>
                  <li>Dramatic Scene Work</li>
                  <li>On-Camera Hosting</li>
                  <li>Southern Dialect (native)</li>
                  <li>Social-First Content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="wrap">
          <p className="kicker fade-in" style={{ color: "var(--crimson)", marginBottom: 16 }}>
            Lookbook
          </p>
          <h2 className="section-title fade-in">Gallery.</h2>
          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <div className="photo-tile fade-in" key={src}>
                <Image
                  src={src}
                  alt={`Darren Dequan Miller gallery photo ${i + 1}`}
                  fill
                  sizes="(max-width: 700px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING */}
        <section id="book" className="booking-section">
          <div className="wrap booking-grid">
            <div className="booking-copy">
              <p className="kicker fade-in" style={{ color: "#FF3347", marginBottom: 16 }}>
                Booking
              </p>
              <h2
                className="section-title fade-in"
                style={{ color: "#fff", marginBottom: 24 }}
              >
                Cast him.
                <br />
                He&apos;s ready.
              </h2>
              <p className="fade-in">
                For casting, brand partnerships, appearances, or production
                inquiries — reach out directly or through representation
                below.
              </p>
              <div className="rep-card fade-in">
                <p className="rep-kicker">Representation</p>
                <div className="rep-row">
                  <dt>Agent</dt>
                  <dd>{repInfo.agent}</dd>
                </div>
                <div className="rep-row">
                  <dt>Agency</dt>
                  <dd>{repInfo.agency}</dd>
                </div>
                <div className="rep-row">
                  <dt>Email</dt>
                  <dd>{repInfo.email}</dd>
                </div>
                <div className="rep-row">
                  <dt>Phone</dt>
                  <dd>{repInfo.phone}</dd>
                </div>
              </div>
              <div className="social-row fade-in">
                {socialLinks.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <a href="#top" className="wordmark">
            <span className="monogram">DDM</span>
            <span className="footer-word">Darren Dequan Miller</span>
          </a>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
          <p className="copyright">© 2026 Darren Dequan Miller. All rights reserved.</p>
        </div>
      </footer>

      <a href="#book" className="knob floating-knob" id="floatBook" aria-label="Book Dequan">
        <span
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 800,
            fontSize: "11px",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          Book
          <br />
          Now
        </span>
      </a>
    </>
  );
}
