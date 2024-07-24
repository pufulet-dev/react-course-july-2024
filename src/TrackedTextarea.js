import React, { useState, useRef } from 'react';



function TrackedTextarea ({ length : maxLength, value : defaultValue }) {

    const [currentLength, setCurrentLength] = useState(defaultValue.length);

    return (
        <div>
            <textarea 
                maxLength={maxLength} 
                defaultValue={defaultValue}
                onChange={e => setCurrentLength(e.target.value.length)}
            />
            <small>
                <p> {currentLength} / {maxLength} </p>
            </small>
        </div>
    );
}



export default TrackedTextarea;