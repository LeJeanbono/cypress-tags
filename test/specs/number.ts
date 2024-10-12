/// <reference types="cypress" />

import 'mocha';

import { expect } from 'chai';

import {
  generateConfig,
  resetConfig,
  tagify,
} from '../helpers/tagify';

describe('Number tags', function () {
  let output: string[] = [];
  let config = generateConfig();

  beforeEach(() => {
    resetConfig(config);
  });


  describe('Describe block include tags provided', () => {
    before(async () => {
      config.env.CYPRESS_INCLUDE_TAGS = 123;
      config.env.CYPRESS_EXCLUDE_TAGS = 456;
      output = await tagify(config, 'number');
    });

    it('should output all tests without tags', function () {
      expect(output).to.deep.equal([
        "describe('Run tests with tagged as a number', () => {",
        "    it('I will be executed', () => { });",
        "    ;",
        "});",
      ]);
    });
  });

});
