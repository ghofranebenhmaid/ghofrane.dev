import React from 'react';

import './style.scss';
import { FaGithub, FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
   return (
      <div>
         <motion.div class='footer'>
            <div className='box-footer'>
               <div className='logo wrapper'>
                  <h2>GHOFRANE.</h2>
                  <p>&copy; 2020 Ghofrane Ben Hmaid</p>
               </div>
               <div className='contact wrapper'>
                  <p>ghofranebh@gmail.com</p>
                  <p>+45 60 68 92 69</p>
               </div>
               <div className='adress wrapper'>
                  <p>Danmark Copenhagen</p>
                  <p>Ballerup</p>
               </div>
               <div className='social-icons wrapper'>
                  <p>You can follow me on</p>
                  <ul>
                     <li>
                        <a
                           target='_blank'
                           rel='noopener noreferrer'
                           href='https://www.linkedin.com/in/ghofranebenhmaid/'
                           className='social-icon'
                        >
                           {/* <i class='fa fa-linkedin'></i> */}
                           <FaLinkedin />
                        </a>
                     </li>

                     <li>
                        <a
                           target='blank'
                           rel='noopener noreferrer'
                           href='https://github.com/benhmaid'
                           className='social-icon'
                        >
                           <FaGithub />
                        </a>
                     </li>
                     <li>
                        <a
                           target='_blank'
                           rel='noopener noreferrer'
                           href='https://www.instagram.com/ghofranbenhmaid/'
                           className='social-icon'
                        >
                           <FaInstagram />
                        </a>
                     </li>
                     <li>
                        <a
                           target='_blank'
                           rel='noopener noreferrer'
                           href='https://www.behance.net/Ghofranebh'
                           className='social-icon'
                        >
                           <FaBehance />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </motion.div>
      </div>
   );
}

export default Footer;
