import { Trans, useTranslation } from 'react-i18next';
import usePizza from '~/context/usePizza';
import { formatNumber } from '~/utils/format';
import AreaBar from '~/components/AreaBar';
import SectionCard from '~/components/ui/SectionCard';
import SectionHeader from '~/components/ui/SectionHeader';
import { calcAreaPercent } from '~/utils/pizza';

function AreaBreakdown() {
  const { t } = useTranslation();
  const { small, big, smallArea, bigArea } = usePizza();

  const maxArea = Math.max(smallArea, bigArea);
  const smallBarRatio = smallArea / maxArea;
  const bigBarRatio = bigArea / maxArea;

  const areaPercent = calcAreaPercent(smallArea, bigArea);
  const isTie = areaPercent < 5;
  const bigWins = bigArea > smallArea;

  const singleSmallArea = smallArea / small.count;
  const bigToSmallAreaRatio = Math.round((bigArea / singleSmallArea) * 10) / 10;

  const summaryKey = isTie ? 'areaTieText' : bigWins ? 'areaBigWinsText' : 'areaSmallWinsText';

  return (
    <SectionCard className="gap-4 sm:gap-6">
      <SectionHeader
        eyebrow={t('areaEyebrow')}
        title={t('areaTitle')}
        subtitle={t('areaSubtitle')}
      />

      <div className="flex flex-col gap-3">
        <AreaBar
          count={small.count}
          label={t('smallPizza')}
          area={smallArea}
          ratio={smallBarRatio}
          isWinner={smallArea >= bigArea}
        />
        <AreaBar
          count={big.count}
          label={t('bigPizza')}
          area={bigArea}
          ratio={bigBarRatio}
          isWinner={bigArea > smallArea}
        />
      </div>

      <div className="border-border bg-bg-grain rounded-xl border p-4 sm:px-5 sm:py-6">
        <p className="text-text text-base leading-snug font-normal">
          <Trans
            i18nKey={summaryKey}
            values={{
              percent: areaPercent,
              ratio: formatNumber(bigToSmallAreaRatio),
              bigCount: big.count,
            }}
            components={{
              em: <span className="text-accent font-title italic" />,
              em2: <span className="text-accent font-title italic" />,
            }}
          />
        </p>
      </div>
    </SectionCard>
  );
}

export default AreaBreakdown;
