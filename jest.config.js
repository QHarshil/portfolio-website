/** @type {import('ts-jest').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    // Use babel-jest to transform files including ESM modules
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest'
    },
    // Do not ignore ESM modules like lucide-react and @lucide
    transformIgnorePatterns: [
      "/node_modules/(?!lucide-react|@lucide/)"
    ],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.jest.json'
      }
    }
  };
  