import { Trans, useTranslation } from 'react-i18next';
import usePizza from '~/context/usePizza';
import Sup from '~/components/Sup';

function VerdictSection() {
  const { t } = useTranslation();
  const { small, big, smallPricePerCm2, bigPricePerCm2 } = usePizza();
  const bigWins = bigPricePerCm2 <= smallPricePerCm2;
  const winnerCount = bigWins ? big.count : small.count;
  const winnerLabel = bigWins ? t('bigPizza') : t('smallPizza');
  const loserCount = bigWins ? small.count : big.count;
  const loserSize = bigWins ? t('smaller') : t('bigger');
  const percent = Math.round(
    (Math.abs(smallPricePerCm2 - bigPricePerCm2) / Math.max(smallPricePerCm2, bigPricePerCm2)) * 100
  );
  const isTie = percent < 5;

  const sectionClass =
    'flex-col gap-0.5 rounded-2xl border p-4 sm:px-8 sm:py-7 max-w-4xl flex w-full ' +
    (isTie ? 'border-text-muted bg-border' : 'bg-success-bg border-success   ');

  const eyebrowClass = isTie ? 'text-text-muted' : 'text-success';

  const heading = isTie ? (
    <Trans i18nKey="tieVerdict" components={{ color: <span className="text-accent italic" /> }} />
  ) : (
    <Trans
      i18nKey="verdict"
      values={{ number: winnerCount, what: winnerLabel, win: t('win') }}
      components={{ color: <span className="text-accent italic" /> }}
    />
  );

  const body = isTie ? (
    <Trans i18nKey="tieText" components={{ sup: <Sup /> }} />
  ) : (
    <Trans
      i18nKey="verdictText"
      values={{ percent, number: loserCount, size: loserSize }}
      components={{ sup: <Sup /> }}
    />
  );

  return (
    <section className={sectionClass}>
      <span className={`${eyebrowClass} text-xs font-medium uppercase`}>{t('verdictEyebrow')}</span>
      <h2 className="font-title text-text text-3xl font-medium tracking-tight">{heading}</h2>
      <p className="text-text-muted text-base leading-snug font-normal">{body}</p>
    </section>
  );
}

export default VerdictSection;
