import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import photoImage from './../assets/image/photo.jpg';
import ReactTypingEffect from 'react-typing-effect';
import night from './../assets/image/night4.jpg'
import {Header} from "../header/Header";

function Main() {
    const photoNight = {
        backgroundImage: `url(${night})`,
    };
    const photoImg = {
        backgroundImage: `url(${photoImage})`,
    };
    return (
        <div id="home" className={style.mainBlock}>
            <div className={style.backgroundBlock} style={photoNight}></div>
            <Header/>
            <div className={style.wrapper}>
                <div className={styleContainer.container}>
                    <div className={style.text}>
                        <span>Hi There</span>
                        <h1>I am Kseniya Radzkova</h1>
                        <ReactTypingEffect
                            text={"Frontend Developer"} typingDelay={"100ms"}
                        />
                    </div>
                    <div className={style.photo} style={photoImg}></div>
                </div>
                <div className={style.CVWrapper}>
                    <a className={style.CVBtn} target="_blank"
                       href={"https://drive.google.com/file/d/14Katsj0c_H2r_gLkkSY0I6Q9QaNRqR0m/view?usp=sharing"}>Download CV</a>
                </div>
            </div>

        </div>
    );
}

export default Main;