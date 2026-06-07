import { useTranslation } from 'react-i18next';
import usePizza from '~/context/usePizza';
import PizzaCircle from '~/components/PizzaCircle';

function CompareSection() {
  const { t } = useTranslation();
  const { small, big, smallArea, bigArea } = usePizza();

  const maxArea = Math.max(smallArea, bigArea);
  const smallRatio = Math.sqrt(smallArea / maxArea);
  const bigRatio = Math.sqrt(bigArea / maxArea);

  const largerArea = Math.max(smallArea, bigArea);
  const smallerArea = Math.min(smallArea, bigArea);
  const areaPercent =
    smallerArea > 0 ? Math.round(((largerArea - smallerArea) / smallerArea) * 100) : 0;
  const biggerIsSmall = smallArea > bigArea;

  const centreLabel = (
    <div className="flex flex-col items-center justify-center gap-1">
      <span className="text-accent text-xs font-semibold uppercase">{t('morePizzaLabel')}</span>
      <span className="font-title text-accent text-4xl leading-8 font-medium italic">
        +{areaPercent}%
      </span>
      <span className="text-accent hidden text-4xl leading-3 font-bold sm:block">
        {biggerIsSmall ? '←' : '→'}
      </span>
      <span className="text-accent text-4xl font-bold sm:hidden">{biggerIsSmall ? '↑' : '↓'}</span>
    </div>
  );

  return (
    <section className="border-border bg-surface flex w-full max-w-4xl flex-col gap-2 rounded-2xl border p-4 sm:gap-6 sm:px-8 sm:py-7">
      <div className="flex flex-col gap-0.5">
        <span className="text-accent text-xs font-medium uppercase">{t('moreEyebrow')}</span>
        <h2 className="font-title text-text text-2xl font-medium tracking-tight">
          {t('moreTitle')}
        </h2>
        <p className="text-text-muted text-sm leading-snug font-normal">{t('moreSubtitle')}</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 flex w-full max-w-64 flex-col items-stretch justify-center gap-4 sm:max-w-2xl sm:flex-row sm:gap-6">
          <PizzaCircle
            count={small.count}
            label={t('smallPizza')}
            area={smallArea}
            ratio={smallRatio}
          />
          {centreLabel}
          <PizzaCircle count={big.count} label={t('bigPizza')} area={bigArea} ratio={bigRatio} />
        </div>
      </div>
    </section>
  );
}

export default CompareSection;
