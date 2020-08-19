const contentful = require("contentful");
const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
  return client.getEntries({ content_type: 'blogPost', order: 'sys.createdAt' })
  .then(function(response) {
    const post = response.items
    .map(function(post) {
      post.fields.date= new Date(post.sys.updatedAt);
      return post.fields;
    });
    console.log(post)
    return post;
  })
  .catch(console.error);
};