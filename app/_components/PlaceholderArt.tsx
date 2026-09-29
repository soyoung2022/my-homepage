import type { BeyondCategory } from "../content";

const art: Record<BeyondCategory["art"], React.ReactNode> = {
  travel: (
    <>
      <rect width="160" height="112" fill="#f3eee4" />
      <circle cx="112" cy="38" r="13" fill="#ece4d5" />
      <path d="M0 72h160" stroke="#ded4c1" strokeWidth="1.4" />
      <path d="M0 72c22-10 38 6 60-2s40 8 62 0 38 2 38 2v40H0z" fill="#ece4d5" />
      <path d="M0 90c26-6 44 4 68-1s52 4 92-2v25H0z" fill="#e6dcc9" />
    </>
  ),
  objects: (
    <>
      <rect width="160" height="112" fill="#f3eee4" />
      <rect x="32" y="64" width="54" height="14" rx="2" fill="#ece4d5" />
      <rect x="32" y="64" width="54" height="14" rx="2" fill="none" stroke="#ded4c1" />
      <rect x="43" y="46" width="40" height="14" rx="2" fill="#efe8db" />
      <rect x="43" y="46" width="40" height="14" rx="2" fill="none" stroke="#ded4c1" />
      <rect x="55" y="30" width="26" height="12" rx="2" fill="#e9dfcc" />
      <rect x="55" y="30" width="26" height="12" rx="2" fill="none" stroke="#ded4c1" />
      <circle cx="120" cy="42" r="9" fill="none" stroke="#ded4c1" strokeWidth="1.4" />
    </>
  ),
  interiors: (
    <>
      <rect width="160" height="112" fill="#f3eee4" />
      <rect x="30" y="20" width="100" height="70" fill="none" stroke="#d8cdb8" strokeWidth="1.4" />
      <path d="M80 20v70M30 55h100" stroke="#d8cdb8" strokeWidth="1.4" />
      <rect x="44" y="76" width="18" height="14" fill="#eae1d0" />
      <rect x="30" y="90" width="100" height="3" fill="#e2dacb" />
    </>
  ),
  organization: (
    <>
      <rect width="160" height="112" fill="#f3eee4" />
      <rect x="26" y="22" width="108" height="68" fill="none" stroke="#d8cdb8" strokeWidth="1.4" />
      <path d="M86 22v68" stroke="#d8cdb8" strokeWidth="1.4" />
      <rect x="40" y="36" width="34" height="18" fill="#eae1d0" />
      <rect x="40" y="60" width="34" height="18" fill="#efe8db" />
      <rect x="98" y="36" width="24" height="42" fill="#e9dfcc" />
    </>
  ),
};

export function PlaceholderArt({
  variant,
  className = "",
}: {
  variant: BeyondCategory["art"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 112"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
      className={className}
    >
      {art[variant]}
    </svg>
  );
}
