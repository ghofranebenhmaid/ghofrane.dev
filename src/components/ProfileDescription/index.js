import React, { useRef, useEffect } from 'react';

import './style.scss';
import { motion } from 'framer-motion';
import { TweenMax, Power3 } from 'gsap';

import photoprofile from '../../assets/images/ghofranebenhmaid.jpg';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const ProfileDescription = () => {
   let img = useRef(null);
   let p = useRef(null);

   useEffect(() => {
      TweenMax.staggerFrom(
         [p],
         2.5,
         { opacity: 0, y: 30, ease: Power3.easeOut },
         1
      );
      TweenMax.staggerFrom(
         [img],
         1.5,
         { opacity: 0, y: 50, ease: Power3.easeOut },
         1
      );
   }, []);
   return (
      <div>
         <div className='profile'>
            <div className='container'>
               <div className='wrapper'>
                
                  <div className='description'>
                     {/* <h4>This is the firct project</h4> */}
                     <p
                        className='small-title'
                        ref={(element) => {
                           p = element;
                        }}
                     >
                        <strong>
                           I am a Graphic Designer and Web Developer from
                           Tunisia, living in Copenhagen Danmark.I have studied
                           IT & Multimedia in Tunisia and have gained a lot of
                           practical experience in Photography, Graphic Design,
                           and Web Design.
                        </strong>
                        <br />
                        <br /> This experience I have gained through different
                        jobs working for a political candidate’s campaign and
                        later doing media work for them as member of the
                        Tunisian parliament. I have also worked for a Tunisian
                        magazine creating graphics and page layout.
                     </p>
                  </div>
                  <div
                     className='box'
                     ref={ (element) =>
                     {
                        img = element;
                     } }
                  >
                     <motion.img
                        src={ photoprofile }
                        alt='photoprofile'
                        transition={ transition }
                        whileHover={ { scale: 1.1 } }
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileDescription;
