import React, { useState } from 'react'

const CommonRP = ({children}) => {
    
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(prev => prev+1)
    }
    return children({count, handleCount})
}

export default CommonRP                                                                                 