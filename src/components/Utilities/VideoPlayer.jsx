// "use client"
// import autoprefixer from 'autoprefixer'
// import React from 'react'
// import YouTube from 'react-youtube'

// const VideoPlayer = ({ youtubeId }) => {
//   const option = {
//     height: '390',
//     width: '640',
//   }
//   return (
//     <div className="">
//         <YouTube 
//         videoId={youtubeId} 
//         onReady={(event) => event.target.pauseVideo()} 
//         opts={option}
//         />
//     </div>
//   )
// }

// export default VideoPlayer

"use client"
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ youtubeId }) => {
  const options = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className="relative w-4/5 xl:h-[720px] lg:h-[520px] md:h-[360px] sm:h-[240px] aspect-w-16 aspect-h-9 p-2">
      <YouTube
        videoId={youtubeId}
        containerClassName="absolute top-0 left-0 w-full h-full"
        className="w-full h-full"
        onReady={(event) => event.target.pauseVideo()}
        opts={options}
      />
    </div>
  );
};

export default VideoPlayer;
