import React from 'react';
import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/todolist.png';
import socialImage from './../assets/image/social-network.jpg';
import toggleImage from './../assets/image/toggle.jpg';
import Slide from 'react-reveal/Slide';
import {Project} from "./project/Project";

function Projects() {

    const projects = [
        {
            image: socialImage,
            title: 'Social Network',
            projectUrl: 'https://github.com/KseniyaRadzkova/s-n',
            description: 'Social Network is a single page application, which contains all base functionality of modern social networks.',
        },
        {
            image: todoImage,
            title: 'Todo list',
            projectUrl: 'https://github.com/KseniyaRadzkova/todolist',
            description: 'Todolist is a single page application. It is an analogue of popular project management system Trello.',
        },
        {
            image: toggleImage,
            title: 'Collection of components',
            projectUrl: 'https://github.com/KseniyaRadzkova/react-homeworks',
            description: 'A collection of demo React components that are often used in software development.'
        },
    ]

    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={"Projects"}/>
                <Slide bottom>
                    <div className={style.projects}>
                        {projects.map((el) => <Project title={el.title} description={el.description}
                                                       projectUrl={el.projectUrl} image={el.image}/>)}
                    </div>
                </ Slide>
            </div>
        </div>
    );
}

export default Projects;