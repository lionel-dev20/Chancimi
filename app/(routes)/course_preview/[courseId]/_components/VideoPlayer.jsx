import React from 'react'

function VideoPlayer({videoUrl, poster}) {
  return (
    <div>
      <video controls autoplay width={1000} height={250} key={videoUrl} poster={poster}  className='rounded-[4px]'>
        <source src={videoUrl} type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoPlayer 