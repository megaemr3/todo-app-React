import React, { useState } from "react";

function Input({list, setList}) {
    const [input, setInput] = useState("");
    
    function handleChange(event) {
        setInput(event.target.value)
    }
    function handleSubmit() {
        setList(pre => {
            return [...pre, input];
        })
        setInput("")
    }
    
    return <div className="input-container">
    <input onChange={handleChange} type="text" value={input} />
    <input onClick={handleSubmit} type="submit" value="Add"/>
    </div>
}

export default Input;