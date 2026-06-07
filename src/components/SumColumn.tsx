import { Trans, useTranslation } from 'react-i18next';
import Sup from '~/components/Sup';
import usePizza from '~/context/usePizza';
import { formatNumber } from '~/utils/format';

function SumColumn({ size }: { size: 'small' | 'big' }) {
  const { t } = useTranslation();
  const { smallArea, bigArea, smallTotalPrice, bigTotalPrice, smallPricePerCm2, bigPricePerCm2 } =
    usePizza();
  const area = size === 'small' ? smallArea : bigArea;
  const price = size === 'small' ? smallTotalPrice : bigTotalPrice;
  const pricePerCm2 = size === 'small' ? smallPricePerCm2 : bigPricePerCm2;
  return (
    <div className="border-border bg-surface flex flex-1 flex-col gap-3 rounded-2xl border p-4 sm:px-8 sm:py-7">
      <h2 className="font-title text-text-muted text-lg font-medium italic">
        {t(`${size}Pizza`)} {t('total')}
      </h2>
      <div className="flex flex-row justify-between gap-2">
        <span className="text-text-muted text-sm font-normal">{t('totalArea')}</span>
        <span className="text-text text-sm font-medium">
          <Trans
            i18nKey="area"
            values={{ area: formatNumber(area) }}
            components={{ sup: <Sup /> }}
          />
        </span>
      </div>
      <hr className="text-border" />
      <div className="flex flex-row justify-between gap-2">
        <span className="text-text-muted text-sm font-normal">{t('totalPrice')}</span>
        <span className="text-text text-sm font-medium">
          {formatNumber(price)} {t('currency')}
        </span>
      </div>
      <hr className="text-border" />
      <div className="flex flex-row justify-between gap-2">
        <span className="text-text text-sm font-medium">
          <Trans i18nKey="pricePerCm2" components={{ sup: <Sup /> }} />
        </span>
        <span className="text-text-muted font-title text-lg font-medium">
          {formatNumber(pricePerCm2)} {t('currency')}
        </span>
      </div>
    </div>
  );
}

export default SumColumn;
