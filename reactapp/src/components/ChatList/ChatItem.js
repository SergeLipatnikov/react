import React from 'react';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "../ChatList/ChatList.css"

export const ChatItem = ({ id, name, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  }
  return (
    <ListItem>
      <Link className="chat" to={`/home/${id}`}>{name}</Link>
      <div onClick={handleDelete}>&#10006;</div>
    </ListItem>
  );
}