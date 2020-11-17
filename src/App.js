import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ThisInput from "./components/InputToDo";
import TaskComp from './components/MyTask';

function App() {
  const [list, setList] = useState([]);
  return (
    <div style={{backgroundColor:'black', height:'100vh'}} className="App mx-auto">
      <table style={{color:'chartreuse', border:'2px solid chartreuse'}} className="mx-auto">
        <thead>
          <tr>
            <th colSpan="2">Todo List</th>
          </tr>
          <tr>
            <th style={{color:'chartreuse', border:'2px solid chartreuse'}}>Tasks</th>
            <th style={{color:'chartreuse', border:'2px solid chartreuse'}}>Completed?</th>
          </tr>
        </thead>
        <tbody>
      {list.map((task, i) => (
        <TaskComp task={task} setList={setList} index={i} list={ list }/>
      ))}

        </tbody>
      </table>
      

      {/* list and setList are passed down and excepted as props later. */}
    
      <ThisInput list={ list } setList={ setList }/>
    </div>
  );
}

export default App;
