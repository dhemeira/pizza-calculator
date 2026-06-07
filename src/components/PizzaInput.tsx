import { useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import usePizza from '~/context/usePizza';
import { formatNumber, parseNumber } from '~/utils/format';
import NumberInput from '~/components/ui/NumberInput';

type Field = 'count' | 'diameter' | 'price';

const UNITS: Record<Field, string | null> = {
  count: null,
  diameter: 'cm',
  price: null, // resolved at render time from i18n
};

const CLAMP_RANGES: Record<Field, { min: number; max: number }> = {
  count: { min: 1, max: 20 },
  diameter: { min: 10, max: 100 },
  price: { min: 500, max: 50000 },
};

function PizzaInput({
  label,
  field,
  size,
}: {
  label: string;
  field: Field;
  size: 'small' | 'big';
}) {
  const clampId = useId();
  const { t } = useTranslation();
  const { small, big, setSmall, setBig } = usePizza();
  const [clamped, setClamped] = useState(false);

  const values = size === 'small' ? small : big;
  const setValues = size === 'small' ? setSmall : setBig;

  const unit = field === 'price' ? t('currency') : UNITS[field];
  const { min, max } = CLAMP_RANGES[field];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClamped(false);
    setValues({ ...values, [field]: parseNumber(e.target.value) });
  };

  const handleBlur = () => {
    const clamped = Math.min(max, Math.max(min, values[field]));
    if (clamped !== values[field]) setClamped(true);
    setValues({ ...values, [field]: clamped });
  };

  const clampMessage = clamped ? (
    <p id={clampId} role="alert" className="text-success text-xs font-medium">
      {t('clampedRange', {
        min: formatNumber(min),
        max: formatNumber(max),
        unit: unit ? ` ${unit}` : '',
      })}
    </p>
  ) : null;

  return (
    <NumberInput
      label={label}
      value={formatNumber(values[field])}
      unit={unit}
      clampMessage={clampMessage}
      ariaDescribedBy={clamped ? clampId : undefined}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}

export default PizzaInput;
