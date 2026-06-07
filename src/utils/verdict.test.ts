import { describe, it, expect } from 'vitest';
import { calcVerdict, calcSavingsPercent } from './verdict';

describe('calcSavingsPercent', () => {
  it('returns 0 for identical prices', () => {
    expect(calcSavingsPercent(5, 5)).toBe(0);
  });

  it('calculates percent relative to the higher price', () => {
    // |4 - 5| / 5 * 100 = 20%
    expect(calcSavingsPercent(5, 4)).toBe(20);
    expect(calcSavingsPercent(4, 5)).toBe(20);
  });

  it('rounds to nearest integer', () => {
    const result = calcSavingsPercent(3, 4);
    expect(Number.isInteger(result)).toBe(true);
  });
});

describe('calcVerdict', () => {
  it('returns "big" when big pizza is cheaper per cm²', () => {
    expect(calcVerdict(6, 4)).toBe('big');
  });

  it('returns "small" when small pizza is cheaper per cm²', () => {
    expect(calcVerdict(3, 6)).toBe('small');
  });

  it('returns "tie" when prices are identical', () => {
    expect(calcVerdict(5, 5)).toBe('tie');
  });

  it('returns "tie" when difference is less than 5%', () => {
    // |5 - 4.9| / 5 * 100 = 2% → tie
    expect(calcVerdict(5, 4.9)).toBe('tie');
  });

  it('returns a winner when difference is exactly 5%', () => {
    // |5 - 4.75| / 5 * 100 = 5% → not a tie
    expect(calcVerdict(5, 4.75)).not.toBe('tie');
  });

  it('returns a winner when difference rounds to exactly 5%', () => {
    // |5.3 - 5.05| / 5.3 * 100 ≈ 4.7% → rounds to 5 → not a tie
    expect(calcVerdict(5.3, 5.05)).toBe('big');
  });
});
