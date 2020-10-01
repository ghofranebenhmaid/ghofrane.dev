import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Expo, Power3 } from 'gsap';

//import { staggerReveal, staggerRevealClose } from './assets/Animations';

import useMousePosition from './assets/hooks/useMousePosition';

import './App.scss';

import Header from '../src/components/Header/Header.components';
import Home from '../src/containers/Home/Home';
import About from '../src/containers/About/About';
import Prortfolio from '../src/containers/Prortfolio/Prortfolio';
import Logos from '../src/containers/Logos-page';
import Contact from '../src/containers/Contact/Contact';

import { AnimatePresence } from 'framer-motion';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './assets/hooks/ScrollToTop';

function App() {
   const [isRendered, setIsRendered] = useState(false);
   const toggle = () => {
      if (window.scrollY > 700) {
         setIsRendered(true);
      } else {
         setIsRendered(false);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', toggle);
      return () => {
         window.removeEventListener('scroll', toggle);
      };
   });

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
      <Router>
         <ScrollToTop />
         <motion.div
            ref={list}
            onHoverStart={() => setHoverState(true)}
            // onHoverEnd={() => setHoverState(true)}
            className='App'
         >
            <Header />
            <AnimatePresence>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/portfolio' component={Prortfolio} />
                  <Route exact path='/logos' component={Logos} />
                  <Route exact path='/contact' component={Contact} />
                  {/* <Route exact path='/home' component={Home2} /> */}
               </Switch>
            </AnimatePresence>
            <Footer />
            <motion.a
               initial={{ opacity: 0 }}
               animate={{
                  opacity: isRendered ? 1 : 0,
               }}
               transition={{
                  ease: Expo.easeOut,
                  duration: 1,
               }}
               href='#top'
               className='back-to-top'
               title='Back to Top'
            >
               <p className='back-to-top__image'>↑</p>
            </motion.a>
         </motion.div>
         <motion.svg
            initial={{ opacity: 0 }}
            animate={{
               opacity: hoverState ? 1 : 0,
               x: x - listPosition.left,
               y: y - listPosition.top,
            }}
            transition={{
               ease: Power3.easeOut,
               // ease: Expo.easeOut,
               duration: 0.08,
            }}
            className='cursor'
            width='25'
            height='25'
            // viewBox='0 0 20 20'
         >
            <circle className='cursor__inner' cx='12' cy='12' r='8' />
         </motion.svg>
      </Router>
   );
}

export default App;
