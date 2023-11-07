import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Item({isMulti, setList, id, todo, indexes, setIndexes}) {
    
    function handleMulti(event) {
        
        if (event.target.checked) {
        setIndexes(pre => [...pre, id])
        
       } else {
        setIndexes(pre => pre.filter(item => item !== id))
       }
    
    }

    return <div className="item-container">
    {isMulti && <input onChange={handleMulti} type="checkbox" value={id} />}
    <span>{todo}</span>
    {!isMulti && <DeleteIcon className="delete-icon" onClick={() => setList(pre => pre.filter((item, index) => index !== id))} />}
    
    </div>
}


export default Item;