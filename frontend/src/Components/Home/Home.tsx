import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "../Button"

const Home: React.FC = () => {
  const nav = useNavigate()
  const loginbtn = () => {
    nav('/feed')
  }
  
  return (
    <div className="home">
      <h1>Welcome to BookVerse</h1>
      <Button click={loginbtn} text="Login" />
      <h2>A page to connect readers worldwide</h2>
    </div>
  )
}

export default Home
