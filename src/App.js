import React , {useState , useEffect} from 'react'
import './App.css'
import Todoinput from './components/todoinput'
import Additem from './components/additem'


function App() {
  const [inputVal , setinputVal] = useState("")
  const [tasks , setTasks] = useState([])
  const [forEdit , setForEdit] = useState(false)
  const [inputValbeforeEdit , setinputValbeforeEdit] = useState("")
  const [filterVal , setFilterVal] = useState("all")

  return (
    <div className = "parent">
        <div className='todo-wrapper'>
            <h2>To-Do List</h2>
            <Todoinput setinputVal = {setinputVal} inputVal = {inputVal} tasks = {tasks} setTasks = {setTasks} setForEdit = {setForEdit} forEdit ={forEdit} inputValbeforeEdit = {inputValbeforeEdit} setFilterVal = {setFilterVal}/>
            {filterVal == "all" ? console.log("all"): console.log("not")}
            {tasks.map((task)=>{
                if (filterVal == "all"){
                  return <Additem task = {task.name} completed = {task.completed} tasks={tasks} setTasks = {setTasks} setForEdit = {setForEdit} forEdit ={forEdit} setinputVal = {setinputVal} setinputValbeforeEdit = {setinputValbeforeEdit} key = {Math.random()}/>
                }
                else if (filterVal == "completed"){
                    if (task.completed == true){
                      return <Additem task = {task.name} completed = {task.completed} tasks={tasks} setTasks = {setTasks} setForEdit = {setForEdit} forEdit ={forEdit} setinputVal = {setinputVal} setinputValbeforeEdit = {setinputValbeforeEdit} key = {Math.random()}/>
                    }
                }
                else {
                  if (task.completed != true){
                    return <Additem task = {task.name} completed = {task.completed} tasks={tasks} setTasks = {setTasks} setForEdit = {setForEdit} forEdit ={forEdit} setinputVal = {setinputVal} setinputValbeforeEdit = {setinputValbeforeEdit} key = {Math.random()}/>
                  }
                }
            })}
        </div>
    </div>
  )
}

export default App
