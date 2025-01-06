import React from 'react';
import video from "./assets/video.mp4"
const Preloader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black ">
      <video 
        className="w-full h-full "
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Preloader;