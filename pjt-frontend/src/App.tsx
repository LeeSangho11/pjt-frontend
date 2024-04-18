import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);
  return (
    <>
      {" "}
      {message.map((v, idx) => (
        <li key={`${idx}-${v}`}>{v}</li>
      ))}
    </>
  );
}

export default App;
