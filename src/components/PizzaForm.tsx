import { useTranslation } from 'react-i18next';
import PizzaInputGroup from './PizzaInputGroup';
import SectionCard from './ui/SectionCard';

function PizzaForm() {
  const { t } = useTranslation();
  return (
    <SectionCard>
      <form aria-label={t('formLabel')} className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <PizzaInputGroup size="small" />
        <hr className="text-border w-full sm:hidden" />
        <PizzaInputGroup size="big" />
      </form>
    </SectionCard>
  );
}

export default PizzaForm;
