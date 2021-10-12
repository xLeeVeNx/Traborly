// Import from libs
import { v1 } from 'uuid';

// Import images
import profile from '../assets/images/icons/profile.svg';
import news from '../assets/images/icons/news.svg';
import message from '../assets/images/icons/message.svg';
import friends from '../assets/images/icons/friends.svg';
import settings from '../assets/images/icons/settings.svg';
import user from '../assets/images/user.svg';

// Import types
import { StoreType } from './storeType';
import { PostItemDataType } from '../components/Profile/Post/PostType';
import { DialogsDataType } from '../components/Dialogs/DialogsType';

// Import constants
import { ADD_POST, SEND_MESSAGE } from '../utils/constants';

// Store
export const store: StoreType = {
	_state: {
		Navbar: {
			MenuItemData: [
				{id: v1(), sourceImage: profile, href: '/profile', altText: 'Profile', text: 'Моя страница'},
				{id: v1(), sourceImage: news, href: '/news', altText: 'News', text: 'Новости'},
				{id: v1(), sourceImage: message, href: '/dialogs', altText: 'Message', text: 'Сообщения'},
				{id: v1(), sourceImage: friends, href: '/friends', altText: 'Friends', text: 'Друзья'},
				{id: v1(), sourceImage: settings, href: '/settings', altText: 'Settings', text: 'Настройки'}
			]
		},
		ProfilePage: {
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
		},
		DialogsPage: {
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
		},
		FriendsPage: {
			FriendsItemData: [
				{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Ксения Швецова'},
				{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Ильяс Коробкин'},
				{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Даурен Турарбек'},
				{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Андрей Ким'}
			]
		}
	},
	_subscriber() {
	},

	getState() {
		return this._state;
	},
	subscribe(subscriber) {
		this._subscriber = subscriber;
	},

	dispatch(action) {
		switch (action.type) {
			case ADD_POST: {
				const newPost: PostItemDataType = {
					id: v1(),
					text: action.text,
					likesCount: 0
				};
				this._state.ProfilePage.PostItemData = [ ...this._state.ProfilePage.PostItemData, newPost ];
				this._subscriber();
				break;
			}
			case SEND_MESSAGE: {
				const newMessage: DialogsDataType = {
					id: v1(),
					text: action.text
				};
				this._state.DialogsPage.DialogsMessageData = [ ...this._state.DialogsPage.DialogsMessageData, newMessage ];
				this._subscriber();
				break;
			}
		}
	}
};

// ActionCreators
export const addPostAC = (text: string) => {
	return {
		type: ADD_POST,
		text
	} as const;
};
export const sendMessageAC = (text: string) => {
	return {
		type: SEND_MESSAGE,
		text
	} as const;
};