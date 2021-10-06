import { IPostItemProps } from './Post/PostItem/IPostItem';
import { IPostProps } from './Post/IPost';
import { IUserItemData } from './User/UserItem/IUserItem';
import { IUserProps } from './User/IUser';

export interface IAddPostAction {
	type: 'ADD-POST';
	text: string;
}

export interface IPostItemData extends IPostItemProps {
	id: string;
}

export interface IProfilePage {
	PostItemData: IPostItemData[];
	UserItemData: IUserItemData[];
}

export interface IProfileProps extends IPostProps, IUserProps {
}