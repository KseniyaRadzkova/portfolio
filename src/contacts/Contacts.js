import React from 'react';
import style from './Contacts.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.contacts} action={"#"} target={"_blank"} method={"post"}>
                    <input className={style.field} type={"text"} name={"userName"} placeholder={"Name"} />
                    <input className={style.field} type={"text"} name={"userEmail"} placeholder={"E-mail"} />
                    <textarea className={style.textarea} name={"userText"} placeholder={"Your message"} maxlength={"40"}></textarea>
                    <input className={style.btn} type={"submit"} value={"Send message"}  />
                </form>
            </div>

        </div>
);
}

export default Contacts;