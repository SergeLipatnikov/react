import React, { useState, useEffect, useRef } from "react";
import "./Styles/App.css";
import { Message } from "./Components/Message";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./Components/MessageList";
import { FormMui } from "./Components/FormMui";


const chats = [
  { name: "Chat1", id: "1" },
  { name: "Chat2", id: "2" },
];

function App() {

  const [messageList, setMessageList] = useState([]);
  const messagesEnd = useRef();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMsg = {
      text,
      author,
      id: `msg-${Date.now()}`,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage("still here", AUTHORS.BOT);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [messageList]);

  useEffect(() => {
    console.log(messagesEnd);
  }, []);


  return (
    <div className="">
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>{chat.name}</li>
        ))}
      </ul>
      <div className="App-content">
        <MessageList messages={messageList} />
        <div ref={messagesEnd} />
      </div>
      <FormMui onSubmit={handleAddMessage} />
    </div>
  );
}

export default App;
