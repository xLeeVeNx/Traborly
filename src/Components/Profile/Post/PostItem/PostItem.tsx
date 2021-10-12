// Import from libs
import React from 'react';

// Import types
import { PostItemPropsType } from './PostItemType';

// Main code
export const PostItem: React.FC<PostItemPropsType> = props => {
    return (
        <div className="profile__post-item">
            <div>{props.text}</div>
            <div>{props.likesCount} likes</div>
        </div>
    );
};