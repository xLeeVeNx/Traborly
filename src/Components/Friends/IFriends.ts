import { IFriendsItemProps } from './FriendsItem/IFriendsItem';

interface IFriendsItemData extends IFriendsItemProps {
	id: string;
}

export interface IFriendsProps {
	FriendsItemData: IFriendsItemData[];
}