import React from 'react';

interface IUserItemProps {
    text: string;
}

const UserItem: React.FC<IUserItemProps> = props => {
    return (
        <p className="profile__user-item">{props.text}</p>
    );
};

export default UserItem;