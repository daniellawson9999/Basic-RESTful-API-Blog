module.exports = {
  getComments(req, res) {
    if(req.params.postId >= store.posts.length) return res.sendStatus(404);
    res.status(200).send(store.posts[req.params.postId].comments);
  },
  addComment(req, res) {
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    if(!req.body.text) return res.sendStatus(400);
    let comment = {
      text: req.body.text
    };
    store.posts[req.params.postId].comments.push(comment);
    res.sendStatus(201);
  },
  updateComment(req, res) {
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    if(req.params.commentId >= store.posts[req.params.postId].comments.length) return res.sendStatus(400);
    if(!req.body.text) return res.sendStatus(400);
    let comment = {
      text: req.body.text
    };
    Object.assign(store.posts[req.params.postId].comments[req.params.commentId],comment);
    res.sendStatus(204);
  },
  removeComment(req, res) {
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    if(req.params.commentId >= store.posts[req.params.postId].comments.length) return res.sendStatus(400);
    store.posts[req.params.postId].comments.splice(req.params.commentId,1);
    res.sendStatus(204);
  }
}
