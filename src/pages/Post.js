import React from 'react';
import { useParams } from 'react-router-dom';

const posts = {
  'premier-article': { title: 'Premier Article', content: 'Contenu du premier article...' },
  'deuxieme-article': { title: 'Deuxième Article', content: 'Contenu du deuxième article...' }
};

function Post() {
  const { slug } = useParams();
  const post = posts[slug];

  if (!post) {
    return <div>Article non trouvé</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
