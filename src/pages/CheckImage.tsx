// src/pages/CheckImage.tsx
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './lab2.css'

export interface ComicData {
  alt: string;
  day: string;
  img: string;
  link: string;
  month: string;
  news: string;
  num: number;
  safe_title: string;
  title: string;
  transcript: string;
  year: string;
}

const CheckImage: React.FC = () => {
  const [comicData, setComicData] = useState<ComicData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const idData = await getIdData();
        const comicData = await getComicData(idData);
        setComicData(comicData);
      } catch (err) {
        setError('Failed to fetch comic data');
      }
    }

    fetchData();
  }, []);

  async function getIdData() {
    const urlParams = new URLSearchParams({ email: 'k.zimin@innopolis.university' });
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${urlParams}`);
    const idData = await response.json();
    return idData;
  }

  async function getComicData(id: number): Promise<ComicData> {
    const urlParams = new URLSearchParams({ id: id.toString() });
    const response = await fetch(`https://fwd.innopolis.university/api/comic?${urlParams}`);
    const comicData: ComicData = await response.json();
    return comicData;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!comicData) {
    return <div>Loading...</div>;
  }

  const date = new Date(Date.UTC(Number(comicData.year), Number(comicData.month) - 1, Number(comicData.day)));
  const fromMoment = moment(date).fromNow();

  return (
    <div>
      <header>
        <h1 id="forImage">{comicData.safe_title}</h1>
        <img id="comicImage" src={comicData.img} alt={comicData.alt} />
        <p id="dateOfImage">{fromMoment.toString()}</p>
      </header>
    </div>
  );
};

export default CheckImage;
