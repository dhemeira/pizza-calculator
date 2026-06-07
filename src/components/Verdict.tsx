import { Trans, useTranslation } from 'react-i18next';
import usePizza from '~/context/usePizza';
import Sup from '~/components/ui/Sup';
import { calcVerdict, calcSavingsPercent } from '~/utils/verdict';
import SectionCard from '~/components/ui/SectionCard';

function Verdict() {
  const { t } = useTranslation();
  const { small, big, smallPricePerCm2, bigPricePerCm2 } = usePizza();
  const verdict = calcVerdict(smallPricePerCm2, bigPricePerCm2);
  const isTie = verdict === 'tie';
  const bigWins = verdict === 'big';
  const winnerCount = bigWins ? big.count : small.count;
  const winnerLabel = bigWins ? t('bigPizza') : t('smallPizza');
  const loserCount = bigWins ? small.count : big.count;
  const loserSize = bigWins ? t('smaller') : t('bigger');
  const percent = calcSavingsPercent(smallPricePerCm2, bigPricePerCm2);

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
    <SectionCard variant={isTie ? 'tie' : 'win'} className="gap-0.5">
      <span className={`${eyebrowClass} text-xs font-medium uppercase`}>{t('verdictEyebrow')}</span>
      <h2 className="font-title text-text text-3xl font-medium tracking-tight">{heading}</h2>
      <p className="text-text-muted text-base leading-snug font-normal">{body}</p>
    </SectionCard>
  );
}

export default Verdict;
