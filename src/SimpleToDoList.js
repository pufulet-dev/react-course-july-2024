import React, { useState } from 'react';
import SimpleToDoListElement from './SimpleToDoListElement';

function SimpleToDoList ({ items }) {

    return (
        <ul>
            {items.map(
                (item, index) => <SimpleToDoListElement item={item} key={index}/> )}
        </ul>
    )
}

export default SimpleToDoList;