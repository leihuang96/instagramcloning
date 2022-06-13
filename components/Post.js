import React from 'react'
import {
  BsThreeDots,
  BsSuitHeart,
  BsSuitHeartFill,
  BsBookmark,
  BsBookmarkFill,
} from 'react-icons/bs';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoPaperPlaneOutline } from 'react-icons/io5';


function Post({id, username, userImg, img, caption}) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
        {/* header */}
        <div className='flex items-center p-5'>
            <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-3" alt=''/>
            <p className='flex-1 font-bold'>{username}</p>
            <BsThreeDots className='h-5'/>
        </div>  
        {/* img */}
        <img src={img} className="object-cover w-full " alt=''/>
        {/* buttons */}
        {/* caption */}
        {/* comments */}
        {/* input box */}
    </div>
  )
}

export default Post;