import { type ReactNode } from 'react';

type Variant = 'default' | 'tie' | 'win';

const variantClasses: Record<Variant, string> = {
  default: 'bg-surface border-border',
  tie: 'bg-border border-text-muted',
  win: 'bg-success-bg border-success',
};

function SectionCard({
  children,
  className = '',
  variant = 'default',
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}) {
  return (
    <section
      className={`flex w-full max-w-4xl flex-col rounded-2xl border p-4 sm:px-8 sm:py-7 ${variantClasses[variant]} ${className}`}>
      {children}
    </section>
  );
}

export default SectionCard;
