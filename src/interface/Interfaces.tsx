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
}

export interface IUserItemProps {
	text: string;
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
	ProfilePage: IProfileProps;
	DialogsPage: IDialogsProps;
	FriendsPage: IFriendsProps;
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
	state: IState;
}

