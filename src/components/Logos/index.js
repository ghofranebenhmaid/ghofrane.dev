import React, { useEffect, useRef, useState } from 'react';

import { Expo } from 'gsap';

import './style.scss';

import logosData from '../../assets/data/logosData';

import { motion } from 'framer-motion';
import useMousePosition from '../../assets/hooks/useMousePosition';

const Logos = () => {
   let list = useRef();
   const [hoverState, setHoverState] = useState();
   const { x, y } = useMousePosition();
   const [listPosition, setListPosition] = useState({
      top: 0,
      left: 0,
   });

   useEffect(() => {
      setListPosition({
         top: list.current.getBoundingClientRect().top,
         left: list.current.getBoundingClientRect().left,
      });
   }, []);

   return (
      <div ref={list}>
         {logosData.map((data) => (
            <div key={data.id} className='container-logos'>
               <ul>
                  <motion.div
                     onHoverStart={() => setHoverState(true)}
                     onHoverEnd={() => setHoverState(false)}
                     className='row'
                  >
                     <h1>{data.name}</h1>
                  </motion.div>

                  <motion.div
                     className='floating'
                     initial={{ opacity: 0 }}
                     animate={{
                        opacity: hoverState ? 1 : 0,
                        x: x - listPosition.left,
                        y: y - listPosition.top,
                     }}
                  >
                     <motion.img src={data.src} />
                  </motion.div>
               </ul>
            </div>
         ))}
         )
      </div>
   );
};

export default Logos;
