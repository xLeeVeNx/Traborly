// Import from libs
import { v1 } from 'uuid';

// Import types
import { ActionsType } from '../storeType';
import { NavbarPropsType } from '../../components/Navbar/NavbarType';

// Import images
import profile from '../../assets/images/icons/profile.svg';
import news from '../../assets/images/icons/news.svg';
import message from '../../assets/images/icons/message.svg';
import friends from '../../assets/images/icons/friends.svg';
import settings from '../../assets/images/icons/settings.svg';

// InitialState
const initialState: NavbarPropsType = {
	MenuItemData: [
		{id: v1(), sourceImage: profile, href: '/profile', altText: 'Profile', text: 'Моя страница'},
		{id: v1(), sourceImage: news, href: '/news', altText: 'News', text: 'Новости'},
		{id: v1(), sourceImage: message, href: '/dialogs', altText: 'Message', text: 'Сообщения'},
		{id: v1(), sourceImage: friends, href: '/friends', altText: 'Friends', text: 'Друзья'},
		{id: v1(), sourceImage: settings, href: '/settings', altText: 'Settings', text: 'Настройки'}
	]
};

// Reducer
export const navbarReducer = (state = initialState, action: ActionsType): NavbarPropsType => {
	return state;
};
