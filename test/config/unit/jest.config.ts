import type { Config } from '@jest/types';
import commonConfig, { createJestConfig } from '../jest.config.common';

const unitConfig: Config.InitialOptions = {
  ...commonConfig,
  testMatch: ['<rootDir>/test/**/*(?<!IT).spec.(ts|tsx)'],
  displayName: {
    name: 'UNIT',
    color: 'yellow',
  },
};

export default createJestConfig(unitConfig);
