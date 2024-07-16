import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./index.css";

{/*
function Heading() {

  MY COUNTER:
   const [counter, setCounter] = useState(0);
   return (
      <div style={{fontSize: 48, width: '100%', textAlign: 'center'}}>
        <p> My counter: {counter} </p>  
        <div>
          <button onClick={() => {setCounter(0)}} style={{fontSize: 30}}> Reset </button>
          <button onClick={() => {setCounter(counter => counter - 1)}} style={{fontSize: 30, marginLeft: 20, marginRight: 20}}> - </button>
          <button onClick={() => {setCounter(counter => ++counter)}} style={{fontSize: 30}}> + </button>
        </div>  
      </div>
   );


  MY CHANGE OF BACKGROUND COLOR:   [my version]
  const [styles, setStyles] = useState({backgroundColor: '#eee', height: 200})
  return (
    <div 
      style={styles} 
      onMouseEnter={() => {setStyles({backgroundColor: 'yellow', height: 200})}}
      onMouseLeave={() => {setStyles({backgroundColor: '#eee', height: 200})}}> 
        This is my Jsx element. 
    </div>
  )


  MY CHANGE OF BACKGROUNF COLOR:  [improved version]
  const [backgroundColor, setBackgroundColor] = useState('#eee');
  return (
    <div 
      style={{height: 200, backgroundColor: backgroundColor}}
      onMouseEnter={() => {setBackgroundColor('yellow')}}
      onMouseLeave={() => {setBackgroundColor('#eee')}}>
        My pretty Jsx element
    </div>
  )


  SHOW / HIDE FUNCTIONALITY
    const [btnText, setBtnText] = useState("Show");
    const [displayType, setDisplayType] = useState("none");
    return (
      <div>
        <button onClick={() => {
          setBtnText(btnText => (btnText == "Show" ? "Hide" : "Show")); 
          setDisplayType(displayType => (displayType == "none" ? "block" : "none"))}}> {btnText} </button>
        <p style={{display: displayType}}>This is some text.</p>
      </div>
    )

}
*/}


ReactDOM.createRoot(document.querySelector('#root')).render(
  <App />
);