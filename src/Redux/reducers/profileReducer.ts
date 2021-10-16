// Import from libs
import { v1 } from 'uuid';

// Import types
import { ProfilePageType } from '../../components/Profile/ProfileType';
import { PostItemDataType } from '../../components/Profile/Post/PostType';
import { ActionsType } from '../storeType';

// Import constants
import { ADD_POST } from '../../utils/constants';

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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