import React, { useContext } from 'react';

import { SocketContext } from './Contenxt';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className='bg-[#5BC0F8] py-2 flex justify-center' >
          <div className='flex items-center'>
            <h1>{call.name} is calling:</h1>
            <button variant="contained" className='bg-white p-1 rounded-md ml-2' color="primary" onClick={answerCall}>
                Answer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;