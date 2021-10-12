import { FriendsItemPropsType } from './FriendsItem/FriendsItemType';

type FriendsItemDataType  = FriendsItemPropsType & {
	id: string;
}

export type FriendsPropsType = {
	FriendsItemData: FriendsItemDataType[];
};