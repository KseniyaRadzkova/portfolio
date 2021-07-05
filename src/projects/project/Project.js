import React from 'react';
import s from './Project.module.sass';

export const Project = ({image, projectUrl, title, description}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img className={s.image} src={image}/>
                <p className={s.description}>{description}</p>
                <a className={s.link} href={projectUrl} target={'_blank'}>{title}</a>
            </div>
        </div>
    );
}