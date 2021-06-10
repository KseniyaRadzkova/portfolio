import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import brickWall from './../assets/image/brickWall.jpg';
import developmentImage from './../assets/image/development.png';
import foundationImage from './../assets/image/foundation.png';
import testingImage from './../assets/image/test.png';
import designImage from './../assets/image/design.png';

function Skills() {
    const wall = {
        backgroundImage: `url(${brickWall})`,
    };

    const developmentImg = {
        backgroundImage: `url(${developmentImage})`,
    };
    const foundationImg = {
        backgroundImage: `url(${foundationImage})`,
    };
    const testingImg = {
        backgroundImage: `url(${testingImage})`,
    };
    const designImg = {
        backgroundImage: `url(${designImage})`,
    };

    return (
        <div id="skills" className={style.skillsBlock} style={wall}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill style={developmentImg} title={"development"} description={"React, Redux, AXIOS etc"} />
                    <Skill style={foundationImg} title={"foundation"} description={"JavaScript, TypeScript, HTML5, CSS3"} />
                    <Skill style={testingImg} title={"testing"} description={"Unit Tests, SnapShot, Storybook"} />
                    <Skill style={designImg} title={"design"} description={"Material UI, Ant-Design etc"} />
                </div>

            </div>

        </div>
    );
}

export default Skills;
