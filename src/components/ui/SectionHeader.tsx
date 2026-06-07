import { type ReactNode } from 'react';

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-accent text-xs font-medium uppercase">{eyebrow}</span>
      <h2 className="font-title text-text text-2xl font-medium tracking-tight">{title}</h2>
      {subtitle && <p className="text-text-muted text-sm leading-snug font-normal">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
