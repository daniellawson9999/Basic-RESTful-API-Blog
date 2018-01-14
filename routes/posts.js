module.exports = {
  //send all posts
  getPosts(req, res) {
    res.status(200).send(store.posts);
  },
  addPost(req, res) {
    //make sure all necessary keys are present
    if(!req.body.name || !req.body.url || !req.body.text){
      return res.sendStatus(400);
    }
    //only add the correct keys (filters out junk)
    let post = {
      name: req.body.name,
      url: req.body.url,
      text: req.body.text,
      comments: []
    }
    //push post and send status
    store.posts.push(post);
    res.sendStatus(201);
  },
  updatePost(req, res) {
    //make sure that the postId exists
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    //filter parameters
    let post = {
      name: req.body.name,
      url: req.body.url,
      text: req.body.text
    }
    //update object and send status
    Object.assign(store.posts[req.params.postId],post);
    res.sendStatus(204);
  },
  removePost(req, res) {
    //make sure that the postId exists
    if(req.params.postId >= store.posts.length) return res.sendStatus(400);
    //remove from posts and send status
    store.posts.splice(req.params.postId,1);
    res.sendStatus(204);
  }
}
