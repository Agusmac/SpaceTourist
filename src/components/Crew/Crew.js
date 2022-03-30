import React,{ useEffect } from 'react'

const Crew = ({setBackImg}) => {

  useEffect(() => {
    setBackImg("crew")
  }, [setBackImg])

  return (
    <div>Crew</div>
  )
}

export default Crew