// use object literal to create and initialize a blog post object with attributes: title, body, author, views, comments {author, body} isLive

const blogPost = {
  title: 'Post Title',
  body: 'Post Content here',
  author: 'User Name',
  views: 3,
  comments: {
    author: 'another user',
    body: 'comment text here'
  },
  isLive: true
}

console.log(blogPost);