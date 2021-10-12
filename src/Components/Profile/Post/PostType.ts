import { PostItemPropsType } from './PostItem/PostItemType';
import { addPostActionType } from '../../../redux/storeType';

export type PostItemDataType = PostItemPropsType & {
	id: string;
};

export type PostPropsType = {
	PostItemData: PostItemDataType[];
	dispatch: (action: addPostActionType) => void;
};