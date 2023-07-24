import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { longContainerData } from '../Home/BlogGraph/components/BlogLayout/components/Data/longContainerData'; 

const Post = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const postId = parseInt(id);
    const post = longContainerData[postId - 1];
    
    if (!post) {
        return <div>Post not found</div>;
    }

    const goToPost = (postId) => {
        if (postId > 0 && postId <= longContainerData.length) {
            navigate(`/post/${postId}`);
        }
    }

    const prevPostTitle = postId > 1 ? longContainerData[postId - 2].title : "Previous";
    const nextPostTitle = postId < longContainerData.length ? longContainerData[postId].title : "Next";

    return (
        <div className="flex flex-col items-center w-full h-full space-y-2 py-10 mb-10 mt-10 post">
            <h1 className='text-5xl md:text-6xl font-bold'>{post.title}</h1>
            <h2 className='text-2xl md:text-3xl font-semibold'>{post.subtitle}</h2>
            <h3 className='text-base md:text-base font-normal pb-6'>{post.date}</h3>
            <div className='flex flex-col w-2/3 md:w-1/3 items-center justify-center'>
                <img src={post.imgSrc} alt={post.title} className='w-full h-[40rem] object-cover pb-10'/>
                <div className="w-full text-left">
                    <p>{post.description}</p>
                    <p className='pt-6'>{post.descriptionTwo}</p>
                    <p className='pt-6'>{post.descriptionThree}</p>
                </div>
            </div>
            <div className="flex justify-between w-full px-20 pt-10">
                <button 
                    onClick={() => goToPost(postId - 1)}
                    disabled={postId === 1}
                >
                    {prevPostTitle}
                </button>
                <button 
                    onClick={() => goToPost(postId + 1)}
                    disabled={postId === longContainerData.length}
                >
                    {nextPostTitle}
                </button>
            </div>
        </div>
    )
}

export default Post;
