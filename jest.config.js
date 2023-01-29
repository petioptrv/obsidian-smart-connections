module.exports = async () => {
    return {
        preset: "ts-jest",
        testEnvironment: "node",
        modulePaths: ["node_modules", "<rootDir>/src"],
        roots: ["<rootDir>/"],
        transform: {
            "^.+\\.(ts|tsx)?$": "ts-jest",
            "^.+\\.(js|jsx)$": "babel-jest",
        },
        moduleFileExtensions: ["js", "ts"],
    };
};
