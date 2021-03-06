// Import from libs
import React from 'react';

// Import styles
import './styles/Dialogs.scss';

// Import components
import { DialogsItem } from './DialogsItem/DialogsItem';
import { DialogsMessage } from './DialogsMessage/DialogsMessage';
import { SendMessage } from './SendMessage/SendMessage';

// Import types
import { DialogsPropsType } from './DialogsType';

// Main code
export const Dialogs: React.FC<DialogsPropsType> = ({DialogsItemData, DialogsMessageData, dispatch}) => {
	return (
		<section className="dialogs">
			<div className="dialogs__inner">
				<div className="dialogs__items">
					{ DialogsItemData.map(item => <DialogsItem id={ item.id } text={ item.text } key={ item.id } />) }
				</div>
				<div className="dialogs__messages">
					{ DialogsMessageData.map(item => <DialogsMessage text={ item.text } key={ item.id } />) }
					<SendMessage dispatch={dispatch} />
				</div>
			</div>
		</section>
	);
};
