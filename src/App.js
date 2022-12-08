import './App.css';
import {
  faCircleCheck,faPen,faTrashCan
} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
function App() {
  const [toDo,setToDo]=useState([
    {"id":1,"title":"task 1","subtitle":"AAA","satus":true},
   {"id":2,"title":"task 2","subtitle":"bbb","satus":false}
  ]);
  const[todotoshow,setTodoToshow]=useState("all");
  const[updateData,setUpdateData]=useState('');

  const addTask=(todo)=>{
      setToDo([todo,...toDo])
  }

  const updateTodoToshow=(s)=>{
    setTodoToshow(s);
  }

  if(todotoshow === "active"){
    toDo=toDo.filter((todo)=>!todo.complete);
  }
  else if(todotoshow === "complete"){
    toDo=toDo.filter((todo)=>!todo.complete);
  }
  return (
    <div className="container App">
      <br/>
      <br/>
      <h2>
        To Do List App
      </h2>
      <TodoForm onSubmit={addTask}/>
      <div>
      <button onClick={()=>updateTodoToshow("all")}>Show All</button>
      <button onClick={()=>updateTodoToshow("complete")}>Show completed</button>
      <button onClick={()=>updateTodoToshow("active")}>Show active</button>
      </div>
      {toDo && toDo.length ?'':'No Tasks ...'}
      {toDo && toDo.map((task,index)=>{
        return(
          <React.Fragment key={task.id}>
            <div className='col taskBg'>
            <div className={task.satus?'done':''}>
            <sapn className='taskText'>{task.title} </sapn>
            <sapn className='taskText'>{task.subtitle}</sapn>
            </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>
  );
}

export default App;
