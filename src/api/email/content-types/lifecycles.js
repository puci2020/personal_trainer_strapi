module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log(result);

    try {
      await strapi.plugins["email"].services.email.send({
        to: "adam.pucicki97@gmail.com",
        from: "cycu2020@gmail.com",
        subject: "elo",
        text: "jołłł",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
