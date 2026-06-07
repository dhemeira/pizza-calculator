import { describe, it, expect } from 'vitest';
import { calcArea, calcPricePerCm2, calcAreaPercent } from './pizza';

describe('calcArea', () => {
  it('calculates area for a single pizza', () => {
    // π × (32/2)² × 1 = π × 256 ≈ 804
    expect(calcArea({ count: 1, diameter: 32, price: 0 })).toBe(804);
  });

  it('multiplies by count', () => {
    const single = calcArea({ count: 1, diameter: 32, price: 0 });
    const double = calcArea({ count: 2, diameter: 32, price: 0 });
    expect(double).toBe(single * 2);
  });

  it('returns 0 for zero diameter', () => {
    expect(calcArea({ count: 1, diameter: 0, price: 0 })).toBe(0);
  });

  it('returns 0 for zero count', () => {
    expect(calcArea({ count: 0, diameter: 32, price: 0 })).toBe(0);
  });

  it('rounds to nearest integer', () => {
    const result = calcArea({ count: 1, diameter: 45, price: 0 });
    expect(Number.isInteger(result)).toBe(true);
  });
});

describe('calcAreaPercent', () => {
  it('returns the percentage difference relative to the smaller area', () => {
    expect(calcAreaPercent(100, 200)).toBe(100);
  });

  it('is symmetric — order of arguments does not matter', () => {
    expect(calcAreaPercent(100, 200)).toBe(calcAreaPercent(200, 100));
  });

  it('returns 0 when both areas are equal', () => {
    expect(calcAreaPercent(500, 500)).toBe(0);
  });

  it('returns 0 when the smaller area is 0 to avoid division by zero', () => {
    expect(calcAreaPercent(0, 500)).toBe(0);
  });

  it('rounds to nearest integer', () => {
    const result = calcAreaPercent(100, 133);
    expect(Number.isInteger(result)).toBe(true);
  });
});

describe('calcPricePerCm2', () => {
  it('divides total price by area and rounds to 2 decimal places', () => {
    // 8000 / 1608 ≈ 4.98
    expect(calcPricePerCm2(8000, 1608)).toBe(4.98);
  });

  it('returns 0 when area is 0 to avoid division by zero', () => {
    expect(calcPricePerCm2(5000, 0)).toBe(0);
  });

  it('returns exact value when evenly divisible', () => {
    expect(calcPricePerCm2(1000, 500)).toBe(2);
  });

  it('big pizza wins when it has lower price per cm²', () => {
    const small = calcPricePerCm2(8000, calcArea({ count: 2, diameter: 32, price: 4000 }));
    const big = calcPricePerCm2(6500, calcArea({ count: 1, diameter: 45, price: 6500 }));
    expect(big).toBeLessThan(small);
  });
});
