import React from 'react';

interface IPostItemProps {
    text: string;
    likesCount: number;
}

const PostItem: React.FC<IPostItemProps> = props => {
    return (
        <div className="profile__post-item">
            <div>{props.text}</div>
            <div>{props.likesCount} likes</div>
        </div>
    );
};

export default PostItem;