const getConfig = require('../config/cloudant')
const Cloudant = require('@cloudant/cloudant')
const cloudantDebug = require('debug')('xpersocial-api:cloudant:')

const config = getConfig()

const initDBConnection = () => {
  const cloudant = Cloudant(config.url)
  cloudantDebug('Connected to cloudant.')
  return cloudant.db.use(config.dbName)
}

module.exports = {
  initDBConnection,
}
