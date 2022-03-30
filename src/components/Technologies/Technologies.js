import React,{ useEffect } from 'react'

const Technologies = ({setBackImg}) => {

  useEffect(() => {
    setBackImg("technology")
  }, [setBackImg])

  return (
    <div>Technologies</div>
  )
}

export default Technologies