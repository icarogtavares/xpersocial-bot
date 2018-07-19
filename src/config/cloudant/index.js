const { getConfig } = require('../')
const schema = require('./cloudant.schema')
const Joi = require('joi')

const { error, value: envVars } = Joi.validate(process.env, schema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = getConfig({
  production: {
    url: envVars.CLOUDANT_URL,
    dbName: envVars.CLOUDANT_DBNAME,
  },
  development: {
    url: envVars.CLOUDANT_URL,
    dbName: envVars.CLOUDANT_DBNAME,
  },
  test: {
    url: envVars.TEST_CLOUDANT_URL,
    dbName: envVars.TEST_CLOUDANT_DBNAME,
  },
})

module.exports = config
