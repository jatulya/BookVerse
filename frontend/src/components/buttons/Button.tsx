import { ButtonProps } from '@/interfaces/propsTypes'
import React from 'react'
import './button.css'
function Button({children, variant}: ButtonProps) {
  return (
    <div>
      <button type='button' className={`button-${variant}` }>
        {children}
      </button>
    </div>
  )
}

export default Button
