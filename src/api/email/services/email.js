const toEmail = process.env.TOEMAIL;
const welcome = process.env.WELCOME;
module.exports = {
  async create(data) {
    console.log(data);
    const response = await strapi.entityService.create("api::product.product", {
      data,
    });
    strapi
      .service("api::comment.sendmail")
      .send(
        "sss",
        "adam.pucicki97@gmail.com",
        "Welcome",
        `A product has been created`
      );
    return response;
  },
};
