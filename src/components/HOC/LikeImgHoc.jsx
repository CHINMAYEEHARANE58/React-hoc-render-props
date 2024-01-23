import React from 'react'
import CommonHoc from './CommonHoc'

const LikeImgHoc = ({handleCount, count}) => {
  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  )
}

export default CommonHoc(LikeImgHoc)