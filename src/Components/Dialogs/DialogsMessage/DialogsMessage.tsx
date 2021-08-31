import React from 'react';

import './DialogsMessage.scss';

interface IDialogsMessageProps {
	text: string;
}

export const DialogsMessage: React.FC<IDialogsMessageProps> = ({text}) => {
	return (
		<div className="dialogs__message">{ text }</div>
	);
};