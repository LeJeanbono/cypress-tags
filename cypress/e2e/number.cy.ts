/// <reference path='../../dist/index.d.ts' />

// sample start
describe('Run tests with tagged as a number', () => {
  it(['123'], 'I will be executed', () => {});
  it(['456'], 'I will be exclude', () => {});
});
// sample end
