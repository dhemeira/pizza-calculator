import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import usePizza from '~/context/usePizza';
import { formatNumber, parseNumber } from '~/utils/format';

function FormInput({
  label,
  type,
  size,
}: {
  label: string;
  type: 'count' | 'diameter' | 'price';
  size: 'small' | 'big';
}) {
  const id = useId();
  const { t } = useTranslation();
  const { small, big, setSmall, setBig } = usePizza();

  const values = size === 'small' ? small : big;
  const setValues = size === 'small' ? setSmall : setBig;

  const units = { count: null, diameter: 'cm', price: t('currency') };
  const unit = units[type];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [type]: parseNumber(e.target.value) });
  };

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
          value={formatNumber(values[type])}
          onChange={handleChange}
        />
        {unit && (
          <span className="text-text-muted pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs font-medium">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

export default FormInput;
