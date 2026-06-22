import React from 'react';
import BlogCard from '../components/blogCard'

const BlogPage: React.FC = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Welcome to the blog page! Here you will find all the latest posts and updates.</p>
      <BlogCard />
    </div>
  );
};

export default BlogPage;