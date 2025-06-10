import React from 'react'
import Input from '../input/Input'

function Form() {

  return (
    <div>
      <form>
        <Input type='text' placeholder='Enter your email' error='Invalid email'>Email address</Input>
        <Input type='password' placeholder='Enter your password' error="Password doesn't match">Password</Input>
      </form>
    </div>
  )
}

export default Form
