export interface IPostItem {
	id: number;
	text: string;
	likesCount: number;
}

export interface IPostProps {
	PostItemData: IPostItem[];
}

export interface IProfileProps extends IPostProps {}

export interface IDialogsData {
	id: number;
	text: string;
}

export interface IDialogsProps {
	DialogsItemData: IDialogsData[];
	DialogsMessageData: IDialogsData[];
}

export interface IState {
	ProfilePage: IProfileProps;
	DialogsPage: IDialogsProps;
}

export interface IAppProps {
	state: IState;
}