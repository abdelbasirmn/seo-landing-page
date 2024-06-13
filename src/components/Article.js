import React from 'react';
import { useParams } from 'react-router-dom';

const Article = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <article>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </article>
  );
};

export default Article;
