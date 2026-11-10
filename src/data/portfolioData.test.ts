import test from 'node:test';
import assert from 'node:assert/strict';
import { PORTFOLIO_DATA } from './portfolioData.ts';

test('portfolio profile has valid required contact and branding attributes', () => {
  assert.equal(PORTFOLIO_DATA.profile.name, 'Zainab Zouhair');
  assert.ok(PORTFOLIO_DATA.profile.email.includes('@'));
  assert.ok(PORTFOLIO_DATA.profile.linkedin.includes('linkedin.com/in/zainab-zouhair'));
  assert.equal(PORTFOLIO_DATA.profile.initials, 'ZZ');
});

test('portfolio data contains all 8 academic and professional case studies', () => {
  assert.equal(PORTFOLIO_DATA.projects.length, 8);
  for (const project of PORTFOLIO_DATA.projects) {
    assert.ok(project.title.en.length > 0, `Project ${project.id} missing en title`);
    assert.ok(project.title.fr.length > 0, `Project ${project.id} missing fr title`);
    assert.ok(project.outcomes.en.length > 0, `Project ${project.id} missing en outcomes`);
    assert.ok(project.outcomes.fr.length > 0, `Project ${project.id} missing fr outcomes`);
    assert.ok(project.skills.length >= 2, `Project ${project.id} has insufficient skills`);
  }
});

test('EF SET English certificate is certified at B2 with score 52/100', () => {
  const efset = PORTFOLIO_DATA.certifications.find((c) => c.id === 'ef-set-english');
  assert.ok(efset, 'EF SET certificate should be present');
  assert.equal(efset?.score, '52/100 (CEFR B2)');
  assert.equal(efset?.verificationCode, 'rW8578');
  assert.equal(efset?.breakdown?.length, 4);
});

test('portfolio audit dossier contains exactly 29 verification items', () => {
  const totalItems = PORTFOLIO_DATA.dossierChecklist.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );
  assert.equal(totalItems, 29, 'Expected exactly 29 checklist verification items');
});

test('thought leadership articles have bilingual content and reasonable read times', () => {
  assert.ok(PORTFOLIO_DATA.articles.length >= 4);
  for (const article of PORTFOLIO_DATA.articles) {
    assert.ok(article.content.en.length >= 2);
    assert.ok(article.content.fr.length >= 2);
    assert.ok(article.readTime.includes('min read'));
  }
});
