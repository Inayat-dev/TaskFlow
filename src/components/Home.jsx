import React, {useEffect, useState} from 'react'
import '../assets/Home.css'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const {user, setUser, task, setTask, users } = React.useContext(UserContext)
    const [updateID, setUpdateID] = useState({taskID: -111})

    function handleLogout(){
        setUser((pre)=>{
            return {    
                ...pre,
                isLoggedIn: false,
                ID : null,
            }
        })
        navigate("/login")
    }

    useEffect(()=>{
        user.isLoggedIn?"":navigate("/login")
    },[])

    function addTask(data){
        
        setTask((pre)=>{
            const taskID = Math.floor(Math.random()*1000000)
            return [...pre,
                {
                    ID: user.ID,
                    taskID: taskID,
                    title: data.get("task"),
                    description: data.get("description"),
                    dueDate: data.get("date"),
                    priority:data.get("priority")
                }
            ]
        })
    }

    function renderUpdateBox(element){
        if(task.some((e)=> { return e.taskID == updateID.taskID} )){
            setUpdateID({taskID: -111})
        }else
        setUpdateID(element)
    }

    function updateTask(data){
        renderUpdateBox()
        setTask((pre)=>{
            return pre.map((e,i)=>{
                if(e.taskID == data.get("taskID")){
                    return {
                        ID: user.ID,
                        taskID: data.get("taskID"),
                        title: data.get("task"),
                        description: data.get("description"),
                        dueDate: data.get("date"),
                        priority:data.get("priority")
                    }
                }else{
                    return e
                }
            })
        })
    }

    function deleteTask(id){
        setTask((pre)=>{
            return pre.filter((e)=> e.taskID != id )
        })
    }

  return (
    <>
        <header>
            <h1>Task<span>Flow</span></h1>
            <nav className="nav-bar">
                <div>Welcome, <span>{user.username}</span></div>
                <div>
                    <button onClick={handleLogout} >Logout</button>
                </div>
            </nav>
        </header>

        <main className="main-content">
            <form className="task-input" action={addTask}>
                <input type="text" placeholder="Enter a new task" name='task' />
                <input type="text" placeholder="Enter a task description" name='description' /><br />
                <input type="Date" placeholder="Enter a new task" name='date'/>
                <select name='priority'>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select><br />
                <button>Add Task</button>
            </form>

            {task.some((e)=> { 
                return e.taskID == updateID.taskID
            } ) && 

            <div className='main-update'>
                <form className="task-input update" action={updateTask}>
                    <button type='button' onClick={()=>{
                        renderUpdateBox()
                    }} style={{fontFamily:"arial",borderRadius:"100%",margin:"0 auto 0",background:"red"}}>X</button> <br />
                    <input type="hidden" name="taskID" value={updateID.taskID} />
                    <input type="text" placeholder="Enter a new task" name='task' defaultValue={updateID.title} />
                    <input type="text" placeholder="Enter a task description" name='description' defaultValue={updateID.description} /><br />
                    <input type="Date" placeholder="Enter a new task" name='date' defaultValue={updateID.dueDate}/>
                    <select name='priority' defaultValue={updateID.priority}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select><br />
                    <button style={{width:"100%"}}>Update Task</button>
                </form>
            </div>
            
            }

            <div className="task-list">
                <table border="2">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            task.map((element, key)=>{
                                if(!(user.ID == element.ID)){
                                        return ""
                                }
                                return(
                                    <tr key={key}>
                                        <td>{element.title}</td>
                                        <td>{element.description}</td>
                                        <td>{element.dueDate}</td>
                                        <td>{element.priority}</td>
                                        <td>
                                            <button onClick={()=>{
                                                renderUpdateBox(element)
                                            }}>Edit</button>
                                            <button onClick={()=>{
                                                deleteTask(element.taskID)
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }                       
                    </tbody>
                </table>
            </div>
        </main>

        <footer className="footer">
            <p>© 2026 My App. All rights reserved.</p>
        </footer>
    </>
  )
}
