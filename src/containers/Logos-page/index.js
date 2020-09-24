import React from 'react';
import { motion } from 'framer-motion';
import './style.scss';

import Title from '../../components/Title';

import logosData from '../../assets/data/logosData';

const transition = {
   duration: 0.6,
   ease: [0.43, 0.13, 0.23, 0.96],
   opacity: 0,
};

const Logos = () => {
   return (
      <div>
         <div className='logos'>
            <Title
               title='My logos'
               text='logo design'
               paragraf='Vivamus finibus lorem sit amet tincidunt finibus.Vivamus finibus lorem sit amet tincidunt finibus.Vivamus finibus lorem sit amet tincidunt finibus. Duis semper consectetur mauris, vitae ultrices felis auctor nec. Nulla interdum sed elit ut tempus.Vivamus finibus lorem sit amet tincidunt finibus. Duis semper consectetur mauris, vitae ultrices felis auctor nec. Nulla interdum sed elit ut tempus.'
            />
            <div className='section-grid'>
               {logosData.map((data, id) => (
                  <div className='container'>
                     <div key={id} className='box wrapper'>
                        <motion.img
                           transition={transition}
                           whileHover={{ scale: 1.2 }}
                           src={data.src}
                           width='100px'
                           alt={data.name}
                        />
                     </div>
                     <div className='description'>
                        <h2>{data.name}</h2>
                        {/* <p> {data.description} </p> */}
                        <a
                           className='project-link'
                           href={data.url}
                           target='_blank'
                           rel='noopener noreferrer'
                        >
                           See case study
                        </a>
                     </div>
                  </div>
               ))}
            </div>
            <span>Logos.</span>
         </div>
      </div>
   );
};

export default Logos;
