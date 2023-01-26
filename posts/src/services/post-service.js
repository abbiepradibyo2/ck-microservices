const { PostRepository } = require("../db");
const { FormateData } = require("../utils");

// console.log('cibvananannana');

class PostService {
  constructor() {
    this.repository = new PostRepository();
  }

  async Create(postInputs) {
    const { userId, deskripsi, lat, long, images } = postInputs;
    const existingPost = await this.repository.CreatePost({
      userId,
      deskripsi,
      lat,
      long,
      images,
    });

    return FormateData({ id: existingPost.userId });
  }
}

module.exports = PostService;
