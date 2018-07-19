const sgMail = require('@sendgrid/mail')

const sendMail = (to, subject, { text, html }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to,
    from: 'mrxper@xper.social',
    subject,
    text,
    html,
  }
  return sgMail.send(msg)
}

const createMailBodyToUserWithConversationLog = ({ name, conversationLog }) => {
  const html = `
  <strong>Olá ${name}, este é o registro da nossa conversa! Volte sempre!</strong>
  ${conversationLog.join('<br>')}`
  const text = `
  Olá ${name}, este é o registro da nossa conversa! Volte sempre!
  ${conversationLog.join('\n')}`
  return { text, html }
}

const createMailBodyToMrXper = ({
  name, email, phone, conversationId, userMsg, watsonMsg, lastMsgs,
}) => {
  const html = `
<strong>Nome: ${name}</strong><br>
<strong>E-mail: ${email}</strong><br>
<strong>Telefone: ${phone}</strong><br>
<strong>ID da Conversa: ${conversationId}</strong><br><br>
<strong>Última Pergunta do Usuário: ${userMsg}</strong><br><br>
<strong>Última Resposta do Watson: ${watsonMsg.join('<br>')}</strong><br><br>
<h3>Registro das últimas mensagens:</h3><br>
${lastMsgs.join('<br>')}`

  const text = `
Nome: ${name}
E-mail: ${email}
Telefone: ${phone}
Pergunta: ${userMsg}
Watson: ${watsonMsg.join('\n')}`
  return { text, html }
}

module.exports = {
  sendMail,
  createMailBodyToMrXper,
  createMailBodyToUserWithConversationLog,
}
