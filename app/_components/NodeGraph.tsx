const nodes: { x: number; y: number; r: number; filled?: boolean }[] = [
  { x: 60, y: 20, r: 3 },
  { x: 30, y: 46, r: 2.2 },
  { x: 92, y: 42, r: 2.6 },
  { x: 17, y: 82, r: 1.8 },
  { x: 60, y: 68, r: 3.6, filled: true },
  { x: 100, y: 86, r: 2 },
  { x: 47, y: 103, r: 2.4 },
  { x: 78, y: 98, r: 1.6 },
];

const links: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 4],
  [2, 4],
  [1, 3],
  [4, 3],
  [4, 5],
  [4, 6],
  [4, 7],
  [2, 7],
];

export function NodeGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="0.9" opacity="0.5">
        {links.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
          />
        ))}
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.75">
        {nodes
          .filter((n) => !n.filled)
          .map((n) => (
            <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r={n.r} />
          ))}
      </g>
      <circle
        cx={60}
        cy={68}
        r={3.6}
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
