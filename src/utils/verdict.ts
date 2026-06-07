export type Verdict = 'big' | 'small' | 'tie';

export const calcVerdict = (smallPricePerCm2: number, bigPricePerCm2: number): Verdict => {
  const percent = calcSavingsPercent(smallPricePerCm2, bigPricePerCm2);
  if (percent < 5) return 'tie';
  return bigPricePerCm2 <= smallPricePerCm2 ? 'big' : 'small';
};

export const calcSavingsPercent = (smallPricePerCm2: number, bigPricePerCm2: number): number =>
  Math.round(
    (Math.abs(smallPricePerCm2 - bigPricePerCm2) / Math.max(smallPricePerCm2, bigPricePerCm2)) * 100
  );
