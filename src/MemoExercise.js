import React, { useState } from 'react';
import SuggestionsList from "./SuggestionsList";

function MemoExercise ({ list : initialList }) {

    const [list, setList] = useState(initialList);
    const [query, setQuery] = useState("");


    function search (e) {
        e.preventDefault();
        setList(initialList.filter(
            item => item.toLowerCase().includes(query.toLowerCase())
        ));
    }

    return (
        <>
            <form onSubmit={search}>
                <input type="text" value={query} onChange={(e) => {setQuery(e.target.value)}} />
                <button> Search </button>
            </form>
            <SuggestionsList list={list} /> 
        </>
    );
}


export default MemoExercise;