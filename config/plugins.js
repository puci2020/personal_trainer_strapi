module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        host: process.env.SMTP, //SMTP Host
        port: process.env.SMTP_PORT, //SMTP Port
        secure: true,
        username: process.env.EMAIL_ADRESS,
        password: process.env.EMAIL_PASSWORD,
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
    },
    settings: {
      defaultFrom: "cycu2020@gmail.com",
      defaultReplyTo: "cycu2020@gmail.com",
    },
  },
});
