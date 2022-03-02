import React, { useState, useCallback, useMemo, useEffect } from "react";

export const Component = (props) => {
  console.log("----------, component is rendering");
  const [messageList, setMessageList] = useState([]);
  const [messageText, setMessageText] = useState([]);
  const [count, setCount] = useState(1);
  const [names, setNames] = useState([
    { first: "Me" },
    { first: "Sergey" },
    { first: "Dmitry" },
  ]);

  useEffect(() => {
    console.log("did mount");
  }, []);

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== 'Robot'){

      const robotMess = { author: 'Robot', text: 'hello'};
      setMessageList([...messageList, robotMess]);
    }
  }, [messageList]);

  const handleClick = useCallback(() => {
    const newMessage = {author: "Mike", text: 'Hi'};

    setMessageList([...messageList, newMessage]);
  }, [messageList]);

  return (
    <>
      <span>Hello there, {count}</span>
      <button onClick={handleClick}>ADD NAME</button>
      {messageList.map((mess) => (
        <div>{mess.author}</div>
      ))}
    </>
  );
};

const Header = <header>MyHeader</header>

export class Counter extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      count: 1,
      number: 10,
      name: "Me",
    };
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }

  componentWillUnmount() {
  }

  updateCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        {Header}
        <span>Hello there, {this.state.count}</span>
        <button onClick={this.updateCount}>INCREASE</button>
        <div>
          Hello there, {this.state.name} {this.state.number}
        </div>
      </div>
    );
  }
}