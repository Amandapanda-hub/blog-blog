import React from 'react';
import { useParams } from 'react-router-dom';
import { longContainerData } from '../Home/BlogGraph/components/BlogLayout/components/Data/longContainerData'; 

const Post = () => {
  const { id } = useParams();
  const post = longContainerData[parseInt(id)];

  if (!post) {
    return <div>Post not found</div>;
  }
  
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <img src={post.imgSrc} alt={post.title} />
      <p>{post.description}</p>
    </div>
  )
}

export default Post;
