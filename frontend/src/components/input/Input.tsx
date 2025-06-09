import { InputProps } from '@/interfaces/propsTypes'
import React from 'react'

function Input(props : InputProps) {
  return (
    <div>
      <label>{props.children}</label>
      <input 
        type={props.type}
        placeholder={props.placeholder}
        value={props.value} 
        />
    </div>
  )
}

export default Input
