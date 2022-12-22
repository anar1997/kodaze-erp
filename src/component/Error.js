import React from 'react'

const Error = ({message}) => {
  return (
    <div style={{padding: 15, fontSize: 16, backgroundColor: "red"}}>{message}</div>
  )
}

export default Error