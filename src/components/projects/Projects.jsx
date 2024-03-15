import React, { useEffect } from 'react';
import './Projects.scss';
import { projectsInfo } from './projectsInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/variants';

const Projects = () => {


    useEffect(() => {
        AOS.init({
            duration: 2250
        })
    }, []);

    return (
        <section className="projects section" id='projects'>
            <motion.h2
                className="section-title"
                variants={fadeIn('right')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                My Projects
            </motion.h2>
            <motion.span
                className="section-subtitle"
                variants={fadeIn('left')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                - Most recent work -
            </motion.span>

            <div className="projects-container container grid">
                <div className="project-content">
                    {/* display each project */}
                    {projectsInfo.map((project, index) => {
                        return (
                            <div data-aos="fade-up" className="project-box" key={index}>
                                <div className="project-image">
                                    <img src={project.src} alt={project.alt} loading="lazy" />
                                </div>
                                <h3>{project.title}</h3>
                                <div className="project-buttons">
                                </div>
                            </div>
                        )
                    })}
                </div>






            </div>
        </section>
    )
}

export default Projects