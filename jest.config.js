module.exports = {
    setupFilesAfterEnv: ["./setupTests.js"],
    transform: {
      '^.+\\.(t|j)sx?$': '@swc/jest',
    },
  }
