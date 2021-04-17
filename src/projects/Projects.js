import React from 'react';
import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/todolist.png';
import socialImage from './../assets/image/social-network.jpg';

function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Lorem ipsum dolor sit amet, consectetur"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..."} />
                    <Project style={todolist} title={"Adipisicing elit, sed do eiusmod tempor"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore..."} />
                </div>

            </div>

        </div>
    );
}

export default Projects;