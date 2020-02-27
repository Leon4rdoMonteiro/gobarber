export default {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
    default: {
        from: 'Equipe GoBarber <noreply@gobarber.com>',
    }
}

/**
 * Mail servers tips to using on production:
 *  Amazon SES,
 *  Mailgun,
 *  Sparkpost,
 *  Mandril (Mailchimp)
 *
 *  Mailtrap (Only for DEV)
 */
