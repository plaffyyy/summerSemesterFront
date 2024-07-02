// src/pages/Portfolio.tsx
import React from 'react';

const Portfolio: React.FC = () => {
  return (
    <div>
      <header>
            <h1>My projects and achievements:</h1>
            <h2>Hackathons:</h2>
            <ol>
                <li>Winner of the National Data Analysis Olympiad DANO (Hackathon stage).</li>
                <li>3rd place in 2022 at the international hackathon "IT-Education Hack", festival: "TechnoStrelka", Direction: VR/AR (team hackathon).</li>
                <li>3rd place in 2023 at the international hackathon "IT-Education Hack", festival: "TechnoStrelka", Direction: AR (team hackathon).</li>
            </ol>    
            <h2>Projects:</h2>   
            <ol> 
                <li>Azimov Lab: microservice for converting json to pdf.</li>
            </ol>
        </header>
    </div>
  );
};

export default Portfolio;
