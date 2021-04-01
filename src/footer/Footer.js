import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Kseniya Radzkova</h2>
                <div className={style.linksContainer}>
                    <span className={style.link}>Linkedin</span>
                    <span className={style.link}>GitHub</span>
                    <span className={style.link}>Facebook</span>
                </div>
                <h3 className={style.title}>© 2021 All Rights Reserved</h3>

            </div>

        </div>
    );
}

export default Footer;