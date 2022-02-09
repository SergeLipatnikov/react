import { Switch } from "@mui/material";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import App from "../../App";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";

const Home = () => <h2>Home page</h2>;

export const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
        >
          home
        </NavLink>
      </div>
      <div>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "green" : "grey" })}
          to="/chats"
        >
          chats
        </NavLink>
      </div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chats" element={<ChatList />}>
            <Route path=":chatId" element={<Chat />} />
        </Route>
        <Route element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};