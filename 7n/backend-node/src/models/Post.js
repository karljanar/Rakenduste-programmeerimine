const { Schema, model } = require('mongoose');
const User = require('./User');


const postSchema = new Schema({
  body: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: User },
  createdAt: { type: Date, default: Date.now }
});

const Post = model("Post", postSchema)

module.exports = Post