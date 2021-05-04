import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import photoImage from './../assets/image/photo.jpg';
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';


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
            opacity: 0.5,
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
                    opacity: 1
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

function Main() {
    const photoImg = {
        backgroundImage: `url(${photoImage})`,
    };
    return (
        <div id="home" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
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
        </div>
    );
}

export default Main;