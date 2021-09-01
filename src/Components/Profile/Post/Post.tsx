// Import from libs
import React from 'react';

// Import styles
import './Post.scss';

// Import components
import { PostItem } from './PostItem/PostItem';

// Import interfaces
import { IPostProps } from '../../../interface/Interfaces';

// Main code
export const Post: React.FC<IPostProps> = ({PostItemData}) => {
	return (
		<div className="profile__post">
			<div className="profile__post-text">My posts</div>
			<textarea className="profile__post-msg" />
			<button className="profile__post-btn" type="submit">Send</button>
			<div className="profile__post-items">
				{
					PostItemData.map(item =>
						<PostItem text={ item.text } likesCount={ item.likesCount } />,
					)
				}
			</div>
		</div>
	);
};