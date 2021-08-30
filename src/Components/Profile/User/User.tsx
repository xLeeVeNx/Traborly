import React from 'react';
import UserItem from './UserItem/UserItem';

const User: React.FC = () => {
    return (
        <div className="profile__user">
            <img className="profile__user-img"
                 src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
                 alt="Avatar"/>
            <div className="profile__user-info">
                <div className="profile__user-name">Damil B.</div>
                <div className="profile__user-box">
                    <UserItem text="Date of Birth: 29 September"/>
                    <UserItem text="City: Taldykorgan"/>
                    <UserItem text="Education: School"/>
                    <UserItem text="Web Site: Does not have"/>
                </div>
            </div>
        </div>
    );
};

export default User;