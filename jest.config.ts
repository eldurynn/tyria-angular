import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets';

export default {
  ...presets.createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  modulePathIgnorePatterns: ['<rootDir>/e2e-playwright'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  },
  displayName: {
    name: 'TYRIA ANGULAR APP',
    color: 'blue'
  }
} satisfies Config;