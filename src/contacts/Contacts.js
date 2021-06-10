import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import photoBgImage from './../assets/image/photoBg.JPG';
import Title from "../common/components/title/Title";
import Slide from 'react-reveal/Slide';
import emailjs from "emailjs";


function Contacts() {
    const photoBgImg = {
        backgroundImage: `url(${photoBgImage})`,
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_bae4o6b', 'template_s4qbnye', e.target, 'user_eG8BNBina3YSfSqn3wq5E')
            .then((result) => {
                alert("Thank you! Your message has been sent.");
            }, (error) => {
                alert('Sorry, message not sent.');
            });
        e.target.reset();
    }

    return (
        <div id="contacts" className={style.contactsBlock} style={photoBgImg}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <div className={style.bodyContacts}>
                    <Title text={"Contact"}/>
                    <Slide bottom>
                        <form className={style.contacts} action={"#"} target={"_blank"} method={"post"}
                              onSubmit={sendEmail}>
                            <input className={style.field} type={"text"} name={"userName"} placeholder={"Name"}/>
                            <input className={style.field} type={"text"} name={"userEmail"} placeholder={"E-mail"}/>
                            <textarea className={style.textarea} name={"userText"} placeholder={"Your message"}></textarea>
                            <input className={style.btn} type={"submit"} value={"Send message"}/>
                        </form>
                    </Slide>

                </div>
            </div>

        </div>
    );
}

export default Contacts;