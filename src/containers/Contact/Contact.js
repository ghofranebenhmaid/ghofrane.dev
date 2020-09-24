import React from 'react';
import Title from '../../components/Title';
import './Contact.scss';

const Contact = () => {
   return (
      <div className='contact-container'>
         <span className='background'>Contact.</span>
         <div className='contact'>
            <h1>Contact</h1>

            <p>
               Are you looking for a fast-performing and user-friendly website
               to represent your product or business? or looking for any kind of
               consultation? or want to ask questions? or have some advice for
               me or just want to say "Hi 👋 in any case feel free to Let me
               know. I will do my best to respond back.😊
            </p>

            <h1>Email</h1>
            <p>
               <a href='mailto:ghofranebh90@gmail.com'>
                  ghofranebh90@gmail.com
               </a>
            </p>

            <h1>Tlf</h1>

            <p>+45 60 68 92 69</p>
         </div>
      </div>
   );
};

export default Contact;
