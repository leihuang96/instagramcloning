import React from 'react'

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="photos/userImg.JPG"
        alt=""
      />
      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>Lei</h2>
        <h3 className='text-sm text-gray-400'>Lei Huang</h3>
      </div>
      <button className='text-blue-500 text-sm font-semibold'>Switch</button>
    </div>
  )
}

export default MiniProfile
