import { useTranslation } from 'react-i18next';
import FormInput from './FormInput';

function FormColumn({ size }: { size: 'small' | 'big' }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className={
            'bg-accent inline-block rounded-full ' + (size === 'small' ? 'h-3 w-3' : 'h-6 w-6')
          }
        />
        <h2 className="font-title text-text text-2xl font-medium">{t(`${size}Pizza`)}</h2>
      </div>
      <FormInput label={t('count')} size={size} type="count" />
      <FormInput label={t('diameter')} size={size} type="diameter" />
      <FormInput label={t('price')} size={size} type="price" />
    </div>
  );
}

export default FormColumn;
