// Interface
import { IState } from '../Interface/Interface';

// State
export const state: IState = {
	ProfilePage: {
		PostItemData: [
			{id: 1, text: 'Post #1', likesCount: 10},
			{id: 2, text: 'Post #2', likesCount: 5},
			{id: 3, text: 'Post #3', likesCount: 14},
		],
	},
	DialogsPage: {
		DialogsItemData: [
			{id: 1, text: 'Damil'},
			{id: 2, text: 'Maksim'},
			{id: 3, text: 'Daniil'},
			{id: 4, text: 'Dauren'},
			{id: 5, text: 'Viktor'},
		],
		DialogsMessageData: [
			{id: 1, text: 'Hello'},
			{id: 2, text: 'How are you?'},
			{id: 3, text: 'What are you doing now?'},
			{id: 4, text: 'What do you do?'},
			{id: 5, text: 'Maybe, do you want to go for a walk?'},
		],
	},
};