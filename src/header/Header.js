import React from 'react';
import style from './Header.module.css';
import Nav from "../nav/Nav";

function Header() {
    return (
        <div className={style.headerContainer}>
            <div className={style.header}>
                <Nav/>

            </div>
        </div>
    );
}

export default Header;
