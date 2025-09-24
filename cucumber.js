module.exports = {
    default: {
      requireModule: ['ts-node/register'],
      require: [
        'hooks/**/*.ts',
        'steps/**/*.ts'
      ],
      paths: ['features/**/*.feature'],
      publishQuiet: true
    }
  }
  