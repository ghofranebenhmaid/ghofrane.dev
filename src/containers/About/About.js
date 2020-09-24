import React from 'react';
import './About.scss';

import Timeline from '../../components/Timeline/Timeline';

import ProfileDescription from '../../components/ProfileDescription';

function About() {
   return (
      <div>
         <div className='about'>
            <div className='container'>
               <span className='background'>About Me.</span>
               <div className='wrapper'>
                  <ProfileDescription />
                  <div className='skils'>
                     <div className='skils-section'>
                        <h3>Desing</h3>
                        <h2>
                           Art direction<p>&#8725;</p>Web & mobile
                           <p>&#8725;</p>Brand identity<p>&#8725;</p>UX & UI
                           <p>&#8725;</p>
                           Iconography<p>&#8725;</p> Animation<p>&#8725;</p>
                           Photography
                        </h2>
                     </div>
                     <div className='skils-section'>
                        <h3>Technologies</h3>
                        <h2>
                           React <p> &#8725; </p> Javascript <p>&#8725;</p>
                           Node.js
                           <p> &#8725; </p> Express
                           <p>&#8725;</p> Wordpress <p>&#8725;</p>
                           PHP <p> &#8725; </p> Html5 <p>&#8725;</p>
                           CSS3 <p> &#8725; </p> Sass
                        </h2>
                     </div>
                  </div>
                  <div className='timeline'>
                     <Timeline />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
