// Import from libs
import React from 'react';

// Import styles
import './styles/Profile.scss';

// Import components
import { Post } from './Post/Post';
import { User } from './User/User';
import { Image } from './Image/Image';

// Import types
import { ProfilePropsType } from './ProfileType';

// Main code
export const Profile: React.FC<ProfilePropsType> = ({PostItemData, UserItemData, dispatch}) => {
	return (
		<section className="profile">
			<div className="profile__inner">
				<Image />
				<User UserItemData={ UserItemData } />
				<Post PostItemData={ PostItemData } dispatch={ dispatch } />
			</div>
		</section>
	);
};