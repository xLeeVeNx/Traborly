import { IAddPostAction, IProfilePage } from '../components/Profile/IProfile';
import { IDialogsProps } from '../components/Dialogs/IDialogs';
import { IFriendsProps } from '../components/Friends/IFriends';
import { INavbarProps } from '../components/Navbar/INavbar';

export type ActionsType = IAddPostAction;

export interface IState {
	Navbar: INavbarProps;
	ProfilePage: IProfilePage;
	DialogsPage: IDialogsProps;
	FriendsPage: IFriendsProps;
}

export interface IStore {
	_state: IState;
	getState: () => IState;
	_subscriber: () => void;
	subscribe: (subscriber: () => void) => void;
	dispatch: (action: ActionsType) => void;
}
