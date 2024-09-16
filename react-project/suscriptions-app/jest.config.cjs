module.exports = {
    testEnvironment: 'jsdom',
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
    collectCoverage: true,
    setupFilesAfterEnv: ['@testing-library/jest-dom/'],
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest', // Transforma archivos JS y JSX con babel-jest
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/test/__mocks__/fileMock.js' // Mock para imágenes y SVG
    }
};