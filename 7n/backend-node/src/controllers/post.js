const Post = require('../models/Post');




exports.getPosts = async (req, res) => {
  const posts = await Post.find({}).populate('user');
  res.status(200).send(posts)
}

exports.createPost = async function (req, res) {
  const newPost = {
    body: req.body.body,
    user: req.body.user
  }

  const createdPost = new Post(newPost)
  const savedPost = createdPost.save()

  res.status(200).send(`Saved ${createdPost}`)
};

exports.updatePost = async (req, res) => {
  const { id } = req.params.id;
  
  const newPost = {
    body: req.body.body,
    user: req.body.user
  }

  const originalPost = await Post.findByIdAndUpdate(id, newPost);


  res.status(200).send(`Successfully updated the following post: \n ${originalPost}`)
}

exports.deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOneAndDelete({ _id:id })
  if (!post) res.status(404).send("No post with that id found")
  else res.status(200).send("post deleted")
}
