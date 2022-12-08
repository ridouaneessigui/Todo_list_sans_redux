import React,{useState} from 'react'
import shortid from 'shortid'
const TodoForm = (props) => {
    const[text,setText]=useState('');
    const[subtext,setSubText]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onSubmit({
            id:shortid.generate(),
            title:text,
            subtitle:subtext,
            complete:false,
        })
    };
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleChange2=(e2)=>{
        setSubText(e2.target.value)
    }
  return (
   <form onSubmit={handleSubmit}>
        <input placeholder='Title' type="text" onChange={handleChange} value={text}>
        </input>
        <input placeholder='SubTitle' type="text" onChange={handleChange2} value={subtext}>
        </input>
        <button onClick={handleSubmit}>Push</button>
   </form>
  )
}

export default TodoForm