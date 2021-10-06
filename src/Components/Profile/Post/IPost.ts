import { IAddPostAction, IPostItemData } from '../IProfile';

export interface IPostProps {
	PostItemData: IPostItemData[];
	dispatch: (action: IAddPostAction) => void;
}