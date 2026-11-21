import { describe, it, expect } from 'vitest';
import { profile } from '../../src/assets/data/profile';

describe('profile', () => {
  it('should have a name', () => {
    expect(profile.name).toBe('Ha Nhat Nam');
  });

  it('should have initials', () => {
    expect(profile.initials).toBe('NH');
  });

  it('should have a tagline', () => {
    expect(profile.tagline).toBeTruthy();
  });

  it('should have a bio', () => {
    expect(profile.bio).toBeTruthy();
    expect(profile.bio.length).toBeGreaterThan(50);
  });

  it('should have an email', () => {
    expect(profile.email).toBe('nhnam.ha@gmail.com');
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('should have a VN phone number', () => {
    expect(profile.phone.vn).toBe('+84346202759');
    expect(profile.phone.vn).toMatch(/^\+84/);
  });

  it('should have a location', () => {
    expect(profile.location).toBe('Ho Chi Minh City, Vietnam');
  });

  it('should have social links', () => {
    expect(profile.social.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\/in\/nhnamha\//);
    expect(profile.social.github).toMatch(/^https:\/\/github\.com\/nhnam2k1/);
    expect(profile.social.hackerrank).toMatch(/^https:\/\/www\.hackerrank\.com\/profile\/NHNAM_HA/);
  });

  it('should have a cvUrl', () => {
    expect(profile.cvUrl).toBeTruthy();
    expect(profile.cvUrl).toContain('.pdf');
  });
});
