"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [videoData, setVideoData] = useState();
  const [animeId, setAnimeId] = useState<string>("21");
  const [episode, setEpisode] = useState<string>("1");
  const [skip, setSkip] = useState<string>("0");

  const animeUrl: string = "https://vidsrc.icu/embed/anime";

  const getEmbedUrl = () => {
    if (animeId && episode !== null) {
      return `${animeUrl}/${animeId}/${episode}/${skip}`;
    }
    return "";
  };

  const onInputChange = (field: string, eventValue: any) => {
    if (field === "animeId") {
      setAnimeId(eventValue);
    } else if (field === "episode") {
      setEpisode(eventValue);
    } else if (field === "skip") {
      setSkip(eventValue);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#0a0a0a]">
        <h1 className="font-[Poppins] text-3xl text-white">
          edu<span className="text-pink-500">anime</span>
        </h1>
        <h1 className="font-[Poppins] text-md text-gray-500">
          by edu the retar
        </h1>
        <div className="flex gap-0 w-full px-[2rem] md:w-1/2 justify-center items-center mt-10">
          <input
            type="number"
            value={animeId}
            placeholder="Anime ID"
            onChange={(e) => onInputChange("animeId", e.target.value)}
            className="bg-transparent w-1/2 md:w-1/5 h-[3rem] text-2xl border-white border rounded-tl-xl rounded-bl-xl outline-white outline-2 text-white text-center font-[Poppins]"
          />
          <input
            type="number"
            value={episode}
            placeholder="Episode"
            onChange={(e) => onInputChange("episode", e.target.value)}
            className="bg-transparent w-1/2 md:w-1/5 h-[3rem] text-2xl border-white border-t border-b border-r rounded-tr-xl rounded-br-xl outline-white text-white text-center font-[Poppins]"
          />
          {/* <input
            type="number"
            value={skip}
            placeholder="Skip"
            min={0}
            max={1}
            onChange={(e) => onInputChange("skip", e.target.value)}
            className="bg-transparent w-1/5 h-[3rem] text-2xl border-white border rounded-tr-xl rounded-br-xl outline-white text-white text-center font-[Poppins]"
          /> */}
        </div>
        <div className="bg-transparent rounded-xl w-full h-[20rem] xl:w-1/2 md:h-[60%] mt-10 font-[Poppins] flex justify-center text-2xl ">
          {animeId && episode !== null ? (
            <iframe
              src={getEmbedUrl()}
              allowFullScreen
              className="w-full h-full"
              scrolling="no"
            ></iframe>
          ) : (
            <p className="text-white">
              Enter Anime ID, Episode, and Skip to load video
            </p>
          )}
        </div>
      </div>
    </>
  );
}
