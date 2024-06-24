import Button from "../Button"
import { useState } from "react"

const Chat = () => {

    const [msg, setMsg] = useState<string>("")
    const [msgs, setMsgs] = useState<string[]>([])

    const sendMsg = () => {
        setMsgs([...msgs, msg])
        setMsg("")
    }

   return (
    <div>
      
      <h2>Friends</h2>
      <div>
        { msgs.map((m, index) => {
            return (
                <div className="msg"> 
                    {m}
                </div>
            )
        })}
      </div>
      
      <input 
        type="text" 
        placeholder="Type a Message" 
        value={msg}
        onChange={(e) => {setMsg(e.target.value)}}
        />
     <Button click={sendMsg} text="send"/>

    </div>
  )
}

export default Chat
