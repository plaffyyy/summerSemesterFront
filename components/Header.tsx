import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <div className="foto">
        <img className="fo" src="/summerSemesterFront/img/myFoto.jpg" alt="myfoto" />
      </div>
      <div className="icons">
        <a href="https://t.me/plaffyyy">
          <img src="/summerSemesterFront/img/icons8-телеграмма-app-48.png" alt="Telegram" />
        </a>
        <a href="https://leetcode.com/u/Plaffyyy/">
          <img src="/summerSemesterFront/img/icons8-level-up-your-coding-skills-and-quickly-land-a-job-48.png" alt="LeetCode" />
        </a>
        <a href="https://instagram.com/plaffyyy">
          <img src="/summerSemesterFront/img/icons8-instagram-48.png" alt="Instagram" />
        </a>
        <a href="https://github.com/plaffyyy">
          <img src="/summerSemesterFront/img/icons8-github-48.png" alt="GitHub" />
        </a>
      </div>
      <nav>
        <form >
          <Link href="/about-me">
            <button className="abMeButton">About Me</button>
          </Link>
        </form>
        <form >
          <Link href="/portfolio">
            <button className="portButton">Portfolio</button>
          </Link>
        </form>
        <form >
          <Link href="/check-image">
            <button className="APIbutton">Check Image</button>
          </Link>
        </form>
      </nav>
    </header>
  );
};

export default Header;