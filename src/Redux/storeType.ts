import { ProfilePageType } from '../components/Profile/ProfileType';
import { DialogsPageType } from '../components/Dialogs/DialogsType';
import { FriendsPropsType } from '../components/Friends/FriendsType';
import { NavbarPropsType } from '../components/Navbar/NavbarType';
import { sendMessageAC, addPostAC } from './store';

export type addPostActionType = ReturnType<typeof addPostAC>;
export type addMessageActionType = ReturnType<typeof sendMessageAC>;

export type ActionsType = addPostActionType | addMessageActionType;

export type StateType = {
	Navbar: NavbarPropsType;
	ProfilePage: ProfilePageType;
	DialogsPage: DialogsPageType;
	FriendsPage: FriendsPropsType;
};

export type StoreType = {
	_state: StateType;
	getState: () => StateType;
	_subscriber: () => void;
	subscribe: (subscriber: () => void) => void;
	dispatch: (action: ActionsType) => void;
};
