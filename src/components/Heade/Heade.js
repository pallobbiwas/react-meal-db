import React from "react";
import "./Heade.css";

const Heade = () => {
  return (
    <div>
      <nav className="container bg-dark text-white p-4">
        <div className="log">
          <h1>Meal the BD</h1>
        </div>
        <div className="menu">
          <ul className="flex ">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Heade;
