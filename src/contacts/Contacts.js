import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import photoBgImage from './../assets/image/photoBg.JPG';
import Title from "../common/components/title/Title";
import Slide from 'react-reveal/Slide';

function Contacts() {
    const photoBgImg = {
        backgroundImage: `url(${photoBgImage})`,
    };
    return (
        <div id="contacts" className={style.contactsBlock} style={photoBgImg}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.bodyContacts}>
                    <Title text={"Contact"}/>
                    <Slide bottom>
                        <form className={style.contacts} action={"#"} target={"_blank"} method={"post"}>
                            <input className={style.field} type={"text"} name={"userName"} placeholder={"Name"}/>
                            <input className={style.field} type={"text"} name={"userEmail"} placeholder={"E-mail"}/>
                            <textarea className={style.textarea} name={"userText"} placeholder={"Your message"}
                                      maxlength={"40"}></textarea>
                            <input className={style.btn} type={"submit"} value={"Send message"}/>
                        </form>
                    </Slide>
                </div>
            </div>

        </div>
    );
}

export default Contacts;