// Import from libs
import { v1 } from 'uuid';

// Import types
import { DialogsDataType, DialogsPageType } from '../../components/Dialogs/DialogsType';
import { ActionsType } from '../storeType';

// Import constants
import { SEND_MESSAGE } from '../../utils/constants';

// InitialState
const initialState: DialogsPageType = {
	DialogsItemData: [
		{id: v1(), text: 'Damil'},
		{id: v1(), text: 'Maksim'},
		{id: v1(), text: 'Daniil'},
		{id: v1(), text: 'Dauren'},
		{id: v1(), text: 'Viktor'}
	],
	DialogsMessageData: [
		{id: v1(), text: 'Hello'},
		{id: v1(), text: 'How are you?'},
		{id: v1(), text: 'What are you doing now?'},
		{id: v1(), text: 'What do you do?'},
		{id: v1(), text: 'Maybe, do you want to go for a walk?'}
	]
};

// Reducer
export const dialogsReducer = (state = initialState, action: ActionsType): DialogsPageType => {
	switch (action.type) {
		case SEND_MESSAGE: {
			const newMessage: DialogsDataType = {
				id: v1(),
				text: action.text
			};

			state.DialogsMessageData = [ ...state.DialogsMessageData, newMessage ];
			return state;
		}
		default:
			return state;
	}
};

// actionCreators
export const sendMessageAC = (text: string) => {
	return {
		type: SEND_MESSAGE,
		text
	} as const;
};