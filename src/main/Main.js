import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import photoImage from './../assets/image/photo.jpg';
import jsImage from "../assets/image/js.png";

function Main() {
    const photoImg = {
        backgroundImage: `url(${photoImage})`,
    };
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Kseniya Radzkova</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo} style={photoImg}></div>
            </div>
        </div>
    );
}

export default Main;