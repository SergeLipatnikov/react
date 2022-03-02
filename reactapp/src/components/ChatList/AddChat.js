import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addChat } from "../../store/chats/actions";
import { useInput } from "../../utils/useInput";
import "../ChatList/ChatList.css"

export const AddChat = () => {
  const dispatch = useDispatch();

  const { value, handleChange, reset } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      return;
    }

    const newId = `chat-${Date.now()}`;
    dispatch(addChat(newId, value));
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input class="input" onChange={handleChange} value={value} />
    </form>
  );
};