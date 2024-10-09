"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [animeId, setAnimeId] = useState<string>("");
  const [episode, setEpisode] = useState<string>("");
  const [skip, setSkip] = useState<string>("0");

  const animeUrl: string = "https://vidsrc.icu/embed/anime";

  const getEmbedUrl = () => {
    // Check if animeId and episode are both non-empty strings
    if (animeId.trim() !== "" && episode.trim() !== "") {
      return `${animeUrl}/${animeId}/${episode}/${skip}`;
    }
    return ""; // Return an empty string if conditions are not met
  };

  const onInputChange = (field: string, eventValue: any) => {
    if (field === "animeId") {
      setAnimeId(eventValue);
    } else if (field === "episode") {
      setEpisode(eventValue);
    } else if (field === "skip") {
      setSkip(eventValue);
    }

    // You can remove the console.log here or keep it for debugging
    console.log(animeId, episode);
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-[#0a0a0a]">
        <h1 className="font-[Poppins] text-3xl text-white">
          edu<span className="text-pink-500">anime</span>
        </h1>
        <h1 className="font-[Poppins] text-md text-gray-500">
          anime with extra steps
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
          {/* Uncomment this input for skip if needed */}
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
          {getEmbedUrl() ? ( // Only show iframe if getEmbedUrl returns a non-empty string
            <iframe
              src={getEmbedUrl()}
              allowFullScreen
              className="w-full h-full"
              scrolling="no"
            ></iframe>
          ) : (
            <div className="flex flex-col">
              <p className="text-white font-bold">
                Step 1:{" "}
                <span className="font-normal">
                  Open{" "}
                  <Link
                    href="https://anilist.co/search/anime"
                    className="underline text-pink-500"
                    target="_blank"
                  >
                    anilist.co
                  </Link>
                </span>
              </p>

              <p className="text-white font-bold">
                Step 2:{" "}
                <span className="font-normal">Search for any anime. </span>
              </p>

              <p className="text-white font-bold">
                Step 3:{" "}
                <span className="font-normal">
                  Paste the ID of the anime from the URL in the Anime ID box.{" "}
                </span>
              </p>

              <p className="text-white font-bold">
                Step 4:{" "}
                <span className="font-normal">Enter the episode number. </span>
              </p>

              <p className="text-white font-bold">
                Step 5:{" "}
                <span className="font-normal">Enjoy pirated anime. </span>
              </p>

              <p className="text-pink-500 mt-5 font-bold">
                For Example:{" "}
                <span className="font-normal text-white">
                  {" "}
                  Try Anime ID: 19, Episode: 1 (One of my favorites){" "}
                </span>
              </p>
              <p className="text-pink-500 font-bold">
                For Example:{" "}
                <span className="font-normal text-white">
                  {" "}
                  Try Anime ID: 21, Episode: 1071 (Also one my favorites){" "}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
