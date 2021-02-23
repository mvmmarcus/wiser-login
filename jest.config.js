module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!**/pages/**',
    '!**/styles/**',
    '!**/store/**',
    '!**/WithPrivateRoute/**',
    '!**/utils/toast/**',
    '!**/services/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
