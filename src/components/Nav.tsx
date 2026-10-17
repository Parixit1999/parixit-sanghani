"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/profile";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className={`fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-space/65 backdrop-blur-xl transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#top" className="font-display font-semibold text-ink-strong">
          {site.name}
        </a>
        <div className="flex gap-4 text-sm sm:gap-6">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-muted transition-colors hover:text-ink-strong ${
                link.href === "#about" || link.href === "#skills" ? "hidden sm:inline" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
