interface SectionLabelProps {
    children: React.ReactNode;
    light?: boolean;
  }
  
  export function SectionLabel({
    children,
    light = false
  }: SectionLabelProps) {
    return (
      <div
        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
          light ? "text-white/50" : "text-black/40"
        }`}
      >
        {children}
      </div>
    );
  }
  