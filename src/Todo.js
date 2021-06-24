import React, { useState } from 'react';
import Addlists from "./Addlists.jsx";
const Todo=()=>{
    const[currentitems,updateditems]=useState("");
    const[items,listitems]=useState([]);
    const Itemval=(event)=>
    {
          updateditems(event.target.value);
    };
    const addedlistitems=()=>{
        listitems((olditems)=>{
         return[...olditems,currentitems];
        });

    };
    const deleteitem=(id)=>{
        console.log("deleted");
        listitems((olditems)=>{
            return olditems.filter((arrElem,index)=>{
                return index !==id;
            });
        });
    };
    return(
    <>
    <div className="App">
            <h1>Todo List</h1>
            <div className="wrap">
            <input type="text"  placeholder="Enter Todo list" onChange={Itemval} />
            <div className="btn2">
            <button className="btn1" onClick={addedlistitems}>+</button>
            </div>
            </div>
            <ol>
                {items.map((itemval,index)=>{
                    return(<Addlists key={index}  id={index} text={itemval } onSelect={deleteitem}/>)
                })}
            </ol>
    </div>
    </>
    );
};
export default Todo;
