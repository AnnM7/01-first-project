import React from "react";
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Jeka
                </div>
                <div className={s.dialog}>
                    Edward
                </div>
                <div className={s.dialog}>
                    Nikita
                </div>
                <div className={s.dialog}>
                    Natasha
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;