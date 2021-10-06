// Import from libs
import React from 'react';

// Import styles
import './User.scss';

// Import components
import { UserItem } from './UserItem/UserItem';

// Import images
import avatar from '../../../assets/images/myAvatar.jpg';

// Main code
export const User: React.FC = () => {
	return (
		<div className="profile__user">
			<img className="profile__user-img"
			     src={avatar}
			     alt="Avatar" />
			<div className="profile__user-info">
				<div className="profile__user-name">Дамиль Бердыев</div>
				<ul className="profile__user-items">
					<UserItem label="День рождение:" value="29 сентября 2004 г." />
					<UserItem label="Город:" value="Талдыкорган" />
					<UserItem label="Место учёбы:" value="Школа" />
					<UserItem label="Любимый фильм:" value="Форсаж" />
					<UserItem label="Веб-сайт:" value="Отсутствует" />
				</ul>
			</div>
		</div>
	);
};