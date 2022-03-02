import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import Profile from "../Profile";
import Home from "../Home";
import { ThemeContext } from "../../utils/ThemeContext";
import '../Router/Router.css';

export const Router = () => {
  const [bgColor, setBgColor] = useState("white");
  const changeColor = () => {
    setBgColor((prevColor) => (prevColor === "white" ? "gray" : "white"));
  };

  return (
    <ThemeContext.Provider value={{ theme: bgColor, changeTheme: changeColor }}>
      <BrowserRouter>
        <ul>
          <li style={{ backgroundColor: bgColor }}>
            <Link className="header" to="/home">HOME</Link>
          </li>
          <li style={{ backgroundColor: bgColor }}>
            <Link className="header" to="/profile">PROFILE</Link>
          </li>
        </ul>
          <Route
            path="/profile"
            render={(data) => (
              <Profile match={data.match} history={data.history} />
            )}
          ></Route>
          <Route path="/home/:chatId?">
            <Home />
          </Route>
          <Route path="/nochat">
            <div> No such chat</div>
            <Link to="/home">HOME</Link>
          </Route>
          <Route path="/" exact>
            <h2>WELCOME</h2>
          </Route>
          <Route path="*">
            <h2>404</h2>
          </Route>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};