import React from 'react'
import './todoinput.css'
import Additem from './additem'


function Todoinput({setinputVal , inputVal , tasks , setTasks , forEdit , inputValbeforeEdit , setFilterVal}) {
     const AddItem = (e , task_name)=>{
        e.preventDefault()
        if (forEdit){
            const tasksAfterEdit =  tasks.map((ta)=>{
                return  ta.name === inputValbeforeEdit ? {name : inputVal , completed : ta.completed , edited : true} : ta 
            })
            // now set the taks after editing 
            setTasks([...tasksAfterEdit])
        }
        else {
            //check if the task name is empty     
        if (task_name == "" || task_name == " "){
            alert("Please write the task name")
            return
        }

        // check if task name exist before
        let isFirst = tasks.every((task)=>{
            return task.name !== task_name
        })
        isFirst ? setTasks([...tasks , {name : task_name , completed : false , edited : false}]) : alert("This task is already exist")

        }
        // make the input empty
        setinputVal("")
    }
    const filterChange = (e)=>{
        setFilterVal(e.target.value)
    }
  return (
    <div className='todoinputparent'>
            <form>
                <input className='mainInput' type ="text" placeholder='Add your item' value = {inputVal} onChange={(e)=>setinputVal(e.target.value)}/>
                <button onClick={(e)=>AddItem(e , inputVal)}>Add</button>
            </form>
            <div className='filter'>
                <label htmlFor="todofilter">Filter</label>
                <select name="todofilter" id="todofilter" onClick={(e)=>filterChange(e)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">unCompleted</option>
                </select>
            </div>
    </div>
  )
}

export default Todoinput