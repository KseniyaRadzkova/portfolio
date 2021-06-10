import React, {useState} from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import Slide from 'react-reveal/Slide';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Kseniya Radzkova</h2>
                <Slide bottom>
                    <div className={style.footerWrapper}>
                        <div className={style.linksContainer}>
                            <a href={"tel:+375447127095"} className={style.link}><i className="fa fa-phone" aria-hidden="true"></i></a>
                            <a href={"https://www.linkedin.com/in/radzkova/"} className={style.link}><FontAwesomeIcon
                                icon={faLinkedin}/></a>
                            <a href={"https://github.com/KseniyaRadzkova"} className={style.link}><FontAwesomeIcon
                                icon={faGithub}/></a>
                            <a href={"https://t.me/radzkovakseniya"} className={style.link}><FontAwesomeIcon
                                icon={faTelegram}/></a>
                            <a href={"mailto:kseniya.goncharuk@mail.ru"} className={style.link}><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </Slide>
                <h3 className={style.title}>© 2021 All Rights Reserved</h3>

            </div>

        </div>
    );
}

export default Footer;