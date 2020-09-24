import React, { useRef, useEffect } from 'react';
import './Home.scss';

import { TweenMax, Power3 } from 'gsap';
// import gsap from 'gsap';
import Section from '../../components/Section';
import GithubRepo from '../../components/GithubRepo';
import StrokeAnimationGhofrane from '../../components/StrokeAnimationText';
import Title from '../../components/Title';

import { Link } from 'react-router-dom';
import SkillsSection from '../../components/SkillsSection';
import Instagram from '../../components/Instagram';
import WorkSection from '../../components/WorkSection';
import ProjectSection from '../../components/ProjectSection';
// import ProjectSection from '../../components/ProjectSection';

function Home() {
   // let h0 = useRef(null);
   let fadeUp = useRef(null);
   let h3 = useRef(null);

   useEffect(() => {
      TweenMax.staggerFrom(
         [fadeUp, h3],
         1,
         { opacity: 0, y: 15, ease: Power3.easeInOut },
         0.8
      );
   }, []);

   return (
      <div className='Home' id='up'>
         <div className='container'>
            <div className='wrapper'>
               <div className='main'>
                  <StrokeAnimationGhofrane />
                  <div className='main-text'>
                     <h1
                        ref={(el) => {
                           fadeUp = el;
                        }}
                     >
                        Website and user interface designer
                     </h1>
                  </div>
                  <div
                     ref={(el) => {
                        h3 = el;
                     }}
                     className='link-text'
                  >
                     <h2>
                        <Link className='link' to='#project'>
                           View Projects
                        </Link>
                     </h2>
                     {/* <a href='#project' title='View Source Code'></a> */}
                     <p>or</p>
                     <h2>
                        <Link className='link' to='/about'>
                           Read About Me
                        </Link>
                     </h2>
                  </div>
               </div>
               {/* <WorkSection /> */}
               <Title title='Projects Section' text='SELECTED PROJECTS' />
               <ProjectSection />
               <SkillsSection />
               {/*   <Title title='Projects Section' text='PHOTOGRAPHY & LOGOs' />
               <Section />
               <Title
                  title='Open Source Exercices'
                  text='github Repositories'
               />*/}
               <GithubRepo /> 
               {/* <News /> */}
               <Instagram />
            </div>
         </div>
      </div>
   );
}

export default Home;
