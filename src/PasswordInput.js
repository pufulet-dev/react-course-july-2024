import React, { useState } from 'react';
import "./PasswordInput.css";
import InteractivePasswordStrength from './InteractivePasswordStrength';


function PasswordInput ({ interactive, value, placeholder }) {

    const [inputType, setInputType] = useState("password");  // default
    const [buttonMsg, setButtonMsg] = useState("Show");  // default
    const [inputValue, setInputValue] = useState(value);


    function onClick () {
        if (buttonMsg === "Show") {
            setButtonMsg("Hide");
            setInputType("text");
        } else {
            setButtonMsg("Show");
            setInputType("password");
        }
    }

    return (
        <div>
            <div className="title">
                <h4> Welcome to your Password Input </h4>
                { interactive && <p> (interactive) </p>  }
            </div>
            <div className="input-section">
                <input 
                    type={inputType} 
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={onClick} className="input-section__btn"> 
                    {buttonMsg} 
                </button>
                {interactive && <InteractivePasswordStrength password={inputValue} />}
            </div>
        </div>
    );
}


export default PasswordInput;