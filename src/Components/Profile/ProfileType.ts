import { PostItemDataType } from './Post/PostItem/PostItemType';
import { PostPropsType } from './Post/PostType';
import { UserItemDataType } from './User/UserItem/UserItemType';
import { UserPropsType } from './User/UserType';

export type ProfilePageType = {
	PostItemData: PostItemDataType[];
	UserItemData: UserItemDataType[];
};

export type ProfilePropsType = PostPropsType & UserPropsType;