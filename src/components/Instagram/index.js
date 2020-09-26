import React, { useEffect, useState } from 'react';
import './style.scss';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Instagram = () => {
   const [istagram, setIstagram] = useState([]);

   useEffect(() => {
      const api = `https://v1.nocodeapi.com/Ghofrane/instagram/OlqygkGiHPCptFkl/`;
      fetch(api)
         .then((res) => res.json())
         .then((items) => {
            console.log(items);
            setIstagram(items.data);

            console.log(items.data[3]);
         });
   }, []);

   return (
      <div className='instagram-container'>
         {istagram.slice(4, 7).map((data, id) => (
            <div key={id} className='container'>
               <a href={data.permalink} target='blank'>
                  <div className='box-image'>
                     <img src={data.media_url} alt={data.id} />
                     <motion.div
                        whileHover={{
                           opacity: 1,
                        }}
                        className='box-text'
                     >
                        <FaInstagram />
                        <p>{data.caption}</p>
                     </motion.div>
                  </div>
               </a>
            </div>
         ))}
      </div>
   );
};

export default Instagram;
