"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const header = document.getElementById("siteHeader");
    const floatBook = document.getElementById("floatBook");
    if (!header || !floatBook) return;

    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
      floatBook.classList.toggle(
        "visible",
        window.scrollY > window.innerHeight * 0.6
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
