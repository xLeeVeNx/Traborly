// Import from libs
import React, { ChangeEvent, useState } from 'react';

// Import types
import { SendMessagePropsType } from './SendMessageType';

// Import AC
import { sendMessageAC } from '../../../redux/store';

// Main code
export const SendMessage: React.FC<SendMessagePropsType> = ({dispatch}) => {
	const [ value, setValue ] = useState('');

	const onChangeTextareaHandler = (event: ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value);

	const onClickButtonHandler = () => {
		dispatch(sendMessageAC(value));
		setValue('');
	};

	return (
		<div className="dialogs__send">
			<textarea className="dialogs__send-message" value={ value } onChange={ onChangeTextareaHandler } />
			<button className="dialogs__send-button" onClick={onClickButtonHandler}>Отправить</button>
		</div>
	);
};