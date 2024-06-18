import React from "react"
import Button from "../Button"

const loginbtn = () => {
  alert("Login btn clicked")
}

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to BookVerse</h1>
      <Button click={loginbtn} text="Login" />
      <h2>A page to connect readers worldwide</h2>
    </div>
  )
}

export default Home
