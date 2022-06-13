import React from 'react'
import Image from 'next/image';

function Story({img, username}) {
  return (
    <div>
      <img
        src={img}
        alt="fake profile photos"
        className="rounded-full h-14 w-14 border-red-500 border-2 p-0.5 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" 
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story