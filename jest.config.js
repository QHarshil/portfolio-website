/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    // Use ts-jest to transform all JS/TS files and include lucide-react from node_modules.
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
    },
    // Override the default behavior to transform lucide-react even though it’s in node_modules.
    transformIgnorePatterns: [
      "/node_modules/(?!lucide-react)"
    ],
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };
  