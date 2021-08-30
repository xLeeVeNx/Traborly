import React from 'react';
import PostItem from './PostItem/PostItem';

interface IPostItem {
    id: number;
    text: string;
    likesCount: number;
}

const Post: React.FC = () => {
    const PostItemData: IPostItem[] = [
        {id: 1, text: 'Post #1', likesCount: 10},
        {id: 2, text: 'Post #2', likesCount: 5},
        {id: 3, text: 'Post #3', likesCount: 14}
    ];

    return (
        <div className="profile__post">
            <div className="profile__post-text">My posts</div>
            <textarea className="profile__post-msg"></textarea>
            <button className="profile__post-btn" type="submit">Send</button>
            <div className="profile__post-items">
                {PostItemData.map(item => <PostItem text={item.text} likesCount={item.likesCount}/>)}
            </div>
        </div>
    );
};

export default Post;