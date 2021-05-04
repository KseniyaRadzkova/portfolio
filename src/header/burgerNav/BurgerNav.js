import React, { useState } from 'react';
import style from './BurgerNav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    let onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
            <div onClick={onBurgerBtnClick} className={style.burgerBtn}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    );
}

export default BurgerNav;
