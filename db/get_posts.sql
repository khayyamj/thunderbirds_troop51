SELECT Blog.title, Blog.content, BlogTags.tags, Blog.date_published, Blog.blogid
FROM Blog
JOIN BlogTagsConnection
  ON Blog.blogid = BlogTagsConnection.blogid
JOIN BlogTags
  ON BlogTagsConnection.tagid = BlogTags.tagid
ORDER BY Blog.blogid DESC
