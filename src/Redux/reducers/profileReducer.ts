// Import from libs
import { v1 } from 'uuid';

// Import types
import { ProfilePageType } from '../../components/Profile/ProfileType';
import { PostItemDataType } from '../../components/Profile/Post/PostType';
import { ActionsType } from '../storeType';

// Import constants
import { ADD_POST } from '../../utils/constants';

// InitialState
const initialState: ProfilePageType = {
	PostItemData: [
		{id: v1(), text: 'Post #1', likesCount: 10},
		{id: v1(), text: 'Post #2', likesCount: 5},
		{id: v1(), text: 'Post #3', likesCount: 14}
	],
	UserItemData: [
		{id: v1(), label: 'День рождение:', value: '29 сентября 2004 г.'},
		{id: v1(), label: 'Город:', value: 'Талдыкорган'},
		{id: v1(), label: 'Место учёбы:', value: 'Школа'},
		{id: v1(), label: 'Любимый фильм:', value: 'Форсаж'},
		{id: v1(), label: 'Веб-сайт:', value: 'Отсутствует'}
	]
};

// Reducer
export const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
	switch (action.type) {
		case ADD_POST: {
			const newPost: PostItemDataType = {
				id: v1(),
				text: action.text,
				likesCount: 0
			};

			state.PostItemData = [ ...state.PostItemData, newPost ];
			return state;
		}
		default:
			return state;
	}
};

// actionCreators
export const addPostAC = (text: string) => {
	return {
		type: ADD_POST,
		text
	} as const;
};