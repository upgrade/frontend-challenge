module.exports = {
  roots: ["<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testRegex: [
    "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
    "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  clearMocks: true,
};
