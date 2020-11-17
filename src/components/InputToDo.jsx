// takes in data and processes it.
// import state in both task and input.
import React, { useState } from 'react';


const ThisInput = (props) => {
    const { list, setList } = props;
    let task = {
        name:"",
        isComplete:false
    };

    const onChange = (e) => {
        task = e.target.value;
    };
    
    const onClick = (e) => {
        // e.preventDefault();
        setList([...list,task]);
        e.target.value = "";
        task = "";
    };

    return(
        <div className="container w-25 mt-3 border ">
            <div className="h-50">
                <h1 style={{backgroundColor:'chartreuse'}} className="mx-auto rounded-pill">InputToDo.jsx</h1>

                <input onChange={onChange} className="rounded-pill text-center" style={{backgroundColor:'chartreuse'}} type="text" name="task"/>

                <button onClick={ onClick } className="mx-auto my-3" style={{backgroundColor:'chartreuse', display:'block'}}>Submit</button>
            </div>
            <div className="mx-auto">

            </div>
        </div>
    );
};

export default ThisInput;