import { Trans, useTranslation } from 'react-i18next';
import usePizza from '~/context/usePizza';
import { formatNumber } from '~/utils/format';
import AreaBar from '~/components/AreaBar';

function AreaSection() {
  const { t } = useTranslation();
  const { small, big, smallArea, bigArea } = usePizza();

  const maxArea = Math.max(smallArea, bigArea);
  const smallBarWidth = `${((smallArea / maxArea) * 100).toFixed(2)}%`;
  const bigBarWidth = `${((bigArea / maxArea) * 100).toFixed(2)}%`;

  const biggerArea = Math.max(smallArea, bigArea);
  const smallerArea = Math.min(smallArea, bigArea);
  const percent =
    smallerArea > 0 ? Math.round(((biggerArea - smallerArea) / smallerArea) * 100) : 0;
  const isTie = percent < 5;
  const bigWins = bigArea > smallArea;

  const singleSmallArea = smallArea / small.count;
  const ratio = Math.round((bigArea / singleSmallArea) * 10) / 10;

  const summaryKey = isTie ? 'areaTieText' : bigWins ? 'areaBigWinsText' : 'areaSmallWinsText';

  return (
    <section className="border-border bg-surface flex w-full max-w-4xl flex-col gap-4 rounded-2xl border p-4 sm:gap-6 sm:px-8 sm:py-7">
      <div className="flex flex-col gap-0.5">
        <span className="text-accent text-xs font-medium uppercase">{t('areaEyebrow')}</span>
        <h2 className="font-title text-text text-2xl font-medium tracking-tight">
          {t('areaTitle')}
        </h2>
        <p className="text-text-muted text-sm leading-snug font-normal">{t('areaSubtitle')}</p>
      </div>

      <div className="flex flex-col gap-3">
        <AreaBar
          count={small.count}
          label={t('smallPizza')}
          area={smallArea}
          barWidth={smallBarWidth}
          isWinner={smallArea >= bigArea}
        />
        <AreaBar
          count={big.count}
          label={t('bigPizza')}
          area={bigArea}
          barWidth={bigBarWidth}
          isWinner={bigArea > smallArea}
        />
      </div>

      <div className="border-border bg-bg-grain rounded-xl border p-4 sm:px-5 sm:py-6">
        <p className="text-text text-base leading-snug font-normal">
          <Trans
            i18nKey={summaryKey}
            values={{ percent, ratio: formatNumber(ratio), bigCount: big.count }}
            components={{
              em: <span className="text-accent font-title italic" />,
              em2: <span className="text-accent font-title italic" />,
            }}
          />
        </p>
      </div>
    </section>
  );
}

export default AreaSection;
