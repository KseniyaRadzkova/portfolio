import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Kseniya Radzkova</h2>
                <div className={style.linksContainer}>
                    <span className={style.link}><FontAwesomeIcon icon={faLinkedin}/></span>
                    <span className={style.link}><FontAwesomeIcon icon={faGithub}/></span>
                    <span className={style.link}><FontAwesomeIcon icon={faSkype}/></span>
                    <span className={style.link}><FontAwesomeIcon icon={faTelegram}/></span>
                </div>
                <h3 className={style.title}>© 2021 All Rights Reserved</h3>

            </div>

        </div>
    );
}

export default Footer;