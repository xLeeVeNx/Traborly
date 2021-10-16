// Import from libs
import { v1 } from 'uuid';

// Import types
import { ActionsType } from '../storeType';
import { FriendsPropsType } from '../../components/Friends/FriendsType';

// Import images
import user from '../../assets/images/user.svg';

// InitialState
const initialState: FriendsPropsType = {
	FriendsItemData: [
		{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Ксения Швецова'},
		{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Ильяс Коробкин'},
		{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Даурен Турарбек'},
		{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Андрей Ким'}
	]
};

// Reducer
export const friendsReducer = (state = initialState, action: ActionsType): FriendsPropsType => {
	return state;
};