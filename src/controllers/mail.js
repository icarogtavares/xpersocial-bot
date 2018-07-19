const mailService = require('../services/mail')

const sendMailToMrXper = (req, res, next) => {
  const mailBody = mailService.createMailBodyToMrXper(req.body)
  mailService.sendMail('mrxper@xper.social', 'Cliente sem resposta', mailBody)
    .then(() => res.end())
    .catch(next)
}

const sendMailToUserWithConversationLog = (req, res, next) => {
  const mailBody = mailService.createMailBodyToUserWithConversationLog(req.body)
  mailService.sendMail(req.body.email, 'Registro da Conversa', mailBody)
    .then(() => res.end())
    .catch(next)
}

module.exports = {
  sendMailToMrXper,
  sendMailToUserWithConversationLog,
}
