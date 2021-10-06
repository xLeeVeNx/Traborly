// Import from libs
import { v1 } from 'uuid';

// Import images
import profile from '../assets/images/icons/profile.svg';
import news from '../assets/images/icons/news.svg';
import message from '../assets/images/icons/message.svg';
import friends from '../assets/images/icons/friends.svg';
import settings from '../assets/images/icons/settings.svg';
import user from '../assets/images/user.svg';

// Import interfaces
import { IState } from '../interface/Interfaces';

// Functions
let renderEntireTree = (state: IState) => {};

export const subscribe = (observer: (state: IState) => void) => {
	renderEntireTree = observer; // observer !== publisher-subscriber === patterns
}

// State
export const state: IState = {
	Navbar: {
		MenuItemData: [
			{id: v1(), sourceImage: profile, href: '/profile', altText: 'Profile', text: 'Моя страница'},
			{id: v1(), sourceImage: news, href: '/news', altText: 'News', text: 'Новости'},
			{id: v1(), sourceImage: message, href: '/dialogs', altText: 'Message', text: 'Сообщения'},
			{id: v1(), sourceImage: friends, href: '/friends', altText: 'Friends', text: 'Друзья'},
			{id: v1(), sourceImage: settings, href: '/settings', altText: 'Settings', text: 'Настройки'},
		],
	},
	ProfilePage: {
		PostItemData: [
			{id: v1(), text: 'Post #1', likesCount: 10},
			{id: v1(), text: 'Post #2', likesCount: 5},
			{id: v1(), text: 'Post #3', likesCount: 14},
		],
	},
	DialogsPage: {
		DialogsItemData: [
			{id: v1(), text: 'Damil'},
			{id: v1(), text: 'Maksim'},
			{id: v1(), text: 'Daniil'},
			{id: v1(), text: 'Dauren'},
			{id: v1(), text: 'Viktor'},
		],
		DialogsMessageData: [
			{id: v1(), text: 'Hello'},
			{id: v1(), text: 'How are you?'},
			{id: v1(), text: 'What are you doing now?'},
			{id: v1(), text: 'What do you do?'},
			{id: v1(), text: 'Maybe, do you want to go for a walk?'},
		],
	},
	FriendsPage: {
		FriendsItemData: [
			{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Ксения Швецова'},
			{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Ильяс Коробкин'},
			{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Даурен Турарбек'},
			{id: v1(), sourceImage: user, altText: 'Anonymous', fullName: 'Андрей Ким'},
		],
	},
};

// Functions changing state
export const addPost = (text: string) => {
	state.ProfilePage.PostItemData.push({id: v1(), text, likesCount: 0});
	renderEntireTree(state);
};
