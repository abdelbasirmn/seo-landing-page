import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setArticles(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="blog">
      <h2>Blog</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <Link to={`/blog/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Blog;
