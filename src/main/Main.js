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
                    <h4 className={style.CVText}>Download CV</h4>
                    <a className={style.CVBtn}
                       href={"https://drive.google.com/file/d/1HWLAvyeMKuvvWz-KQIYr5tZKKyrjcRVq/view?usp=sharing"}>click</a>
                </div>
            </div>

        </div>
    );
}

export default Main;