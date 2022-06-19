import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export const Homepage = () => {
  return (
    <div className="intro">
      <h1>Type the alphabet</h1>
      <p>Typing game to see how fast you type. Timer stars when you do :)</p>
      <h3>Some rules to follow</h3>
      <ul className="rules">
        <li>Enter the correct alphabet shown in the box.</li>
        <li>For wrong alphabet 0.5 second will be added to total time.</li>
        <li>Refresh the page to play again.</li>
      </ul>
      <p className="greet-msg">Good luck :)</p>
      <Link to="/landing" className="cta-button">
        Start The Game
      </Link>
    </div>
  );
};
