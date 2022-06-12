import React from 'react'
import Image from 'next/image';

function Story({img, username}) {
  return (
    <div>
        {/*'"relative" is required; adjust sizes to your liking '*/}
        <img
          src={img}
          alt="fake profile photos"
          className="rounded-full h-14 w-14 relative border-red-500 border-2 p-0.5"
        />
      <p>{username}</p>
    </div>
  );
}

export default Story