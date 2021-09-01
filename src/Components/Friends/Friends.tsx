// Import from libs
import React from 'react';

// Import styles
import './Friends.scss';

// Import components
import { FriendsItem } from './FriendsItem/FriendsItem';

// Import interfaces
import { IFriendsProps } from '../../interface/Interfaces';

// Main code
export const Friends: React.FC<IFriendsProps> = ({FriendsItemData}) => {
	return (
		<section className="friends">
			<div className="friends__inner">
				<div className="friends__items">
					{
						FriendsItemData.map(item =>
							<FriendsItem key={ item.id } sourceImage={ item.sourceImage } altText={ item.altText }
							             fullName={ item.fullName }
							/>,
						)
					}
				</div>
			</div>
		</section>
	);
};