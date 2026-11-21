import { describe, it, expect } from 'vitest';
import { skillGroups } from '../../src/assets/data/skills';

describe('skillGroups', () => {
  it('should be an array with at least one group', () => {
    expect(Array.isArray(skillGroups)).toBe(true);
    expect(skillGroups.length).toBeGreaterThan(0);
  });

  it('each group should have a category and skills', () => {
    skillGroups.forEach((group) => {
      expect(group.category).toBeTruthy();
      expect(Array.isArray(group.skills)).toBe(true);
      expect(group.skills.length).toBeGreaterThan(0);
      group.skills.forEach((skill) => {
        expect(skill.name).toBeTruthy();
      });
    });
  });

  it('should include Languages group with Java, C#, C++, Python', () => {
    const languages = skillGroups.find((g) => g.category === 'Languages');
    expect(languages).toBeDefined();
    const names = languages!.skills.map((s) => s.name);
    expect(names).toContain('Java');
    expect(names).toContain('C#');
    expect(names).toContain('C++');
    expect(names).toContain('Python');
  });

  it('should include Backend Frameworks group', () => {
    const backend = skillGroups.find((g) => g.category === 'Backend Frameworks');
    expect(backend).toBeDefined();
    expect(backend!.skills.map((s) => s.name)).toContain('ASP.NET Core');
    expect(backend!.skills.map((s) => s.name)).toContain('Spring Boot');
    expect(backend!.skills.map((s) => s.name)).toContain('RESTful APIs');
  });

  it('should include Databases & Caching group', () => {
    const db = skillGroups.find((g) => g.category === 'Databases & Caching');
    expect(db).toBeDefined();
    const names = db!.skills.map((s) => s.name);
    expect(names).toContain('PostgreSQL');
    expect(names).toContain('MongoDB');
    expect(names).toContain('Redis');
    expect(names).toContain('Azure Cosmos DB');
    expect(names).toContain('OpenSearch');
  });

  it('should include Messaging & Streaming group', () => {
    const messaging = skillGroups.find((g) => g.category === 'Messaging & Streaming');
    expect(messaging).toBeDefined();
    expect(messaging!.skills.map((s) => s.name)).toContain('Apache Kafka');
    expect(messaging!.skills.map((s) => s.name)).toContain('Azure Service Bus');
  });

  it('should include Cloud & Infrastructure group', () => {
    const cloud = skillGroups.find((g) => g.category === 'Cloud & Infrastructure');
    expect(cloud).toBeDefined();
    const names = cloud!.skills.map((s) => s.name);
    expect(names).toContain('Azure');
    expect(names).toContain('Kubernetes');
    expect(names).toContain('Docker');
    expect(names).toContain('MicroK8s');
  });

  it('should include CI/CD & Observability group', () => {
    const cicd = skillGroups.find((g) => g.category === 'CI/CD & Observability');
    expect(cicd).toBeDefined();
    const names = cicd!.skills.map((s) => s.name);
    expect(names).toContain('Harness');
    expect(names).toContain('GitLab CI/CD');
    expect(names).toContain('SonarQube');
    expect(names).toContain('Trivy');
  });

  it('should not have duplicate skill names within a group', () => {
    skillGroups.forEach((group) => {
      const names = group.skills.map((s) => s.name);
      const unique = new Set(names);
      expect(unique.size).toBe(names.length);
    });
  });
});
