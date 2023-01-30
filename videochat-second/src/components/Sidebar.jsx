import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from './Contenxt';


const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className='py-3'>

    <div className='bg-[#5BC0F8] py-2'>
        
        <form  noValidate autoComplete="off" className='flex justify-between  m-auto'>
            <div className='flex flex-col w-[50%] px-2'>
                <span>Account info</span>
                <input type='text' value={name} className='outline-none bg-[#5BC0F8] border-b border-black ' onChange={(e) => setName(e.target.value)}  />
                <CopyToClipboard text={me}>
                    <span className='bg-[#86E5FF] rounded text-white font-medium cursor-pointer p-1 mt-2'>COPY YOUR ID</span>
                </CopyToClipboard>
            </div>
            <div className='flex flex-col w-[50%] px-2'>
                <span>Make a call</span>
                <input type='text' label="ID to call" className='outline-none bg-[#5BC0F8] border-b border-black ' value={idToCall} onChange={(e) => setIdToCall(e.target.value)}  />

                {callAccepted && !callEnded ? (
                    <button className='bg-[#86E5FF] rounded text-white font-medium cursor-pointer p-1 mt-2' onClick={leaveCall}>
                    Hang Up
                    </button>
                ) : (
                    <button className='bg-[#86E5FF] rounded text-white font-medium cursor-pointer p-1 mt-2' onClick={(e) => callUser({e, idToCall})}>
                    Call
                    </button>
                )}
            </div>
              
        </form>
              
          
    </div>
        <div className='py-2'>
            {children}
        </div>
    </div>
   
  );
};

export default Sidebar;
