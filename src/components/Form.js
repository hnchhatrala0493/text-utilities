import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleCopyClick = () => {
    setText();
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };
  const [text, setText] = useState(" ");
  return (
    <div className="container">
      <h3>{props.heading}</h3>
      <div className="col-11">
        <textarea
          id="myBox"
          className="form-control"
          rows={5}
          onChange={handleOnChange}
          value={text}
          placeholder="Enter a text something"
        ></textarea>
        <button className="ml-3 mt-3 btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="mx-1 mt-3 btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="mt-3 btn btn-primary" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="mx-1 mt-3 btn btn-primary" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="mx-1 mt-3 btn btn-primary" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
    </div>
  );
}
