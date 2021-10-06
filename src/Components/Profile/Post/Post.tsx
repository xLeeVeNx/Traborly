// Import from libs
import React, { ChangeEvent, useState } from 'react';

// Import components
import { PostItem } from './PostItem/PostItem';

// Import interfaces
import { IPostProps } from './IPost';

// Main code
export const Post: React.FC<IPostProps> = ({PostItemData, dispatch}) => {
	const [ height, setHeight ] = useState(56);
	const [ value, setValue ] = useState('');

	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const target = event.currentTarget;

		setValue(target.value);

		if (target.scrollTop > 0) {
			setHeight(target.scrollHeight);
		}
	};

	const onClickHandler = () => {
		dispatch({type: 'ADD-POST', text: value});
		setValue('');
	};

	return (
		<div className="profile__post">
			<textarea className="profile__post-msg" placeholder="Введите текст поста"
			          style={ {height: height + 'px'} }
			          onChange={onChangeHandler}
			          value={ value }
			/>
			<div className="profile__post-text">Мои записи</div>
			<button className="profile__post-btn" type="submit" onClick={ onClickHandler }>Send</button>
			<div className="profile__post-items">
				{
					PostItemData.map(item =>
						<PostItem key={ item.id } text={ item.text } likesCount={ item.likesCount } />,
					)
				}
			</div>
		</div>
	);
};