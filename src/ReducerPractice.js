import React, { useState, useReducer } from 'react';


// some key points:
// reducer has a binary variant and a ternary variant

// for ternary variant:
// e.g. useReducer(dataReducer, initialData, getNormalizedData);
// when you need to process in a function and the return value is the data to be used for initialization



function ReducerPractice () {

    // // BEFORE REDUCER:
    // const [count, setCount] = useState(0);
    // return (
    //     <>
    //         <h1> {count} </h1>
    //         <button onClick={() => {setCount(0)}}> Reset </button>
    //         <button onClick={() => {setCount(count + 1)}}> + </button>
    //         <button onClick={() => {setCount(count - 1)}}> - </button>
    //     </>
    // );



    // AFTER REDUCER:
    function reducer (state, action) {
        switch (action) {
            case 'INCREMENT':
                return {...state, count: state.count + 1};
            case 'DECREMENT':
                return {...state, count: state.count - 1};
            case 'RESET':
                return {...state, count: 0};
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 })
    
    return (
        <>
            <h1> {state.count} </h1>
            <button onClick={() => {dispatch('RESET')}}> Reset </button>
            <button onClick={() => {dispatch('INCREMENT')}}> + </button>
            <button onClick={() => {dispatch('DECREMENT')}}> - </button>
        </>
    );

}


export default ReducerPractice;