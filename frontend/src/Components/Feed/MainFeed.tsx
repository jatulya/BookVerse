import Button from "../Button" 
import { useNavigate } from "react-router-dom"

const MainFeed = () => {
    const navigate = useNavigate()

  return (
    <div>
      <h1>Main Feed</h1>
      <Button click={() => {navigate("/chatroom") }} text="send msgs"/>
      <Button click={() => {navigate("/profile") }} text="Profile" />
    </div>
  )
}

export default MainFeed
