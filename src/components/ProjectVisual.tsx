import type { ProjectVisualKey } from "@/data/profile";

const FRAME = "absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105";

function Docs() {
  return (
    <div className={FRAME} style={{ background: "linear-gradient(135deg,#1f1b14,#2a241a)" }}>
      <div className="relative h-20 w-[60px] -rotate-6 transition-transform duration-500 group-hover:-rotate-2">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-sm bg-[#dcd2b4]/30" />
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm bg-[#dcd2b4]/50" />
        <div className="absolute inset-0 rounded-sm bg-[#dcd2b4]/95 p-2">
          {[70, 85, 60, 90, 75, 55].map((w, i) => (
            <div key={i} className="mb-[5px] h-[3px] rounded-full bg-[#64503280]" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Pipeline() {
  return (
    <div className={`${FRAME} gap-4`} style={{ background: "linear-gradient(135deg,#0a1a1f,#0f2328)" }}>
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-4">
          <span className="h-[34px] w-[34px] rounded-lg border-[1.5px] border-teal-300/70 bg-teal-300/10" />
          {i < 2 && <i className="flow-line block h-0.5 w-[26px]" />}
        </div>
      ))}
    </div>
  );
}

function Similarity() {
  return (
    <div className={FRAME} style={{ background: "linear-gradient(135deg,#120f24,#1a1533)" }}>
      <svg viewBox="0 0 160 100" className="h-[110px] w-[176px]" aria-hidden="true">
        {[0, 1, 2].flatMap((c) =>
          [0, 1].map((r) => {
            const x = 16 + c * 48;
            const y = 12 + r * 44;
            const match = (c === 2 && r === 0) || (c === 1 && r === 1);
            const query = c === 0 && r === 0;
            return (
              <rect
                key={`${c}-${r}`}
                x={x}
                y={y}
                width="32"
                height="32"
                rx="4"
                fill={query ? "rgb(167 139 250 / .35)" : "rgb(255 255 255 / .06)"}
                stroke={query ? "#a78bfa" : match ? "#c4b5fd" : "rgb(255 255 255 / .15)"}
                strokeWidth={query || match ? 1.5 : 1}
              />
            );
          }),
        )}
        <g stroke="#c4b5fd" strokeWidth="1" strokeDasharray="3 3" fill="none">
          <path d="M48 28 C 80 10, 100 10, 112 28" />
          <path d="M40 44 C 50 70, 60 72, 64 72" />
        </g>
        <circle cx="32" cy="28" r="3" fill="#ede9fe" />
      </svg>
    </div>
  );
}

function Storage() {
  return (
    <div className={FRAME} style={{ background: "linear-gradient(135deg,#0a0e1a,#101624)" }}>
      <div className="relative h-[90px] w-[110px] border border-blue-400/40 bg-[repeating-linear-gradient(180deg,rgb(100_150_230/0.2)_0_16px,transparent_16px_22px)]">
        {[6, 28, 50, 72].map((top, i) => (
          <span
            key={top}
            className={`led-blink absolute left-2.5 h-1 w-1 rounded-full ${i === 3 ? "bg-teal-300/40" : "bg-teal-300"}`}
            style={{ top, animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function Imaging() {
  return (
    <div className={FRAME} style={{ background: "linear-gradient(135deg,#071318,#0b1d24)" }}>
      <svg viewBox="0 0 140 100" className="h-[110px] w-[154px]" aria-hidden="true">
        <g fill="rgb(125 211 252 / .08)" stroke="rgb(125 211 252 / .7)" strokeWidth="1.3">
          <path d="M64 18 C 48 18, 34 36, 30 60 C 27 78, 36 88, 50 84 C 60 81, 64 72, 64 60 Z" />
          <path d="M76 18 C 92 18, 106 36, 110 60 C 113 78, 104 88, 90 84 C 80 81, 76 72, 76 60 Z" />
        </g>
        <path d="M70 8 V40 M70 40 L62 50 M70 40 L78 50" stroke="rgb(125 211 252 / .5)" strokeWidth="1.3" fill="none" />
        <path d="M84 50 V44 H90 M98 44 H104 V50 M104 64 V70 H98 M90 70 H84 V64" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
        <circle cx="94" cy="57" r="4" fill="rgb(251 191 36 / .35)" />
      </svg>
    </div>
  );
}

function Intrusion() {
  const nodes = [
    [30, 30], [70, 18], [110, 34], [24, 72], [66, 60], [112, 78],
  ] as const;
  const edges = [[0, 1], [1, 2], [0, 4], [1, 4], [2, 4], [3, 4], [4, 5], [2, 5]] as const;
  return (
    <div className={FRAME} style={{ background: "linear-gradient(135deg,#140a10,#1d0d16)" }}>
      <svg viewBox="0 0 140 100" className="h-[110px] w-[154px]" aria-hidden="true">
        <g stroke="rgb(255 255 255 / .18)" strokeWidth="1">
          {edges.map(([a, b]) => (
            <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
          ))}
        </g>
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i === 5 ? 5 : 4}
            fill={i === 5 ? "#fb7185" : "rgb(253 164 175 / .25)"}
            stroke={i === 5 ? "#fecdd3" : "rgb(253 164 175 / .6)"}
          />
        ))}
        <circle cx="112" cy="78" r="11" fill="none" stroke="rgb(251 113 133 / .5)" strokeDasharray="2 3" />
        <path d="M66 50 L74 53 V59 C74 64 70 67 66 68 C62 67 58 64 58 59 V53 Z" fill="#1d0d16" stroke="#fda4af" strokeWidth="1.3" />
      </svg>
    </div>
  );
}

const VISUALS: Record<ProjectVisualKey, () => React.JSX.Element> = {
  docs: Docs,
  pipeline: Pipeline,
  similarity: Similarity,
  storage: Storage,
  imaging: Imaging,
  intrusion: Intrusion,
};

export function ProjectVisual({ kind }: { kind: ProjectVisualKey }) {
  const Visual = VISUALS[kind];
  return (
    <div className="relative h-[150px] overflow-hidden" aria-hidden="true">
      <Visual />
    </div>
  );
}
