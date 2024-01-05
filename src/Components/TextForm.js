import React, { useState } from 'react';


export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newtext = text.toUpperCase();
    settext(newtext);

  }
  const handleOnChange = (event)=>{
    settext(event.target.value)

  }
  const handleLoClick = ()=>{
    let newtext = text.toLowerCase();
    settext(newtext);
  }
  const [text, settext] = useState('Enter text here');
  return (
    <>
    <div className='container'>
      <h1>{props.heading} </h1>
    <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="mytext" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className='container my-2'>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length - 1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length - 1} Minutes read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
