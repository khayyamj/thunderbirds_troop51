SELECT Blog.title, Blog.content, BlogTags.tags
FROM Blog
JOIN BlogTagsConnection
  ON Blog.blogid = BlogTagsConnection.blogid
JOIN BlogTags
  ON BlogTagsConnection.tagid = BlogTags.tagid
