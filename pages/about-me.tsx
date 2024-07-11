// src/pages/AboutMe.tsx
import React from "react";
import Back from "../components/Back";
import Head from "next/head";

const AboutMe: React.FC = () => {
  return (
    <div>
      <header>
        <Head>
          <title>About me</title>
          <meta
            name="description"
            content="This is page where is store information about me"
          />
        </Head>
        <h1>Info about me:</h1>
        <ol>
          <li>
            I&apos;m student of Innopolis University in the first year of the
            Bachelor&apos;s degree in group DSAI-05.
          </li>
          <li>B2 English technical level.</li>
          <li>
            Stack: Java(Java Spring Boot), Python, C++, HTML, CSS. Databases:
            PostgreSQL.
          </li>
          <li>
            I like to do the folowing sports: basketball, soccer, volleyball,
            tennis, arm wrestling and goint to gym.
          </li>
          <li>Can working with windows and linux at the basic level.</li>
          <li>
            I like to communicate with people and establish relationships.
          </li>
        </ol>
      </header>
      <Back />
    </div>
  );
};

export default AboutMe;
