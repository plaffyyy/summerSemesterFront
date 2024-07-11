// src/pages/check-image.tsx
import React from "react";
import moment from "moment";
import https from "https";
import { GetServerSideProps } from "next";
import Back from "../components/Back";
import Head from "next/head";

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

interface CheckImageProps {
  comicData: ComicData | null;
  error: string | null;
}

const CheckImage: React.FC<CheckImageProps> = ({ comicData, error }) => {
  if (error) {
    return <div>If you have slow internet connection, please try again</div>;
  }

  if (!comicData) {
    return <div>Loading...</div>;
  }

  const date = new Date(
    Date.UTC(
      Number(comicData.year),
      Number(comicData.month) - 1,
      Number(comicData.day),
    ),
  );
  const fromMoment = moment(date).fromNow();

  return (
    <div>
      <Head>
        <title>Funny comic</title>
        <meta name="description" content="Just a funny comic" />
      </Head>
      <header>
        <h1 id="forImage">{comicData.safe_title}</h1>
        <img id="comicImage" src={comicData.img} alt={comicData.alt} />
        <p id="dateOfImage">{fromMoment.toString()}</p>
      </header>
      <Back />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const idData = await getIdData();
    const comicData = await getComicData(idData);

    return {
      props: {
        comicData,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        comicData: null,
        error: "Failed to fetch comic data",
      },
    };
  }
};

async function getIdData() {
  const url = `https://fwd.innopolis.university/api/hw2?email=k.zimin@innopolis.university`;

  return new Promise<number>((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          const idData = JSON.parse(data);
          resolve(idData);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

async function getComicData(id: number): Promise<ComicData> {
  const url = `https://fwd.innopolis.university/api/comic?id=${id}`;

  return new Promise<ComicData>((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          const comicData = JSON.parse(data);
          resolve(comicData);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

export default CheckImage;
