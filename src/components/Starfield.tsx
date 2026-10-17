"use client";

import { useEffect, useRef } from "react";

type Layer = { depth: number; size: number; speed: number };
type Star = { x: number; y: number; layer: Layer; r: number; phase: number; twinkle: number; tint: string };
type Meteor = { x: number; y: number; vx: number; vy: number; life: number };

const LAYERS: Layer[] = [
  { depth: 0.2, size: 0.8, speed: 0.015 },
  { depth: 0.5, size: 1.15, speed: 0.03 },
  { depth: 1, size: 1.6, speed: 0.05 },
];

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let meteor: Meteor | null = null;
    let nextMeteor = performance.now() + 4000;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((width * height) / 3800);
      stars = Array.from({ length: count }, () => {
        const layer = LAYERS[Math.random() < 0.55 ? 0 : Math.random() < 0.7 ? 1 : 2];
        const tinted = Math.random() < 0.12;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          layer,
          r: layer.size * (0.6 + Math.random() * 0.6),
          phase: Math.random() * Math.PI * 2,
          twinkle: 0.6 + Math.random() * 1.6,
          tint: tinted ? (Math.random() < 0.5 ? "200,210,255" : "255,220,235") : "255,255,255",
        };
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;
      const scrollY = window.scrollY;

      for (const s of stars) {
        const { depth, speed } = s.layer;
        if (!reduce) {
          s.x -= speed;
          if (s.x < -2) s.x = width + 2;
        }
        const px = s.x + mouse.x * depth * 14;
        const py = (((s.y - scrollY * depth * 0.08) % height) + height) % height + mouse.y * depth * 14;
        const alpha = reduce ? 0.8 : 0.5 + 0.5 * (0.5 + 0.5 * Math.sin((t / 1000) * s.twinkle + s.phase));
        ctx.beginPath();
        ctx.fillStyle = `rgba(${s.tint},${alpha})`;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (reduce) return;
      if (!meteor && t > nextMeteor) {
        meteor = {
          x: width * (0.25 + Math.random() * 0.7),
          y: height * Math.random() * 0.35,
          vx: -(6 + Math.random() * 3),
          vy: 2.5 + Math.random() * 1.5,
          life: 0,
        };
      }
      if (meteor) {
        const m = meteor;
        m.life += 1;
        m.x += m.vx;
        m.y += m.vy;
        const fadeOut = Math.max(0, 1 - m.life / 60);
        const tailX = m.x - m.vx * 14;
        const tailY = m.y - m.vy * 14;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${0.9 * fadeOut})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        if (m.life > 60) {
          meteor = null;
          nextMeteor = t + 7000 + Math.random() * 8000;
        }
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onPointer = (e: PointerEvent) => {
      mouse.tx = (e.clientX / width - 0.5) * 2;
      mouse.ty = (e.clientY / height - 0.5) * 2;
    };
    const onScroll = () => {
      if (nebulaRef.current && !reduce) {
        nebulaRef.current.style.transform = `translateY(${window.scrollY * -0.04}px)`;
      }
      if (reduce) draw(0);
    };
    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onPointer, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <div ref={nebulaRef} className="nebula-bg" aria-hidden="true" />
      <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 h-full w-full" style={{ zIndex: -2 }} aria-hidden="true" />
    </>
  );
}
