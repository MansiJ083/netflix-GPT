import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="mx-2 items-center bg-white text-black font-bold p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
          <span className="material-symbols-outlined">play_arrow</span>
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white font-bold p-4 px-12 text-xl bg-opacity-40 hover:bg-opacity-20 rounded-lg">
          <span className="material-symbols-outlined">info</span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
