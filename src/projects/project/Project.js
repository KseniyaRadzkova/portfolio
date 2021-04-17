import React from 'react';
import style from './Project.module.scss';

function Project(props) {
    return (
        <div className={style.project}>
            <div className={style.iconBlock}>
                <div className={style.imgContainer} style={props.style}>
                    {/*<a className={style.viewBtn}>See more</a>*/}
                </div>

            </div>
            <div className={style.projectBody}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p className={style.projectDescription}>{props.description}</p>
            </div>

            <div className={style.linkContainer}>
                <a className={style.link} href="#">
                    <span>See more</span>
                </a>
            </div>

        </div>
    );
}

export default Project;