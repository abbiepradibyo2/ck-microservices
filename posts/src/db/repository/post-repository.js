const mongoose = require("mongoose");

const { PostModel } = require("../models");

class PostRepository {
  async CreatePost({ userId, deskripsi, lat, long, images }) {
    const post = await PostModel.findOne({ userId: userId });

    if (post) {
      let postlist = post.posts;

      postlist.push({
        deskripsi: deskripsi,
        lat: lat,
        long: long,
        images: images,
      });
      post.posts = postlist;
      return await post.save();
    } else {
      console.log(userId);
      return await PostModel.create({
        userId,
        posts: [{ deskripsi: deskripsi, lat: lat, long: long, images: images }],
      });
    }
  }
}

module.exports = PostRepository;
