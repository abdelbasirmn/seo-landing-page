import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { slug: 'premier-article', title: 'Premier Article' },
  { slug: 'deuxieme-article', title: 'Deuxième Article' }
];

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
