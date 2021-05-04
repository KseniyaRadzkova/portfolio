import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            <Link
                activeClass={style.active}
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >home</Link>
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >skills</Link>
            <Link
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >projects</Link>
            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >contact</Link>
        </div>
    );
}

export default Nav;
