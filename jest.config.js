/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/index.ts",
        "!src/server/startServer.ts",
        "!src/database/index.ts",
    ],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
