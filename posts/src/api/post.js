const PostService = require("../services/post-service");
const UserAuth = require("./middlewares/auth");

module.exports = (app, channel) => {
  const service = new PostService();

  // SubscribeMessage(channel, service);

  app.post("/create", UserAuth, async (req, res, next) => {
    const { _id } = req.user;
    const userId = _id;
    const { deskripsi, lat, long, images } = req.body;
    const { data } = await service.Create({
      userId,
      deskripsi,
      lat,
      long,
      images,
    });
    res.json(data);
  });
};
