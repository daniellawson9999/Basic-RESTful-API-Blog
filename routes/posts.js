module.exports = {
  getPosts(req, res) {
    res.status(200).send(store.posts);
  },
  addPost(req, res) {
    if(!req.body.name || !req.body.url || !req.body.text){
      return res.sendStatus(400);
    }
    let post = {
      name: req.body.name,
      url: req.body.url,
      text: req.body.text,
      comments: []
    }
    store.posts.push(post);
    res.sendStatus(201);
  },
  updatePost(req, res) {
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    let post = {
      name: req.body.name,
      url: req.body.url,
      text: req.body.text
    }
    Object.assign(store.posts[req.params.postId],post);
    res.sendStatus(204);
  },
  removePost(req, res) {
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    store.posts.splice(req.params.postId,1);
    res.sendStatus(204);
  }
}
