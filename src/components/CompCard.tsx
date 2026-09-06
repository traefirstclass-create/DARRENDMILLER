"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function CompCard() {
  const outerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const card = cardRef.current;
    const sheen = sheenRef.current;
    if (!outer || !card || !sheen) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      card.style.transform = `rotateX(${(py - 0.5) * -6}deg) rotateY(${
        (px - 0.5) * 8
      }deg)`;
      sheen.style.background = `radial-gradient(circle 260px at ${
        px * 100
      }% ${py * 100}%, rgba(255,255,255,0.55), transparent 60%)`;
    };

    const onLeave = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg)";
      sheen.style.background =
        "radial-gradient(circle 260px at 50% 50%, rgba(255,255,255,0.55), transparent 60%)";
    };

    outer.addEventListener("mousemove", onMove);
    outer.addEventListener("mouseleave", onLeave);
    return () => {
      outer.removeEventListener("mousemove", onMove);
      outer.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="card-wrap">
      <div className="card-outer" ref={outerRef}>
        <div className="card" ref={cardRef}>
          <div className="card-foil" />
          <div style={{ padding: "16px 16px 0" }}>
            <div className="photo-tile" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/headshot-card.jpg"
                alt="Darren Dequan headshot"
                fill
                sizes="320px"
                priority
              />
              <span className="tag">Headshot</span>
              <div
                className="sheen"
                ref={sheenRef}
                style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
              />
            </div>
          </div>
          <div className="card-body">
            <div className="card-body-top">
              <p className="kicker">On Screen As &quot;Darren&quot;</p>
              <span className="available">
                <span className="dot" />
                <span className="txt">Available</span>
              </span>
            </div>
            <h2>Darren Dequan </h2>
            <p className="sub">Actor / Entertainer · Atlanta, GA</p>
            <div className="stat-grid">
              <div>
                <span className="label">Height</span>5&apos; 11&quot;
              </div>
              <div>
                <span className="label">Build</span>Athletic
              </div>
              <div>
                <span className="label">Hair</span>Black
              </div>
              <div>
                <span className="label">Eyes</span>Brown
              </div>
              <div>
                <span className="label">Age Range</span>25–38
              </div>
              <div>
                <span className="label">Base</span>ATL Metro
              </div>
            </div>
          </div>
        </div>
        <a
          href="#book"
          className="knob card-knob"
          aria-label="Book Dequan"
          style={{
            position: "absolute",
            bottom: "-24px",
            right: "-24px",
            width: "64px",
            height: "64px",
            zIndex: 20,
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-archivo), sans-serif",
              fontWeight: 800,
              fontSize: "10px",
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            Book
          </span>
        </a>
      </div>
    </div>
  );
}
