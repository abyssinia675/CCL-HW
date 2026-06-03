import { useState } from 'react'

    

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (liked) {
      setLiked(false);
      setCount(count - 1);
    } else {
      setLiked(true);
      setCount(count + 1);
    }
   
  }
   return (
      <div>
        <p>{count} likes</p>
        <button onClick={handleClick}>
          {liked ? "unlike":"like"}
        </button>
      </div>

    )
  }