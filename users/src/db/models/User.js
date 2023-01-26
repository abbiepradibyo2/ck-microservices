const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: String,
    username: String,
    fullname: String,
    password: String,
    salt: String,

    posts: [
      {
        deskripsi: { type: String, require: true },
        date: { type: Date, default: Date.now() },
        lat: { type: String, require: true },
        long: { type: String, require: true },
        image: { type: String, require: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema); 
