import React from 'react';
import style from './Footer.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faSkype} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import Slide from 'react-reveal/Slide';

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Kseniya Radzkova</h2>
                <Slide bottom>
                    <div className={style.linksContainer}>
                        <a className={style.link}><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a className={style.link}><FontAwesomeIcon icon={faGithub}/></a>
                        <a className={style.link}><FontAwesomeIcon icon={faSkype}/></a>
                        <a className={style.link}><FontAwesomeIcon icon={faTelegram}/></a>
                    </div>
                </Slide>
                <h3 className={style.title}>© 2021 All Rights Reserved</h3>

            </div>

        </div>
    );
}

export default Footer;