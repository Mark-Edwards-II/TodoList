import React, {useState} from "react";


const TaskComp = (props) => {
    const { task, list, index, setList } = props;
        const onClick = () => {
            setList(()=>{
                return list.filter(task => list.indexOf(task) !== index);
            });
        };

    const onChange = e =>{
        console.log(e);
        setList(()=>{
            console.log(list[index]);
            let temp = list.splice(index,1);
            temp.isComplete = !temp.isComplete;
            console.log(list[index]);
            return [...list, temp];

        })
    }

    return(
            <tr>
                <td 
                style={{color:'chartreuse', border:'2px solid chartreuse'}}>
                            {task}
                </td>
                <td style={{color:'chartreuse', border:'2px solid chartreuse'}}>
                            <input type="checkbox" name="" checked={ task.isComplete }  onChange={ onChange }/>
                            <button style={{padding: '0px', heigt: '20px', width:'20px' ,color:'chartreuse', backgroundColor:"red"}}  onClick={ onClick } >X</button>
                </td>
            </tr>
    );
};
export default TaskComp;