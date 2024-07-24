import React, { useState, useEffect } from 'react';
import "./InteractivePasswordStrength.css";
import { MdOutlineHorizontalRule } from "react-icons/md";


function InteractivePasswordStrength ({ password }) {

    const [strength, setStrength] = useState(0);
    const [iconColor, setIconColor] = useState("grey");
    const [msg, setMsg] = useState("-");

    const colors = ["grey", "red", "orange", "greenyellow", "green", "purple"];
    const messages = ["-", "Weak", "Average", "Good", "Very Good", "Ultimate"];

    // render this everytime password is changed
    useEffect(() => {
        let lower = false, upper = false, chr = false, digit = false, len = false;
        for (const letter of password) {
            if (letter >= '0' && letter <= '9') digit = true;
            else if (letter >= 'a' && letter <= 'z') lower = true;
            else if (letter >= 'A' && letter <= 'Z') upper = true;
            else chr = true;
        }
        if (password.length >= 13) len = true;
        let newStrength = 0;
        if (lower) newStrength++;
        if (upper) newStrength++;
        if (digit) newStrength++;
        if (chr) newStrength++;
        if (len) newStrength++;

        // update the states
        setStrength(newStrength);
        setIconColor(colors[newStrength]);
        setMsg(messages[newStrength]);
        
    }, [password])

    return (
        <div className="strength-wrapper">
            { new Array(5).fill(0).map((el, index) => (
                <MdOutlineHorizontalRule 
                    style={{ color: index < strength ? iconColor : "grey", height: 25, width: "auto", }}
                /> 
            ))}
            <span className="message"> { msg } </span>
        </div>
    );
}



export default InteractivePasswordStrength;