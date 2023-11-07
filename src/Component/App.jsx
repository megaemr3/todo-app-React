import React, {useState} from "react";
import Input from "./Input";
import Item from "./Item"

function App() {
    const [list, setList] = useState([]);
    const [isMulti, setIsMulti] = useState(false);
    const [indexes, setIndexes] = useState([]);
   
    function handleMultiDelete() {
        if (list.length === indexes.length) {
            setIsMulti(false)
            setList([])
            setIndexes([])
        } else if (indexes.length === 1) {
            setIsMulti(false)
            setList(pre => pre.filter((item, index) => index !== indexes[0]))
            setIndexes([])
        } else if (indexes.length > 1) {
            setIsMulti(false)
            setList(pre =>  pre.reduce((newArr, item, index) => {
                const filteredArr = indexes.filter(value => value === index);
                if (!filteredArr.length) {
                    return newArr = [...newArr, item];
                } else {
                    return newArr
                } 
            },[]))
            setIndexes([])
        }
        
    }

    function handleMultiSelect(event) {
        if (event.target.checked) {
            document.querySelectorAll(".todo-container input").forEach((item, index) => {
                item.checked = true;
                setIndexes(pre => [...pre, index])
            })
        } else {
            document.querySelectorAll(".todo-container input").forEach((item, index) => {
                item.checked = false;
                setIndexes([])
            })
        }
    }

   return <>
        <Input list={list} setList={setList} />
        <div className="control-panel">
            {isMulti && <input onChange={handleMultiSelect} type="checkbox"/>}
            {list.length > 0 && <input onClick={() => setIsMulti(pre => {
                isMulti && setIndexes([])
                return !pre
                })} className="select-button" type="button" value="Select" />}
            {isMulti && <input onClick={handleMultiDelete} className="delete-button" type="button" value="Delete" />}
        </div>
        <div className="todo-container">
        {list.map((item, index) => {
            return <Item key={index} id={index} todo={item} isMulti={isMulti} indexes={indexes} setIndexes={setIndexes} setList={setList} />
        })}
        </div>
        </>
}

export default App;