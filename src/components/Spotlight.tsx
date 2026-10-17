"use client";

import type { HTMLAttributes, PointerEvent } from "react";

/** Card wrapper with a soft glow that follows the cursor. Tint comes from the --glow CSS variable. */
export function Spotlight({ className = "", children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div {...rest} onPointerMove={onPointerMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
