import React from 'react';
import style from './Skill.module.scss';
import Slide from 'react-reveal/Slide';

function Skill(props) {
    return (
        <Slide bottom>
            <div className={style.skillWrapper}>
                <div className={style.skill}>
                    <div className={style.icon} style={props.style}></div>
                    <p className={style.text}>{props.title}</p>
                    <span className={style.description}>{props.description}</span>
                </div>
            </div>
        </Slide>
    );
}

export default Skill;
