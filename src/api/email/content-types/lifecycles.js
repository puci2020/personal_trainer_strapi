module.exports = {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "adam.pucicki97@gmail.com",
        from: "adamx@apucicki.hs18.linux.pl", // e.g. single sender verification in SendGrid
        subject: "The Strapi Email plugin worked successfully",
        text: "ejejej",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
