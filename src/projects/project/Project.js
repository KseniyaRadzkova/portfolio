import React from 'react';
import style from './Project.module.css';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.iconBlock}>
                <div className={style.imgContainer}>
                    <a className={style.img} href={"#"}>See more</a>
                </div>

            </div>
            <div>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;