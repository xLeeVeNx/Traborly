// Import from libs
import React from 'react';

// Import components
import { UserItem } from './UserItem/UserItem';
import { UserImage } from './UserImage/UserImage';

// Import interfaces
import { IUserProps } from './IUser';

// Main code
export const User: React.FC<IUserProps> = ({UserItemData}) => {
	return (
		<div className="profile__user">
			<UserImage />
			<div className="profile__user-info">
				<div className="profile__user-name">Дамиль Бердыев</div>
				<ul className="profile__user-items">
					{
						UserItemData.map(item =>
							<UserItem key={ item.id } label={ item.label } value={ item.label } />
						)
					}
				</ul>
			</div>
		</div>
	);
};