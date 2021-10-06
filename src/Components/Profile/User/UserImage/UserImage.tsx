// Import libs
import React from 'react';

// Import images
import avatar from '../../../../assets/images/myAvatar.jpg';

// Main code
export const UserImage: React.FC = () => {
	return (
		<img className="profile__user-img"
		     src={ avatar }
		     alt="Avatar"
		/>
	);
};