// Create a Contructor function for Blog Post objects. Include the method for drafting an unpublished post

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const post = new Post('Post Title', 'Post content', 'Post Author');
console.log(post);