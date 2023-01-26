const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userId: { type: String },
  posts: [
    {
      deskripsi: { type: String, require: true },
      date: { type: Date, default: Date.now() },
      lat: { type: String, require: true },
      long: { type: String, require: true },
      image: { type: String, require: true },
      
    },
    
  ],
});

module.exports = mongoose.model("post", PostSchema);
