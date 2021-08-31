// Import libs
import React from 'react';

// Import styles
import './Dialogs.scss';

// Import components
import { DialogsItem } from './DialogsItem/DialogsItem';
import { DialogsMessage } from './DialogsMessage/DialogsMessage';

// Import interfaces
import { IDialogsProps } from '../../Interface/Interface';

// Main code
export const Dialogs: React.FC<IDialogsProps> = ({DialogsItemData, DialogsMessageData}) => {
	return (
		<section className="dialogs">
			<div className="dialogs__inner">
				<div className="dialogs__items">
					{ DialogsItemData.map(item => <DialogsItem id={ item.id } text={ item.text } key={ item.id } />) }
				</div>
				<div className="dialogs__messages">
					{ DialogsMessageData.map(item => <DialogsMessage text={ item.text } key={ item.id } />) }
				</div>
			</div>
		</section>
	);
};
