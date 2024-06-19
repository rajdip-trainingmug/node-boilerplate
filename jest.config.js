module.exports = {
  testEnvironment: 'node',
  testMatch: ['**.spec.js'],
  moduleFileExtensions: ['js', 'json'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.js'],
};
