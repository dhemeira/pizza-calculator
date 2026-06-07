import { Trans } from 'react-i18next';
import { formatNumber } from '~/utils/format';
import Sup from '~/components/ui/Sup';

interface PizzaCircleProps {
  count: number;
  label: string;
  area: number;
  ratio: number;
}

function PizzaCircle({ count, label, area, ratio }: PizzaCircleProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-2 self-stretch">
      <div className="flex flex-1 items-center justify-center self-stretch" aria-hidden="true">
        <div
          className="rounded-full bg-yellow-800"
          style={{ width: `${(ratio * 100).toFixed(2)}%`, padding: `${(ratio * 8).toFixed(2)}%` }}>
          <div className="grid aspect-square grid-cols-7 grid-rows-7 rounded-full bg-orange-300 p-1">
            <div className="bg-accent col-start-2 row-start-2 aspect-square h-[125%] w-[125%] rounded-full"></div>
            <div className="bg-accent col-start-3 row-start-4 aspect-square h-[150%] w-[150%] rounded-full"></div>
            <div className="bg-accent col-start-5 row-start-3 aspect-square h-[150%] w-[150%] rounded-full"></div>
            <div className="bg-accent col-start-4 row-start-1 aspect-square h-[150%] w-[150%] rounded-full"></div>
            <div className="bg-accent col-start-5 row-start-6 aspect-square h-[150%] w-[150%] rounded-full"></div>
            <div className="bg-accent col-start-7 row-start-4 aspect-square h-full w-full rounded-full"></div>
            <div className="bg-accent col-start-1 row-start-4 aspect-square h-full w-full rounded-full"></div>
            <div className="bg-accent col-start-2 row-start-6 aspect-square h-[125%] w-[125%] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-text text-base font-medium">
          {count} x {label}
        </span>
        <span className="text-text-muted text-sm font-medium">
          <Trans
            i18nKey="area"
            values={{ area: formatNumber(area) }}
            components={{ sup: <Sup /> }}
          />
        </span>
      </div>
    </div>
  );
}

export default PizzaCircle;
