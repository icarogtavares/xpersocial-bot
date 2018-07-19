const express = require('express')
const mailController = require('../controllers/mail')

const router = express.Router()

router.route('/mrxper')
  .post(mailController.sendMailToMrXper)

router.route('/user')
  .post(mailController.sendMailToUserWithConversationLog)

module.exports = router
