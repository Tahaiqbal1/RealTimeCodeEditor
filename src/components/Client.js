import React from 'react'
import Avatar from 'react-avatar'

const Client = ({userName}) => {
  console.log('clientName')

  return (
    <div>
        
        <Avatar name={userName} size="40" round=' 18px' />
        <span>
          
        </span>
    </div>
  )
}

export default Client