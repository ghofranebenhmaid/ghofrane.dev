import React from 'react';
import './Prortfolio.scss';
import Logo from '../../components/Logos';

const Prortfolio = () => {
   return (
      <div>
         <div className='work'>
            <div className='container'>
               <span className='background'>Coding</span>

               <div className='wrapper'>
                  <Logo />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Prortfolio;
