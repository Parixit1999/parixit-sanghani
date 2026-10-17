"use client";

import { Check, Mail } from "lucide-react";
import { useState } from "react";
import { site } from "@/data/profile";

const LINKS = [
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: site.links.github, label: "GitHub" },
  { href: site.links.x, label: "X" },
];

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <footer id="contact" className="scroll-mt-20 px-6 pb-10 pt-24 text-center">
      <button
        type="button"
        onClick={copyEmail}
        aria-label={copied ? "Email copied to clipboard" : `Copy email address ${site.email}`}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a0e1f] transition hover:-translate-y-px hover:bg-[#e8e6ff]"
      >
        {copied ? <Check size={16} aria-hidden="true" /> : <Mail size={16} aria-hidden="true" />}
        <span aria-live="polite">{copied ? "Email copied" : "Copy email"}</span>
      </button>
      <div className="mt-5 flex justify-center gap-5 text-sm">
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink-strong">
            {l.label}
          </a>
        ))}
      </div>
      <p className="mt-8 text-xs text-dim">© 2026 {site.name}</p>
    </footer>
  );
}
