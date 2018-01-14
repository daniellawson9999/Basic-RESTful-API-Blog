const comments = require('./comments');
const posts = require('./posts');
//simply merge exports of post.js and comments.js into one export
module.exports.getPosts = posts.getPosts;
module.exports.addPost = posts.addPost;
module.exports.updatePost = posts.updatePost;
module.exports.removePost = posts.removePost;
module.exports.getComments = comments.getComments;
module.exports.addComment = comments.addComment;
module.exports.updateComment = comments.updateComment;
module.exports.removeComment = comments.removeComment;
