import React from 'react'
import CommonRP from './CommonRP'

const LikePostRP = () => {
  return (
    <CommonRP>
    {
        ({count,handleCount}) => (
            <div>
                <button onClick={handleCount}>Like Post Render {count}</button>
            </div>
        )
    }
    </CommonRP>
  )
}

export default LikePostRP;