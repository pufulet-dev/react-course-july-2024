import React, { useState } from 'react';


function EmailInput ({ name, label, style, ...props }) {

    const [inputValue, setInputValue] = useState();
    const [correctEmail, setCorrectEmail] = useState();
    const [borderColor, setBorderColor] = useState("none");
    const [errorMsg, setErrorMsg] = useState("");

    function handleEmail (newEmail) {
        setInputValue(newEmail);
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(newEmail)) {
            setCorrectEmail(true); 
        } else {
            setCorrectEmail(false);
        }
    }

    function handleFocus () {
        setBorderColor("purple");
    }

    function handleBlur () {
        if (correctEmail) {
            setBorderColor("green");
            setErrorMsg("");
        } else {
            setBorderColor("red");
            if (!inputValue) {
                setErrorMsg("Email address is required!");
            } else {
                setErrorMsg("Invalid email address!");
            }
        }
    }

    return (
        <label>
            <p> {label} </p>
            <input 
                type="text"
                name={name}
                value={inputValue}
                onChange={(e) => handleEmail(e.target.value)}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ ...style, borderColor: borderColor, borderWidth: 4, color: borderColor, }}
                {...props} 
            />
            {errorMsg && <p style={{color: "red"}}> {errorMsg} </p> }
        </label>
    );
}


export default EmailInput;