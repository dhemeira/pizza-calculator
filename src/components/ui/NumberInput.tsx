import { useId, type ReactNode } from 'react';

interface NumberInputProps {
  label: string;
  value: string;
  unit?: string | null;
  clampMessage?: ReactNode;
  ariaDescribedBy?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

function NumberInput({
  label,
  value,
  unit,
  clampMessage,
  ariaDescribedBy,
  onChange,
  onBlur,
}: NumberInputProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-text-muted text-xs font-medium uppercase">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          id={id}
          className="border-border bg-bg-grain text-text focus:ring-accent placeholder:text-text-muted w-full rounded-xl border p-3 text-base font-medium placeholder:opacity-75 focus:ring-1 focus:outline-none"
          value={value}
          aria-describedby={ariaDescribedBy}
          onChange={onChange}
          onBlur={onBlur}
        />
        {unit && (
          <span className="text-text-muted pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs font-medium">
            {unit}
          </span>
        )}
      </div>
      {clampMessage}
    </div>
  );
}

export default NumberInput;
