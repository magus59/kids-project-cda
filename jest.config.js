module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '^chai$': 'chai',
    },
    transformIgnorePatterns: [
      "/node_modules/(?!chai|sinon)", 
    ],
  };
  