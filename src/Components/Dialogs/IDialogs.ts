interface IDialogsData {
	id: string;
	text: string;
}

export interface IDialogsProps {
	DialogsItemData: IDialogsData[];
	DialogsMessageData: IDialogsData[];
}