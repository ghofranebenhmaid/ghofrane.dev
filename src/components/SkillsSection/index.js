import React, { useRef, useEffect, useState } from 'react';
import { TweenMax, Power3, gsap } from 'gsap';

import { Link } from 'react-router-dom';

import './style.scss';
import coding from '../../assets/images/coding.jpg';
import logoDesign from '../../assets/images/brad-neathery-mGH253KbfaY-unsplash.jpg';
import photography from '../../assets/images/photography.jpg';
import typography from '../../assets/images/typographie.jpg';

import { motion } from 'framer-motion';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const transition = {
   duration: 0.6,
   ease: [0.43, 0.13, 0.23, 0.96],
   opacity: 0,
};
const data = [
   { id: 1, src: logoDesign, name: 'logos', title: '#Logos ' },
   { id: 2, src: coding, name: 'Coding', title: '#Coding' },
   { id: 3, src: photography, name: 'img3', title: '#Photography' },
   { id: 4, src: typography, name: 'img3', title: '#Typography' },
];

function SkillsSection() {
   const revealRefs = useRef([]);
   revealRefs.current = [];

   useEffect(() => {
      revealRefs.current.forEach((el, index) => {
         gsap.fromTo(
            el,
            {
               autoAlpha: 0,
            },
            {
               duration: 1,
               autoAlpha: 1,
               ease: Power3.easeOut,
               y: -40,
               scrollTrigger: {
                  // id: `section-${index + 1}`,
                  trigger: el,
                  start: 'top center+=300',
                  toggleActions: 'play none none reverse',
               },
            }
         );
      });
   }, []);

   const addToRefs = (el) => {
      if (el && !revealRefs.current.includes(el)) {
         revealRefs.current.push(el);
      }
   };

   return (
      <div className='section-skills'>
         <div className='section-grid'>
            <div className='container'>
               {data.map((data, id) => (
                  <div key={id} className='wrapper' ref={addToRefs}>
                     <Link to={data.name}>
                        <motion.div
                           transition={transition}
                           whileHover={{
                              scale: 1.1,
                           }}
                        >
                           <motion.img
                              src={data.src}
                              width='100%'
                              height='100%'
                              alt={data.name}
                           />

                           <motion.div
                              whileHover={{ opacity: 1 }}
                              className='project-info'
                           >
                              <h4>{data.title}</h4>
                              <a className='project-link' href='#about'>
                                 See more
                              </a>
                           </motion.div>

                           <motion.div className='project-title'>
                              <h4>{data.title}</h4>
                           </motion.div>
                        </motion.div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default SkillsSection;
