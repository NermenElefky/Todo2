import React from 'react'
import {BsPenFill} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './additem.css'

function Additem({task , completed , tasks ,setTasks ,forEdit , setForEdit , setinputVal , setinputValbeforeEdit}) {
   const changeCompleteState = ()=>{
           
            const tasksAfterEdit =  tasks.map((ta)=>{
                return  ta.name === task ? {name : task , completed : !ta.completed , edited : ta.edited} : ta 
            })
            // now set the taks after editing 
            setTasks([...tasksAfterEdit])
   } 

   const deleteItem = ()=>{
        const tasksAfterDelete =  tasks.filter((ta)=>{
             return ta.name !== task
        })
        // now set the taks after editing 
        setTasks([...tasksAfterDelete])
      
   }

   const editInput = ()=>{
      setForEdit(true)
      setinputValbeforeEdit(task)
      setinputVal(task)
      document.querySelector(".mainInput").focus()
   }

  return (
    <div className='item'>
        <div className="task-name">
        {completed?<input type="checkbox" id={task} defaultChecked onClick={()=>changeCompleteState()} /> : <input type="checkbox" id={task} onClick={()=>changeCompleteState()} /> }        <label htmlFor = {task}>{task}</label>
        </div>
        <div className="task-help-icons">
        <BsPenFill className='penicon icon' title='edit' onClick={()=>editInput()} />
        <AiOutlineCloseCircle className='icon' title='delete'  onClick={()=>deleteItem()}/>
        </div>
    </div>
  )
}

export default Additem