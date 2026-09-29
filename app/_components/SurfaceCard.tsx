import type { ReactNode } from "react";

type SurfaceCardProps = {
  children: ReactNode;
  as?: "div" | "article";
  className?: string;
};

export function SurfaceCard({
  children,
  as: Tag = "div",
  className = "",
}: SurfaceCardProps) {
  return (
    <Tag
      className={[
        "rounded-xl border border-line bg-paper p-6",
        "shadow-[0_1px_2px_rgba(38,36,31,0.03)]",
        "transition-[border-color,box-shadow,transform] duration-200 motion-reduce:transition-none",
        "hover:-translate-y-0.5 hover:border-ink-muted hover:shadow-[0_10px_28px_rgba(38,36,31,0.07)]",
        "motion-reduce:hover:translate-y-0",
        className,
      ].join(" ")}
    >
      {children}
    </Tag>
  );
}
