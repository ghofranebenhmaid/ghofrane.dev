import React, { useRef, useEffect } from 'react';
import { TweenMax, Power3, gsap } from 'gsap';
import { FaGithub } from 'react-icons/fa';

import './style.scss';
import TreasureHunt from '../../assets/images/treasureHunt.png';
import ShoppingCart from '../../assets/images/iMac-Screen-1.png';
import MealSharing from '../../assets/images/mealshering.png';

import { motion } from 'framer-motion';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const transition = {
   duration: 0.6,
   ease: [0.43, 0.13, 0.23, 0.96],
   opacity: 0,
};
const data = [
   {
      id: 1,
      src: TreasureHunt,
      name: 'logos',
      title: 'Treasure Hunt ',
      discription:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      language: ['HTML', 'CSS', 'JavaScript', 'Nodejs', 'React'],
   },
   {
      id: 2,
      src: MealSharing,

      codeSource: 'https://github.com/ghofranebenhmaid/mealinfo',
      title: 'mealinfo:',
      discription:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      language: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Nodejs'],
      web: 'https://hyf-meal-sharing-ghofrane.herokuapp.com/',
   },
   {
      id: 3,
      src: ShoppingCart,
      codeSource:
         'https://github.com/ghofranebenhmaid/Projects/tree/master/ShoppingCart',
      title: 'Shopping Cart ',
      discription:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      language: ['HTML', 'SCSS', 'JavaScript'],
      web:
         'https://htmlpreview.github.io/?https://github.com/ghofranebenhmaid/Projects/blob/master/ShoppingCart/index.html',
   },
];

function ProjectSection() {
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
               y: -30,
               scrollTrigger: {
                  id: `section-${index + 1}`,
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
      <div className='card' id='project'>
         {data.map((data, id) => (
            <div key={id} className='container'>
               <div className='project-info' ref={addToRefs}>
                  <h1>{data.title}</h1>
                  <p>{data.discription}</p>

                  <ul>
                     {data.language && data.language.length > 0
                        ? data.language.map((item) => {
                             return (
                                <li key={item.id}>
                                   <span>&#8250;</span>
                                   {item}
                                </li>
                             );
                          })
                        : 'Loading...'}
                  </ul>

                  <div className='work_links'>
                     <a className='project-link' href={data.web} target='blank'>
                        Visit Site <span>&rarr;</span>
                     </a>
                     <a
                        className='work_code'
                        href={data.codeSource}
                        title='View Source Code'
                        target='blank'
                     >
                        <FaGithub />
                     </a>
                  </div>
               </div>
               <div className='project-image ' ref={addToRefs}>
                  <motion.img
                     transition={transition}
                     whileHover={{ scale: 1.03 }}
                     src={data.src}
                     width='100%'
                     height='100%'
                     alt={data.name}
                  />
               </div>
            </div>
         ))}
      </div>
   );
}

export default ProjectSection;
