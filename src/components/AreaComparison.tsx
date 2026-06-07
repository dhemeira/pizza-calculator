import { useTranslation } from 'react-i18next';
import usePizza from '~/context/usePizza';
import PizzaCircle from '~/components/PizzaCircle';
import SectionCard from '~/components/ui/SectionCard';
import SectionHeader from '~/components/ui/SectionHeader';
import { calcAreaPercent } from '~/utils/pizza';

function AreaDeltaLabel({
  areaPercent,
  smallPizzaIsLarger,
}: {
  areaPercent: number;
  smallPizzaIsLarger: boolean;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <span className="text-accent text-xs font-semibold uppercase">{t('morePizzaLabel')}</span>
      <span className="font-title text-accent text-4xl leading-8 font-medium italic">
        +{areaPercent}%
      </span>
      <span className="text-accent hidden text-4xl leading-3 font-bold sm:block">
        {smallPizzaIsLarger ? '←' : '→'}
      </span>
      <span className="text-accent text-4xl font-bold sm:hidden">
        {smallPizzaIsLarger ? '↑' : '↓'}
      </span>
    </div>
  );
}

function AreaComparison() {
  const { t } = useTranslation();
  const { small, big, smallArea, bigArea } = usePizza();

  const maxArea = Math.max(smallArea, bigArea);
  const smallCircleRatio = Math.sqrt(smallArea / maxArea);
  const bigCircleRatio = Math.sqrt(bigArea / maxArea);

  const areaPercent = calcAreaPercent(smallArea, bigArea);
  const smallPizzaIsLarger = smallArea > bigArea;

  return (
    <SectionCard className="gap-2 sm:gap-6">
      <SectionHeader
        eyebrow={t('moreEyebrow')}
        title={t('moreTitle')}
        subtitle={t('moreSubtitle')}
      />

      <div className="flex flex-col items-center justify-center">
        <div className="mt-4 flex w-full max-w-64 flex-col items-stretch justify-center gap-4 sm:max-w-2xl sm:flex-row sm:gap-6">
          <PizzaCircle
            count={small.count}
            label={t('smallPizza')}
            area={smallArea}
            ratio={smallCircleRatio}
          />
          <AreaDeltaLabel areaPercent={areaPercent} smallPizzaIsLarger={smallPizzaIsLarger} />
          <PizzaCircle
            count={big.count}
            label={t('bigPizza')}
            area={bigArea}
            ratio={bigCircleRatio}
          />
        </div>
      </div>
    </SectionCard>
  );
}

export default AreaComparison;
