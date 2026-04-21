import React from "react";

const video = () => {
  return (
    <video
      className="h-full w-full object-cover pointer-events-none"
      autoPlay
      loop
      muted
      src="/videos/video.mp4"
    ></video>
  );
};

export default video;
