import { ActionsType } from '../../redux/storeType';

export type DialogsDataType = {
	id: string;
	text: string;
};

export type DialogsPropsType = {
	DialogsItemData: DialogsDataType[];
	DialogsMessageData: DialogsDataType[];
	dispatch: (action: ActionsType) => void;
};

export type DialogsPageType = {
	DialogsItemData: DialogsDataType[];
	DialogsMessageData: DialogsDataType[];
}