import React, { useEffect, useState } from 'react';
import './stayle.scss';
function GithubRepo() {
   const [repos, setRepos] = useState([]);

   const fetchRepositories = () => {
      const url = 'https://api.github.com/users/ghofranebenhmaid/repos';
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);

            setRepos(data);
         })
         .catch((error) => console.log(error));
   };

   useEffect(() => {
      fetchRepositories();
   }, []);

   const reposName = ['mealinfo', 'WeatherApp', 'TodoList'];
   return (
      <div>
         <div className='repos'>
            {repos.map((data, id) => {
               if (reposName.includes(data.name)) {
                  return (
                     <div key={id} className='wrapper'>
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                        <div className='project-link'>
                           <a
                              className='project-link'
                              href={data.homepage}
                              target='_blank'
                              rel='noopener noreferrer'
                           >
                              See case study
                           </a>
                        </div>
                     </div>
                  );
               }
            })}
         </div>
      </div>
   );
}

export default GithubRepo;
