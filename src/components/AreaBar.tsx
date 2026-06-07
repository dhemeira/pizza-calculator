import { Trans } from 'react-i18next';
import { formatNumber } from '~/utils/format';
import Sup from '~/components/Sup';

interface AreaBarProps {
  count: number;
  label: string;
  area: number;
  barWidth: string;
  isWinner: boolean;
}

function AreaBar({ count, label, area, barWidth, isWinner }: AreaBarProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-end justify-between">
        <span className="text-text text-sm font-medium">
          {count} x {label}
        </span>
        <span className="text-text-muted text-lg font-medium">
          <Trans
            i18nKey="area"
            values={{ area: formatNumber(area) }}
            components={{ sup: <Sup /> }}
          />
        </span>
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full">
        <div
          className={`h-full rounded-full ${isWinner ? 'bg-success' : 'bg-accent'}`}
          style={{ width: barWidth }}
        />
      </div>
    </div>
  );
}

export default AreaBar;
