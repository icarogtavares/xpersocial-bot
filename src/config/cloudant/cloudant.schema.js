const { getEnv } = require('../')
const { setKeysPrefix } = require('../../utils/object')
const Joi = require('joi')

let objSchema = {
  CLOUDANT_URL: Joi.string().disallow(['<cloudant_url>']).required(),
}

if (getEnv() === 'test') {
  objSchema = setKeysPrefix('TEST_', objSchema)
}

const schema = Joi.object(objSchema).unknown().required()

module.exports = schema
