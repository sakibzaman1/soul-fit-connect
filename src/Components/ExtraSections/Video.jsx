import React from "react";
import bannerVideo from '../../assets/Videos/bannerVideo.mp4'

const Video = () => {
  return (
    <div>
      <video className="w-full h-auto max-w-full"  autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
