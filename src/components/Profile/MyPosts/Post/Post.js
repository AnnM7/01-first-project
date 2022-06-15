import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/736x/ef/84/33/ef8433606891928ab88136a23ade1553.jpg'></img>
            {props.message}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    )
}

export default Post;