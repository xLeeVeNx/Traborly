// Import from libs
import { v1 } from 'uuid';

// Import types
import { DialogsDataType, DialogsPageType } from '../../components/Dialogs/DialogsType';
import { ActionsType } from '../storeType';

// Import constants
import { SEND_MESSAGE } from '../../utils/constants';

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
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