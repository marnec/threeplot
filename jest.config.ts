import type { Config } from "jest";

const config: Config = {
  coverageProvider: "v8",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],

  testEnvironment: "jsdom",
};

export default config;
