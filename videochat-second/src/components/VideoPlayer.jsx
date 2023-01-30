
import React, { useContext } from 'react';

import { SocketContext } from './Contenxt';



const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div className='flex'>
        
      {stream && (
            <div className='p-2 bg-[#5BC0F8]'>
                <span>{name || 'name'}</span>
                <video playsInline muted ref={myVideo} className='w-[30rem] h-[30rem]' autoPlay />
            </div>
    
      )}
      {callAccepted && !callEnded && (
        <div className='p-2 bg-[#5BC0F8]'>
         <span>{name || 'name'}</span>
        <video playsInline ref={userVideo} autoPlay className='w-[30rem] h-[30rem]'/>
        </div>
      
        
      )}
    </div>
    
  );
};

export default VideoPlayer;