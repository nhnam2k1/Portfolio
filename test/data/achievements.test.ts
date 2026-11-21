import { describe, it, expect } from 'vitest';
import { achievements } from '../../src/assets/data/achievements';

describe('achievements', () => {
  it('should be an array with at least one entry', () => {
    expect(Array.isArray(achievements)).toBe(true);
    expect(achievements.length).toBeGreaterThan(0);
  });

  it('each entry should have a title', () => {
    achievements.forEach((a) => {
      expect(a.title).toBeTruthy();
    });
  });

  it('each entry should have a title and period', () => {
    achievements.forEach((a) => {
      expect(a.title).toBeTruthy();
      expect(a.period).toBeTruthy();
    });
  });

  it('should have Uber internship offer', () => {
    const uber = achievements.find((a) => a.title.includes('Uber'));
    expect(uber).toBeDefined();
    expect(uber!.period).toBe('Feb 2025');
  });

  it('should have TomTom internship offer', () => {
    const tomtom = achievements.find((a) => a.title.includes('TomTom'));
    expect(tomtom).toBeDefined();
    expect(tomtom!.period).toBe('Jul 2022');
  });

  it('should have Google Hash Code 2021 with bullets', () => {
    const hashCode = achievements.find((a) => a.title.includes('Hash Code'));
    expect(hashCode).toBeDefined();
    expect(Array.isArray(hashCode!.bullets)).toBe(true);
    expect(hashCode!.bullets!.length).toBeGreaterThan(0);
    expect(hashCode!.period).toBe('2021');
  });

  it('should have ACM ICPC entry with bullets', () => {
    const icpc = achievements.find((a) => a.title.includes('ACM ICPC'));
    expect(icpc).toBeDefined();
    expect(Array.isArray(icpc!.bullets)).toBe(true);
    expect(icpc!.bullets!.length).toBeGreaterThan(0);
    expect(icpc!.period).toContain('2019');
  });

  it('should have Informatics Olympiad achievement', () => {
    const olympiad = achievements.find((a) => a.title.includes('Informatics'));
    expect(olympiad).toBeDefined();
    expect(olympiad!.period).toBe('2018');
  });
});
