import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Expo, Power3 } from 'gsap';

import AnimatedCursor from "react-animated-cursor"


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

  

  

   return (
      <Router>
         <ScrollToTop />
         <motion.div
            
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
      
          <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color='0, 0, 0'
      outerAlpha={0.2}
      innerScale={0.5}
      outerScale={5}
    />
      </Router>
   );
}

export default App;
