To set up this blog, install Node.js, clone the repository, and run npm start

posts are stored in memory, in the structure of:
posts: [
  {
  name: 'Top 10 ES6 Features every Web Developer must know',
  url: 'https://webapplog.com/es6',
  text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
  comments: [
    {text: 'Cruel…..var { house, mouse} = No type optimization at all'},
    {text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.'},
    {text: '(p1,p2)=>{ … } ,i understand this ,thank you !'}
  ]
  }
]
}

API endpoints:
  GET and POST /posts
  PUT and DELETE /posts/:postId/
  GET and POST /posts/:postId/comments
  PUT and DELETE /posts/:postId/comments/commentId

example usage:
  //posts post data
  curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts"

  //updates post data at specific id
  curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"

  //gets post data
  curl "http://localhost:3000/posts"

  //deletes post data at specific id
  curl -X DELETE "http://localhost:3000/posts/0"
