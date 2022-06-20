import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Jeka'},
        {id: 3, name: 'Edward'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Natasha'},
        {id: 6, name: 'Roma'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Anna" id="1"/>
                <DialogItem name="Jeka" id="2"/>
                <DialogItem name="Edward" id="3"/>
                <DialogItem name="Nikita" id="4"/>
                <DialogItem name="Natasha" id="5"/>
                <DialogItem name="Roma" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;