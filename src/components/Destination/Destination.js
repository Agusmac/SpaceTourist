
import React,{ useEffect } from 'react'

const Destination = ({setBackImg}) => {

  useEffect(() => {
    setBackImg("destination")
  }, [setBackImg])
  
  return (
    <div>Destination</div>
  )
}

export default Destination