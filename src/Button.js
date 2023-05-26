import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

const ButtonComponent = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setCounter(counter + 1)
          }, 3000)
         return () => {
           clearTimeout(timeoutId)
         }
    }, [counter])

    return (
        <Button variant="contained"  onClick={() => setCounter(counter + 1)}>{counter}</Button>
    )
}

export default ButtonComponent