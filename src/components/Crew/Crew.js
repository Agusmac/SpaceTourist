import React,{ useEffect } from 'react'

const Crew = ({setBackImg}) => {

  useEffect(() => {
    setBackImg("crew")
  }, [])

  return (
    <div>Crew</div>
  )
}

export default Crew