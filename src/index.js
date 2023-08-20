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
            from: "cycu2020@gmail.com", // e.g. single sender verification in SendGrid
            subject: "The Strapi Email plugin worked successfully",
            text: "ejejej",
          });
        } catch (err) {
          console.log(err);
        }
      },
    });
  },
};
