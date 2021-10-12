export type PostItemPropsType = {
	text: string;
	likesCount: number;
};

export type PostItemDataType = PostItemPropsType & {
	id: string;
};