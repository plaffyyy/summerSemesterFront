// src/pages/Portfolio.tsx
import React from 'react';
import Back from '../components/Back';

const Portfolio: React.FC = () => {
  return (
    <div>
      <header>
            <h1>My projects and achievements:</h1>
            <h2>Hackathons:</h2>
            <ol>
                <li>Winner of the National Data Analysis Olympiad DANO (Hackathon stage).</li>
                <li>3rd place in 2022 at the international hackathon &quot;IT-Education Hack&quot;, festival: &quot;TechnoStrelka&quot;, Direction: VR/AR (team hackathon).</li>
                <li>3rd place in 2023 at the international hackathon &quot;IT-Education Hack&quot;, festival: &quot;TechnoStrelka&quot;, Direction: AR (team hackathon).</li>
            </ol>    
            <h2>Projects:</h2>   
            <ol> 
                <li>Azimov Lab: microservice for converting json to pdf.</li>
            </ol>
        </header>
        <Back/>
    </div>
  );
};

export default Portfolio;
