import React from 'react'
import './Resources.scss'
import eBook from '../../assets/me.jpeg'

import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/variants';

const Resources = () => {
    return (
        <section className="resources section" id="resources">
            <motion.h2 
                className="section-title"
                variants={fadeIn('left')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                Note
            </motion.h2>
            <motion.span 
                className="section-subtitle"
                variants={fadeIn('right')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                - Learn with me -
            </motion.span>

            <motion.div 
                className="resources-container grid"
                variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                <div className="resources-card">
                    <div className="resources-card-image">
                        <img src={eBook} alt="Web Dev eBook" loading="lazy" />
                    </div>

                    <div className="resources-card-details">
                        <div className="resources-card-details-content">
                            <h3>whatever You Can Think You Able To Code..</h3>
                            <p> <br /> Code - Eat - Sleep - Repete</p>
                            <a href={eBook} download="it's Me" className="card-download" target="_blank" rel="noreferrer">Download</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Resources