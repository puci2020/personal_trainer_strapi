"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ["api::feedback.feedback"],
      afterCreate: async ({ result }) => {
        // omitted

        console.log(result);

        try {
          await strapi.plugins["email"].services.email.send({
            to: "adam.pucicki97@gmail.com",
            from: result.email, // e.g. single sender verification in SendGrid
            subject: result.subject,
            text: `Wiadomość od: ${result.name} \n
              Adres email: ${result.email} \n\n
              Wiadomość: \n
              ${result.message}`,
          });
        } catch (err) {
          console.log(err);
        }
      },
    });

    strapi.db.lifecycles.subscribe({
      models: ["api::email.email"],
      afterCreate: async ({ result }) => {
        // omitted

        console.log(result);

        try {
          await strapi.plugins["email"].services.email.send({
            to: "adam.pucicki97@gmail.com",
            from: result.email, // e.g. single sender verification in SendGrid
            subject: result.subject,
            text: `<b>Wiadomość od: ${result.name} \n</b> <br/>
              <b>Adres email: ${result.email} \n</b> <br/><br/>
              Wiadomość: \n <br/>
              ${result.message}`,
          });
        } catch (err) {
          console.log(err);
        }
      },
    });
  },
};
