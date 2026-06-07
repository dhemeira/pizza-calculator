import { useTranslation } from 'react-i18next';
import PizzaInput from './PizzaInput';

function PizzaInputGroup({ size }: { size: 'small' | 'big' }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={`bg-accent inline-block rounded-full ${size === 'small' ? 'h-3 w-3' : 'h-6 w-6'}`}
        />
        <h2 className="font-title text-text text-2xl font-medium">{t(`${size}Pizza`)}</h2>
      </div>
      <PizzaInput label={t('count')} size={size} field="count" />
      <PizzaInput label={t('diameter')} size={size} field="diameter" />
      <PizzaInput label={t('price')} size={size} field="price" />
    </div>
  );
}

export default PizzaInputGroup;
