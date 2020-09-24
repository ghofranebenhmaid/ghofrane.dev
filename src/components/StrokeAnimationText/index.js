import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';
import { Expo } from 'gsap';

import profileImage from '../../assets/images/ghofranebh.png';

import useMousePosition from '../../assets/hooks/useMousePosition';

import './style.scss';

const StrokeAnimationGhofrane = () => {
   const container = useRef(null);

   useEffect(() => {
      lottie.loadAnimation({
         container: container.current,
         renderer: 'svg',
         loop: false,
         autoplay: true,
         animationData: require('../../assets/data/StrokeAnimationGhofrane.json'),
      });
   }, []);

   let list = useRef();
   const [hoverState, setHoverState] = useState(false);
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
      <div ref={list} className='StrokeAnimation'>
         <motion.div
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            className='container'
            ref={container}
         ></motion.div>
         <motion.div
            className='floating-image'
            initial={{ opacity: 0 }}
            animate={{
               opacity: hoverState ? 1 : 0,
               x: x - listPosition.left,
               y: y - listPosition.top,
            }}
            transition={{
               // ease: Power3.easeOut,
               ease: Expo.easeOut,
               duration: 0.8,
            }}
         >
            <img src={profileImage} alt='profileImage' />
         </motion.div>
      </div>
   );
};

export default StrokeAnimationGhofrane;
