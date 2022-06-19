import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { getLastAlphabet } from "../../Utils/getLastAlphabet";
import { getRandomAlphabet } from "../../Utils/getRandomAlphabet";
import "./Landingpage.css";

export const Landingpage = () => {
  const limit = 5;
  const msgLength = useRef(0);
  const timerId = useRef(null);
  const [alphabet, setAlphabet] = useState(getRandomAlphabet());
  const [error, setError] = useState("");
  const [time, setTime] = useState(10);
  const highScore = JSON.parse(localStorage.getItem("time")) || "";

  let seconds = Math.floor((time / 1000) % 60);
  let milliSeconds = ("0" + ((time / 10) % 100)).slice(-2);

  let bestTimeSeconds = Math.floor((highScore / 1000) % 60);
  let bestTimeMilliSeconds = ("0" + ((highScore / 10) % 100)).slice(-2);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  const checkForCorrectAlphabet = (lastAlphabet, randomAlphabet) => {
    if (lastAlphabet === alphabet) {
      setAlphabet(randomAlphabet);
      setError("");
    } else {
      setTime((prevTime) => prevTime + 500);
      setError("Enter valid alphabets");
    }
  };

  const setHighScore = (msgLength) => {
    if (msgLength === limit) {
      if (highScore !== "") {
        if (highScore > time) {
          setAlphabet("Success");
          localStorage.setItem("time", time);
        } else {
          setAlphabet("Failure");
        }
      } else {
        localStorage.setItem("time", time);
      }
      setError("");
      clearInterval(timerId.current);
    }
  };

  const enterAlphabets = (e) => {
    const randomAlphabet = getRandomAlphabet();
    msgLength.current = e.target.value.length;
    const lastAlphabet = getLastAlphabet(e);
    checkForCorrectAlphabet(lastAlphabet, randomAlphabet);
    setHighScore(msgLength.current);
  };

  return (
    <div className="main-div">
      <div className={`err-div ${error ? "visible" : "hidden"}`}>
        {error ? <p>{error}</p> : <p>Error will show here</p>}
      </div>
      {msgLength.current <   limit ? (
        <input
          autoFocus={true}
          onChange={(e) => enterAlphabets(e)}
          type="text"
          className="input"
          placeholder="Type... "
        />
      ) : (
        ""
      )}
      <div className="alphabet-container">
        <p style={{ color: `${alphabet === "Failure" ? "red" : ""}` }}>
          {alphabet}
        </p>
      </div>
      <div className="timer">
        <span>Time: {seconds} : </span>
        <span>{milliSeconds}s</span>
      </div>
      {highScore !== "" ? (
        <div className="best-time">
          <span>My best time: {bestTimeSeconds} :</span>
          <span> {bestTimeMilliSeconds}s</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
