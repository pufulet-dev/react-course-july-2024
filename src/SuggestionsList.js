import React, { memo } from 'react';


const SuggestionsList = memo (function SuggestionsList ({ list }) {

    console.log('rendering SuggestionsList');

    return (
        <>
            <p> Suggestions: </p>
            {list.length ? (
                <ul>
                    {list.map((item, index) => (
                        <li key={index}> {item} </li>
                    ))}
                </ul>
            ) : (
                <p> - </p>
            )}
        </>
    );
});


export default SuggestionsList;