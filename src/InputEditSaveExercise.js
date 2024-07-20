import React, { useState, useRef, useEffect } from 'react';


function InputEditSaveExercise () {

    const [inputValue, setInputValue] = useState("type smth here...");
    const [disabled, setDisabled] = useState(true);
    const my_input = useRef();

    // on change of disabled variable, the input should be either focused or unfocused;
    useEffect(() => {
        if (!disabled) {
            my_input.current.focus();
        }
    }, [disabled])

    function editHandler () {
        setDisabled(false); // disabled is false
    }

    function saveHandler () {
        setDisabled(true); // disabled is true
    }

    function inputChangeHandler (e) {
        setInputValue(e.target.value);
    }

    return (
        <>
            <input type="text" value={inputValue} disabled={disabled} ref={my_input} onChange={inputChangeHandler}/>
            {
                disabled 
                ? <button onClick={editHandler}> Edit </button>
                : <button onClick={saveHandler}> Save </button>
            }

        </>
    )
}



export default InputEditSaveExercise;