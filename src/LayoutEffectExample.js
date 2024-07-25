import React, { useState, useRef, useLayoutEffect } from 'react';
import './LayoutEffectExample.css';


function LayoutEffectExample () {

    const [show, setShow] = useState(true);
    const divRef = useRef();

    useLayoutEffect(() => {
        if (show) {
            const divHeight = divRef.current.offsetHeight;
            divRef.current.style.height = "0px";
            setTimeout(() => {
                divRef.current.style.height = `${divHeight}px`;
            })
        }
    })

    return (
        <>
            <button onClick={() => {setShow(!show)}}> Show div </button>
            { show && <div className="box" ref={divRef} > This is a div </div> }
        </>
    );
}


export default LayoutEffectExample;