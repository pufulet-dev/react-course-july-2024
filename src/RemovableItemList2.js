import React, { useState } from 'react';


function RemovableItemList2 ({ items: initialItems }) {

    let initItems = initialItems.map((item) => ({text: item, removed: 0}));

    const [items, setItems] = useState(initItems);

    function updateArray (index) {
        let newArr = items.map((item, i) => {
            if (i !== index) return {...item}
            else return {...item, removed: 1}
        });
        setItems(newArr);
    }

    return (
        <ul>
            {items.map((item, index) => (
                !item.removed &&
                <li>
                    {item.text} <button onClick={() => updateArray(index)}> Remove </button>
                </li> 
            ))}
        </ul>
    );
}

export default RemovableItemList2;