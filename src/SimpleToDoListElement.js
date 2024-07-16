import React, { useState } from 'react';

function SimpleToDoListElement ({ item }) {

    const [isDone, setIsDone] = useState(false);

    function enableDone () {
        setIsDone(true);
    }

    return (
        <li>
            {isDone ? <s> {item} </s> : item} 
            {!isDone && <button onClick={enableDone}> Done </button>}
        </li>
    );
}

export default SimpleToDoListElement;