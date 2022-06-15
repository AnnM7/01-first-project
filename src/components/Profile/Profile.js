import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://ymcagbw.org/sites/default/files/2020-03/gray_wolf.png'></img>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;