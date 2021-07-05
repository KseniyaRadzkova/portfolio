import React from 'react';
import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/todolist.png';
import socialImage from './../assets/image/social-network.jpg';
import toggleImage from './../assets/image/toggle.jpg';
import yogaImage from './../assets/image/yoga.jpg'
import Slide from 'react-reveal/Slide';
import {Project} from "./project/Project";
import Particles from "react-particles-js";

const particlesOpt = {
    backgroundMode: {
        enable: true,
        zIndex: 0
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 700
            }
        },
        color: {
            value: "#009e66"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 1,
                color: "#145ea8"
            },
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 7,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: "#009e66",
            opacity: 0.9,
            width: 2
        },
        move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 800,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 800,
                size: 80,
                duration: 2,
                opacity: 0.8,
                speed: 2
            },
            repulse: {
                distance: 400,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
}

function Projects() {

    const projects = [
        {
            image: socialImage,
            title: 'Social Network',
            projectUrl: 'https://github.com/KseniyaRadzkova/s-n',
            description: 'A single page application, which contains all base functionality of modern social networks.',
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
        {
            image: yogaImage,
            title: 'Yoga studio',
            projectUrl: 'https://github.com/KseniyaRadzkova/yoga',
            description: 'It is my first multipages responsive website related to yoga studio (HTML, CSS, Bootstrap).'
        }
    ]

    return (
        <div id="projects" className={style.projectsBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
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