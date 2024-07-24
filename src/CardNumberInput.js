import React, { useState } from 'react';


function CardNumberInput (props) {

    const [cardInfo, setCardInfo] = useState("");

    function handleCardInfo (val) {

        // METHOD 1: (MINE)

        let len = val.length;
        let chr = val[len - 1]; // last character added to the input
        if (chr >= '0' && chr <= '9' && len <= 19) {
            // add the digit
            // but see first check first if you add a space first
            let newInfo = cardInfo;
            let lenNewInfo = cardInfo.length;
            if (lenNewInfo == 4 || lenNewInfo == 9 || lenNewInfo == 14) {
                newInfo += " ";
            }
            newInfo += chr;
            setCardInfo(newInfo);
        }


        // METHOD 2: (IMPROVED)
        // let sanitizedValue = val
        //  .replace(/[^\d]/g, '')   // replace non-digits with '', i.e. remove them
        //  .slice(0, 16)  // slice only the first 16 characters of the string
        //  .replace(/(\d{4})/g, '$1 ')  // add after each 4 digits an empty space
        //  .trim(); // delete the empty space at the end of the whole string
        // setCardInfo(sanitizedValue);

    }

    return (
        <input 
            type="text" 
            value={cardInfo} 
            onChange={(e) => {handleCardInfo(e.target.value)}}
            {...props} />
    );
}

export default CardNumberInput;