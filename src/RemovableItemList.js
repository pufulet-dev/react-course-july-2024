import React, { useState } from 'react';


function RemovableItemList ({ items: initialItems }) {

    const [items, setItems] = useState(initialItems);

    function updateArray (index) {
        let newArr = items.filter((item, i) => (i !== index));
        setItems(newArr);
    }

    return (
        <ul>
            {items.map((item, index) => (
                <li>
                    {item} <button onClick={() => updateArray(index)}> Remove </button>
                </li>
            ))}
        </ul>
    );
}

export default RemovableItemList;