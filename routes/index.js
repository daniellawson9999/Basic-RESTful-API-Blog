const comments = require('./comments');
const posts = require('./posts');

module.exports.getPosts = posts.getPosts;
module.exports.addPost = posts.addPost;
module.exports.updatePost = posts.updatePost;
module.exports.removePost = posts.removePost;
module.exports.getComments = comments.getComments;
module.exports.addComment = comments.addComment;
module.exports.updateComment = comments.updateComment;
module.exports.removeComment = comments.removeComment;
