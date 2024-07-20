import React, { useEffect, useRef } from 'react';

function SearchInput () {

    const input = useRef();

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement === document.body) {
                e.preventDefault();
                input.current.focus();
            }
        })
    }, []);

    function onFocus () {
        input.current.focus();
    }

    return (
        <div>
            <input ref={input} type="text" placeholder="Type / to search" />
            <button onClick={onFocus}> Focus </button>
        </div>
    );
}



export default SearchInput;