import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport/index.js'
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAUTH2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
})

type Callback = (err: Error | null, info: SMTPTransport.SentMessageInfo) => void
type TSendMail = (
  to: string,
  subject: string,
  text: string,
  html: { html: Boolean },
  cb: Callback
) => void

export const SendMail: TSendMail = (
  to,
  subject,
  text,
  { html = false },
  cb
) => {
  transporter.sendMail(
    {
      from: process.env.MAIL_Username,
      to,
      subject,
      [html ? 'html' : 'text']: text
    },
    cb
  )
}
