import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../../utils/constants';
import { useInput } from '../../utils/useInput';
import "../Form/Form.css"

export const Form = ({ onSendMessage }) => {
  const inputRef = useRef();

  const { value, handleChange, reset } = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onSendMessage({
      id: Date.now(),
      text: value,
    });
    reset();
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input className="input" ref={inputRef} type="text" value={value} onChange={handleChange} />
      <input className="button" type="submit" />
    </form>
  )
}