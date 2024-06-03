const Post = require("../models/Post");

async function createPost(post) {
  const result = new Post(post);
  await result.save();
  return result;
}

async function getAllPosts() {
  return Post.find({});
}

async function getPostsByAuthor(userId){
  return Post.find({author: userId}).populate("author", "firsName lastName");
}


async function getPostById(id) {
  return Post.findById(id).populate("author", "firsName lastName").populate('votes', 'email');
}

async function editPost(id, post) {
  const existing = await Post.findById(id);

  existing.title = auction.title;
  existing.description = auction.description;post.keyword;
  existing.location = post.location;
  existing.date = post.date;
  existing.image = post.image;
  existing.description = post.description;

  await existing.save();
}

async function deletePostById(id) {
  return Post.findByIdAndDelete(id);
}

async function vote(postId, userId, value) {
  const post = await Post.findById(postId);

  if (post.votes.includes(userId)) {
    throw new Error("User has already voted");
  }
  post.votes.push(userId);
  post.rating += value;

  await post.save();
}

module.exports = {
  createPost,
  getAllPosts,
  getPostsByAuthor,
  getPostById,
  editPost,
  deletePostById,
  vote,
};
