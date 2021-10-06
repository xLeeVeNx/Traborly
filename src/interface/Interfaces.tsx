export interface IFriendsItemData extends IFriendsItemProps {
	id: string;
}

export interface  IFriendsItemProps {
	sourceImage: string;
	fullName: string;
	altText: string;
}

export interface IPostItemData extends IPostItemProps{
	id: string;
}

export interface IPostItemProps {
	text: string;
	likesCount: number;
}

export interface IPostProps {
	PostItemData: IPostItemData[];
	addPost: (text: string) => void;
}

export interface IUserItemProps {
	label: string;
	value: string;
}

export interface IDialogsItemProps {
	text: string;
	id: string;
}

export interface IDialogsMessageProps {
	text: string;
}

export interface IDialogsData {
	id: string;
	text: string;
}

export interface IMenuItemData extends IMenuItemProps{
	id: string;
}

export interface IMenuItemProps {
	sourceImage: string;
	href: string;
	altText: string;
	text: string;
}

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
	addPost: (text: string) => void;
}

interface IProfilePage {
	PostItemData: IPostItemData[];
}

export interface IFriendsProps {
	FriendsItemData: IFriendsItemData[];
}

export interface IDialogsProps {
	DialogsItemData: IDialogsData[];
	DialogsMessageData: IDialogsData[];
}

export interface IProfileProps extends IPostProps {}

export interface INavbarProps {
	MenuItemData: IMenuItemData[];
}

export interface IAppProps {
	store: IStore;
}

