import TobeRead from "./TobeRead"
import Button from "../Button"
import { useNavigate } from "react-router-dom"

function Profile() {

  const navigate = useNavigate()

  return (
    <div>
      <h1>J Atulya Ramady </h1>
      <TobeRead />
      <Button click={() => {navigate('/')}} text="sign out"/>
    </div>
  )
}

export default Profile
