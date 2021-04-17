import React from 'react';
import style from './Skill.module.scss';

function Skill(props) {
    return (
        <div className={style.skillWrapper}>
            <div className={style.skill}>
                <div className={style.icon} style={props.style}></div>
                <h3>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Skill;
