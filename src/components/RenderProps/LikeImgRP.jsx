import React from 'react'
import CommonRP from './CommonRP'

const LikeImgRP = () => {
  return (
    <CommonRP>
    {
        ({count,handleCount}) => (
            <div>
                <button onClick={handleCount}>Like Image Render {count}</button>
            </div>
        )
    }
    </CommonRP>
  )
}

export default LikeImgRP;