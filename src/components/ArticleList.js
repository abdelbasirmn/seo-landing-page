import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../api';
import SortMenu from './SortMenu';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    const loadArticles = async () => {
      const articles = await fetchArticles();
      setArticles(articles);
      setLoading(false);
    };
    loadArticles();
  }, []);

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const sortedArticles = articles.sort((a, b) => {
    if (sortType === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-content">
      <div className="section">
        <h2>Liste des Articles</h2>
        <SortMenu onSortChange={handleSortChange} />
        <ul>
          {sortedArticles.map(article => (
            <li key={article.id}>
              <Link to={`/article/${article.id}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleList;
