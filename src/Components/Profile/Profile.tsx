import React from 'react';

import './Profile.scss';

import Post from './Post/Post';
import User from './User/User';

const Profile: React.FC = () => {
    return (
        <section className="profile">
            <div className="profile__inner">
                <img className="profile__bg-image"
                     src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                     alt="Background image"/>
                <User/>
                <Post/>
            </div>
        </section>
    );
};

export default Profile;