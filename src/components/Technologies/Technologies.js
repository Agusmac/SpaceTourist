import React,{ useEffect } from 'react'

const Technologies = ({setBackImg}) => {

  useEffect(() => {
    setBackImg("technology")
  }, [])

  return (
    <div>Technologies</div>
  )
}

export default Technologies