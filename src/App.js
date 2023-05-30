import React from "react";
import "./index.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
// import Form5 from "./Form5";

export default function App() {
  return (
    <div className="App">
      <h1 style={{marginLeft:"10%", color:"blue"}}>Codebuddy Assingment for Sohan Yeole</h1>
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      {/* <Form5 /> */}
    </div>
  );
}
