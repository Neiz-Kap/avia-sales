import React from 'react'

const Button = ({children}) => {
  return (
    <button className="button rounded-md w-full px-5 py-4 color">{children}</button>
  )
}

export default Button