// module.exports = ({ env }) => ({
//   email: {
//     provider: "sendgrid",
//     providerOptions: {
//       apiKey: env("SENDGRID_API_KEY"),
//     },
//     settings: {
//       defaultFrom: "myemail@protonmail.com",
//       defaultReplyTo: "myemail@protonmail.com",
//     },
//   },
// });
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-smtp",
      providerOptions: {
        // host: "mail.apucicki.hs18.linux.pl", //SMTP Host
        // port: 465, //SMTP Port
        // secure: true,
        // username: "adamx@apucicki.hs18.linux.pl",
        // password: "Adibomba20?",
        host: "smtp.gmail.com", //SMTP Host
        port: 465, //SMTP Port
        secure: true,
        username: "adam.pucicki97@gmail.com",
        password: "mnnxnruswpbwdrwt",
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
