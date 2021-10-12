// Import from libs
import React from 'react';

// Import styles
import './styles/Friends.scss';

// Import components
import { FriendsItem } from './FriendsItem/FriendsItem';

// Import types
import { FriendsPropsType } from './FriendsType';

// Main code
export const Friends: React.FC<FriendsPropsType> = ({FriendsItemData}) => {
	return (
		<section className="friends">
			<div className="friends__inner">
				<div className="friends__items">
					{
						FriendsItemData.map(item =>
							<FriendsItem key={ item.id } sourceImage={ item.sourceImage } altText={ item.altText }
							             fullName={ item.fullName }
							/>
						)
					}
				</div>
			</div>
		</section>
	);
};