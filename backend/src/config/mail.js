export default {
    host: 'smtp.mailtrap.io',
    port: '2525',
    secure: false,
    auth: {
        user: '8919689b88c41a',
        pass: '958a7d7fbb1c96',
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
