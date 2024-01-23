import React, { useState } from 'react'

export default function CommonHoc(ChildComp) {
    let Logic = () =>{
        const [count, setCount] = useState(0)

        function handleCount(){
            setCount(count+1)
        }
        return <ChildComp handleCount={handleCount} count={count}/>
    }
  return Logic
}
