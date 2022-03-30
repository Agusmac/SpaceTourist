
import React,{ useEffect } from 'react'

const Destination = ({setBackImg}) => {

  useEffect(() => {
    setBackImg("destination")
  }, [])
  
  return (
    <div>Destination</div>
  )
}

export default Destination