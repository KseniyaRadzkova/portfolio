import React from 'react';
import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

const arrTitles = ['home', 'skills', 'projects', 'contacts']

export const Nav = () => {
    return (
        <div className={style.nav}>
            {arrTitles.map((item, i) => <Link
                key={i}
                activeClass={style.active}
                to={item}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >{item}</Link>)}
    </div>
    );
}
