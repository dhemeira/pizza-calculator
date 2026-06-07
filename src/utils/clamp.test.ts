import { describe, it, expect } from 'vitest';

const clampRanges = {
  count: { min: 1, max: 20 },
  diameter: { min: 10, max: 100 },
  price: { min: 500, max: 50000 },
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

describe('clamp ranges', () => {
  describe('count (1-20)', () => {
    const { min, max } = clampRanges.count;
    it('clamps below min to 1', () => {
      expect(clamp(0, min, max)).toBe(1);
    });
    it('clamps above max to 20', () => {
      expect(clamp(99, min, max)).toBe(20);
    });
    it('keeps value at min boundary', () => {
      expect(clamp(1, min, max)).toBe(1);
    });
    it('keeps value at max boundary', () => {
      expect(clamp(20, min, max)).toBe(20);
    });
    it('keeps value within range', () => {
      expect(clamp(10, min, max)).toBe(10);
    });
  });

  describe('diameter (10-100 cm)', () => {
    const { min, max } = clampRanges.diameter;
    it('clamps below min to 10', () => {
      expect(clamp(5, min, max)).toBe(10);
    });
    it('clamps above max to 100', () => {
      expect(clamp(200, min, max)).toBe(100);
    });
    it('keeps value at min boundary', () => {
      expect(clamp(10, min, max)).toBe(10);
    });
    it('keeps value at max boundary', () => {
      expect(clamp(100, min, max)).toBe(100);
    });
    it('keeps value within range', () => {
      expect(clamp(45, min, max)).toBe(45);
    });
  });

  describe('price (500-50000)', () => {
    const { min, max } = clampRanges.price;
    it('clamps below min to 500', () => {
      expect(clamp(0, min, max)).toBe(500);
    });
    it('clamps above max to 50000', () => {
      expect(clamp(99999, min, max)).toBe(50000);
    });
    it('keeps value at min boundary', () => {
      expect(clamp(500, min, max)).toBe(500);
    });
    it('keeps value at max boundary', () => {
      expect(clamp(50000, min, max)).toBe(50000);
    });
    it('keeps value within range', () => {
      expect(clamp(6500, min, max)).toBe(6500);
    });
  });
});
