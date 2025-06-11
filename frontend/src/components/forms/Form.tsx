import React from 'react'
import Input from '../input/Input'
import Button from '../buttons/Button'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { LoginValidation } from '@/lib/validations'

function Form() {
  const form = useForm<z.infer<typeof LoginValidation>>({});

  return (
    <div>
      <form>
        <Input type='text' placeholder='Enter your email' error='Invalid email'>Email address</Input>
        <Input type='password' placeholder='Enter your password' error="Password doesn't match">Password</Input>
        <Button variant='primary' type='submit'>Login</Button>
      </form>
    </div>
  )
}

export default Form
