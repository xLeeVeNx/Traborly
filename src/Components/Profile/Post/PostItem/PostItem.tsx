// Import from libs
import React from 'react';

// Import interfaces
import { IPostItemProps } from '../../../../interface/Interfaces';

// Main code
export const PostItem: React.FC<IPostItemProps> = props => {
    return (
        <div className="profile__post-item">
            <div>{props.text}</div>
            <div>{props.likesCount} likes</div>
        </div>
    );
};