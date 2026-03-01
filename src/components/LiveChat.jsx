import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

export default function LiveChat() {
    const [liveMessage,setLiveMessage]=useState("")

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {

      const names = ["Sayansh", "Rahul", "Priya", "Ankit", "Neha", "Dev"];
      const messages = [
        "This stream is awesome 🔥",
        "Hello everyone!",
        "React is amazing 😍",
        "I am learning MERN stack",
        "API polling working!",
        "Live chat feels real 🚀"
      ];

      const i = setInterval(() => {

        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        dispatch(addMessage({
          id: Date.now(),
          name: randomName,
          message: randomMessage
        }));

      }, 1005);

      return () => clearInterval(i);

    }, [dispatch]);

    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(addMessage({
            name:"Sayansh",
            message:liveMessage
        }))
        setLiveMessage("")
    }

  return (
    <>
      <div className='w-full h-[600px] ml-2 p-3 bg-white rounded-lg shadow-md overflow-y-scroll flex flex-col-reverse border'>
        <div className="space-y-2">
            {chatMessages.map((chatMessage, index) => (
              <ChatMessage 
                key={index} 
                name={chatMessage.name} 
                message={chatMessage.message}
              />
            ))}
        </div>
      </div>

      <form 
        className="w-full ml-2 mt-2 flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border"
        onSubmit={handleSubmit}
      >
        <input 
          type="text" 
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e)=>setLiveMessage(e.target.value)} 
          value={liveMessage}
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Send
        </button>
      </form>
    </>
  )
}