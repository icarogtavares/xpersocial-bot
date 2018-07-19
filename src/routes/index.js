const express = require('express')
const assistantRoutes = require('./watson-assistant')
const cloudantRoutes = require('./cloudant')
const chatbotRoutes = require('./chatbot')
const mailRoutes = require('./mail')

const router = express.Router()

router.use('/api/message', assistantRoutes)
router.use('/api/cloudant', cloudantRoutes)
router.use('/chatbot', chatbotRoutes)
router.use('/api/mail', mailRoutes)

router.get('/', (req, res) => {
  res.render('index.html', { absoluteUrl: req.absoluteUrl })
})
module.exports = router
