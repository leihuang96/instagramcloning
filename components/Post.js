import {addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import {
  BsThreeDots,
  BsSuitHeart,
  BsSuitHeartFill,
  BsBookmark,
  BsBookmarkFill,
  BsChat,
} from 'react-icons/bs'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { TbMoodSmile } from 'react-icons/tb'

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className="bg-white my-7 border rounded-sm">

      {/* header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <BsThreeDots className="h-5" />
      </div>

      {/* img */}
      <img src={img} className="object-cover w-full" alt="" />

      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <BsSuitHeart className="btn" />
          <BsChat className="btn " />
          <IoPaperPlaneOutline className="btn" />
        </div>
        <BsBookmark className="btn" />
      </div>

      {/* caption */}
      <div className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>

      {/* comments */}
      
      {/* input box */}
      <form className="flex items-center p-4 border-t">
        <TbMoodSmile className="h-7 w-7" />
        <input
          placeholder="Add a comment..."
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-sky-500">Post</button>
      </form>
    </div>
  )
}

export default Post
