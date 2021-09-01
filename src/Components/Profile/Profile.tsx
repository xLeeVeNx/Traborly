// Import from libs
import React from 'react';

// Import styles
import './Profile.scss';

// Import components
import { Post } from './Post/Post';
import { User } from './User/User';

// Import interfaces
import { IProfileProps } from '../../interface/Interfaces';

// Main code
export const Profile: React.FC<IProfileProps> = ({PostItemData}) => {
	return (
		<section className="profile">
			<div className="profile__inner">
				<img className="profile__bg-image"
				     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
				     alt="Background" />
				<User />
				<Post PostItemData={ PostItemData } />
			</div>
		</section>
	);
};