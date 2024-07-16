import React, { useState } from "react";

function TabList({ labels, panels, selected = 0}) { // default value of selected is 0 IF no selected value is provided in the props 

    const  [select, setSelect] = useState(selected);

    return (
        <body style={{backgroundColor: "grey", padding: "120px 70px", margin: 0, }}>
            <ul style={{listStyleType: "none", display: "flex", margin: 0, padding: 0,}}>
                {labels.map((label, index) => (
                <li key={index}> 
                    <button 
                        style={{padding: 20, fontWeight: "bold", border: "1px solid lightgrey", backgroundColor: select !== index ? "lightgrey" : "purple", color: select !== index ? "black" : "white", cursor: "pointer",}}
                        onClick={() => {setSelect(index)}}>
                            {label} 
                    </button>
                </li>
                ))}
            </ul>
            <main style={{minHeight: 300, padding: "20px 40px", backgroundColor: "white"}}>
                { panels[select] }
            </main>
        </body>
    );
}

export default TabList;