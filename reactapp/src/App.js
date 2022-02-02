import './Styles/App.css';
import { Message } from './Components/Message';
import { Form } from './Components/Form';
import { useEffect, useState } from "react/cjs/react.development";
import { AUTHORS } from './utils/constants';




function App() {

  const [messageList, setMessageList] = useState ([]);

  const handleAddMessage = (text) => {
    const newMsg = {
      text,
      author: AUTHORS.hum,
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
  };

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.hum) {
      timeout = setTimeout(() => {
        const newMsg = {
          text: "Hello, human",
          author: AUTHORS.bot,
        };
        setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [messageList]);

  return (
    <div className="App-form" >
      <div className="App-content">
        {messageList.map((message) => (
          <Message text={message.text} author={message.author} />
        ))}
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
}

export default App;
