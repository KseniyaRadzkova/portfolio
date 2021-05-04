import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import brickWall from './../assets/image/brickWall.jpg';
import jsImage from './../assets/image/js.png';
import cssImage from './../assets/image/css.png';
import reactImage from './../assets/image/react.png';


function Skills() {
    const wall = {
        backgroundImage: `url(${brickWall})`,
    };
    const jsImg = {
        backgroundImage: `url(${jsImage})`,
    };
    const cssImg = {
        backgroundImage: `url(${cssImage})`,
    };
    const reactImg = {
        backgroundImage: `url(${reactImage})`,
    };

    return (
        <div id="skills" className={style.skillsBlock} style={wall}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill style={jsImg} title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."} />
                    <Skill style={cssImg} title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."} />
                    <Skill style={reactImg} title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."} />
                </div>

            </div>

        </div>
    );
}

export default Skills;
