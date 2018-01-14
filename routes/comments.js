module.exports = {
  getComments(req, res) {
    //make sure postId is valid, and send the post's comments with status
    if(req.params.postId >= store.posts.length) return res.sendStatus(404);
    res.status(200).send(store.posts[req.params.postId].comments);
  },
  addComment(req, res) {
    //make sure postId is valid, and text is present
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    if(!req.body.text) return res.sendStatus(400);
    //filter  comment, and add to it's post, send status
    let comment = {
      text: req.body.text
    };
    store.posts[req.params.postId].comments.push(comment);
    res.sendStatus(201);
  },
  updateComment(req, res) {
    //make sure ids exist, check for text, and filter comment
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    if(req.params.commentId >= store.posts[req.params.postId].comments.length) return res.sendStatus(400);
    if(!req.body.text) return res.sendStatus(400);
    let comment = {
      text: req.body.text
    };
    //reassign and send status
    Object.assign(store.posts[req.params.postId].comments[req.params.commentId],comment);
    res.sendStatus(204);
  },
  removeComment(req, res) {
    //check for valid ids
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    if(req.params.commentId >= store.posts[req.params.postId].comments.length) return res.sendStatus(400);
    //remove from comments, and send status
    store.posts[req.params.postId].comments.splice(req.params.commentId,1);
    res.sendStatus(204);
  }
}
