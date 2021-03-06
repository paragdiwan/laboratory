module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.(tsx?|jsx?)$": "ts-jest",
    "^.+\\.(svg)$": "<rootDir>/.jest/.jestMock.js",
    "^.+\\.md?$": "markdown-loader-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))|storyshots\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/.jest/setupTestFramework.ts",
    "<rootDir>/.jest/setupEnzyme.js",
  ],
  "moduleNameMapper": {
    "\\.(css|less|scss|sss|styl)$": "jest-css-modules"
  },
};
