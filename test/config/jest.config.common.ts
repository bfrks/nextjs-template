import type { Config } from '@jest/types';

import nextJest from 'next/jest';

export const createJestConfig = nextJest({
  dir: './',
});

const commonConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  rootDir: '../../../',
  setupFilesAfterEnv: ['<rootDir>/test/setup/jest.setup.ts'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  moduleNameMapper: {
    // should match paths from tsconfig.json
    '^@app/(.*)$': ['<rootDir>/app/$1'],
    '^@components/(.*)$': ['<rootDir>/components/$1'],
    '^@utils/(.*)$': ['<rootDir>/utils/$1'],
    '^@test/(.*)$': ['<rootDir>/test/$1'],
  },
};

export default commonConfig;
